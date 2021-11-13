
import { useParams } from 'react-router';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row,Button, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useForm,} from "react-hook-form";

import { Alert } from 'react-bootstrap';
import Header from '../Header/Header';
import Useauth from '../../Hooks/Useauth';
import swal from 'sweetalert';

const Purchase = () => {
    const {bikeId} =useParams()
   const {user} =Useauth()
    const [service, setService] = useState([])
    const [foundservice, setFoundService] = useState({})
   
    const [alert,setAlert]=useState('')


    useEffect(() => {

        fetch('https://powerful-ravine-38865.herokuapp.com/bikes')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setService(data)
               


            })

    }, [])

    useEffect(() => {
        const s = service.find(sr => sr._id == bikeId)
        setFoundService(s)
    }, [service])
    // console.log(foundservice);

    const { register, handleSubmit,reset , formState: { errors } } = useForm();
    console.log(user.email)
    const onSubmit = data => {
        
       
        data.price=foundservice?.price;

        data.enginepower=foundservice?.enginepower;
        data.enginetype=foundservice?.enginetype;
        data.name=foundservice?.name;
        data.type=foundservice?.type;
        data.year=foundservice?.year;

        data.img=foundservice?.img;
        data.displacement=foundservice?.displacement;
        data.bookingid=foundservice._id;
        data.status="pending"
        data.email=user?.email
        console.log(data)

       fetch('https://powerful-ravine-38865.herokuapp.com/purchase',{
           method:'post',
           headers:{
               'content-type':'application/json'
           },
           body:JSON.stringify(data)
          
       })
       .then(res=>res.json())
       .then(data=> { 
           console.log(data);
          

        setAlert(data)
        if(data.insertedId){
            swal({
                title: "Good job!",
                text: "Successfully Ordered",
                icon: "success",
                button: "Ok",
              });
           
        }
       
           
        
        reset()
    
    })
      
      
    };

    return (


        <>
        <Header></Header>
        <div className="row mt-5 ">
        <div className="col-md-2">

        </div>
        {/* /////////////////// */}

        <div className="col-md-4 mt-5">
        <div style={{ width: '22   rem' }}>
  <Card.Img variant="top" src={foundservice?.img} />
  <Card.Body>
    <Card.Title>{foundservice?.name}</Card.Title>
   <div className="d-flex justify-content-center">
      <div className="mx-4">
          <h6 className="fw-normal">YEAR</h6>
         <p>{foundservice?.year}</p>
      </div>
      <div  style={{'borderRight':"thin solid rgb(184, 178, 178)","height":"50px"}} ></div>
      <div  className="mx-4">
          <h6 className="fw-normal">TYPE</h6>
          <p>{foundservice?.type}</p>
      </div>
      <div  style={{'borderRight':"thin solid rgb(184, 178, 178)","height":"50px"}} ></div>
      <div  className="mx-4">
          <h6 className="fw-normal">POWER</h6>
          <p>{foundservice?.displacement}</p>
      </div>
   </div>
   <hr />
    <Card.Text>
     
    <div className="d-flex justify-content-center">
      <div className="mx-4">
          <small className="fw-normal">ENGINE TYPE:</small>
         <small>{foundservice?.enginetype}</small>
      </div>
      
      <div  className="mx-4">
          <small className="fw-light">ENGINE POWER</small>
          <small>{foundservice?.enginepower}</small>
      </div>
      
   </div>

    </Card.Text>
    <div className="d-flex justify-content-center align-items-center">
      
      <h3 style={{"color":"red"}} className="mx-3 mt-3">${foundservice?.price}</h3>
  </div>
  </Card.Body>
</div>

{/* ///////////////////////////// */}
        </div>
        <div className="col-md-6 mt-5 ">
          
            <div className="w-50 mx-5 text-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Purchase<span className="text-danger">Your Order </span></h2>
                   
                    <input className="form-control my-3" {...register("displayName", { required: true, maxLength: 20 })} placeholder="Name" required />
                    {/* <input className="form-control my-3" {...register("email")} placeholder="email" /> */}
                    <input className="form-control my-3" type="number"  {...register("number")} placeholder="Number" required />
                    <input className="form-control my-3" {...register("adress")} placeholder="adress" required />

                    {/* <input value={user?.email}  className="form-control my-3" {...register("bookingid")} placeholder="email" /> */}

                    <button className="btn btn-primary w-100 ">Order Now</button>
                    
                </form>

            </div>
        </div>

       
    </div>
   </>
    
   
    );
};

export default Purchase;