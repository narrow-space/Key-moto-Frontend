import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useForm,} from "react-hook-form";
import Footer from '../../../Footer/Footer';
import Header from '../../Header/Header';
const Addproducts = () => {
    const [alert,setAlert]=useState('')
    const { register, handleSubmit,reset , formState: { errors } } = useForm();
   
    const onSubmit = data => {
        
        
        console.log(data)
        fetch('https://powerful-ravine-38865.herokuapp.com/addproducts',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            setAlert(data)
            
            if(data.insertedId){
         
                setTimeout(function() {
                    setAlert('')
                    }, 700);
            }
            reset()
            
        })
    
    }
    return (
        <>
        <Header></Header>
       <div className="container">
            <div className="w-50 mx-5 text-center ">
        <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Add<span className="text-danger">a Products</span></h2>
            { alert.insertedId &&
    <Alert variant="success" >Add product Successfully</Alert>

}
            <input className="form-control my-3" {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />

            
            <input className="form-control my-3"   {...register("enginepower")} placeholder="enginepower" />

            <input className="form-control my-3" {...register("enginetype")} placeholder="enginetype" />

            
            <input className="form-control my-3" {...register("img")} placeholder="img" />

            
            <input className="form-control my-3" type="number" {...register("price")} placeholder="price" />

            
            <input className="form-control my-3" {...register("displacement")} placeholder="displacement" />

            
            <input className="form-control my-3" {...register("type")} placeholder="type" />

            
            <input className="form-control my-3" {...register("year")} placeholder="year" />

            

            <button className="btn btn-primary w-100 ">Add product</button>
            
        </form>

    </div>
       </div>
       <Footer></Footer>
       </>
    );
};

export default Addproducts;