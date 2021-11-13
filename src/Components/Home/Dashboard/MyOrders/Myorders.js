import React, { useEffect, useState } from 'react';

import { Card, Col, Row, Button, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import Footer from '../../../Footer/Footer';
import Useauth from '../../../Hooks/Useauth';
import Header from '../../Header/Header';


const Myorders = () => {
    const [deleteCount, setDeleteCount] = useState(false)
    const [orders, setOrders] = useState([])
    const { user } = Useauth()

   
  
  useEffect(()=>{
    const url = `https://powerful-ravine-38865.herokuapp.com/purchaseorders?email=${user.email}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>setOrders(data))
  },[deleteCount])
       

//   const handledelete = (id) => {

//     const proceed = window.confirm('are sure want to delete???')
//      if(proceed){
         
//        fetch(`https://powerful-ravine-38865.herokuapp.com/deleteorder/${id}`, {
//            method: 'DELETE',
//            headers: {
//                'content-type': 'application/json'
//            },

//        })
//            .then(res => res.json())
//            .then(result => {

//                setDeleteCount(result)

//                console.log(result);

//            }
//            )

//      }



//    }




   const handledelete = (id) => {





(swal({
  title: "Are you sure?",
  text: "Once deleted, you will not be able to recover this imaginary file!",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete)=> {
  

  if (willDelete) {
   
   
    fetch(`https://powerful-ravine-38865.herokuapp.com/deleteorder/${id}`, {
      method: 'DELETE',
      headers: {
      'content-type': 'application/json'
      },
      
      })
      .then(res => res.json())
      .then(data=>{
        setDeleteCount(data)
      })
      
      
    
    
  } 
  
  else {
    
    swal("Your imaginary file is safe!");
  }
  
}))

 
    
 










}

  


  


    return (
        <>
        <Header></Header>
        <div className="container">

            <h2 className="text-danger">My Total Orders:{orders.length}</h2>

            <div className="row">

                {
                             orders.map(pd=><div pd={pd} key={pd._id} className="col-md-4 my-4 ">
                                         
                             <div style={{ width: '22   rem' }}>
                       <Card.Img variant="top" src={pd?.img} />
                       <Card.Body>
                         <Card.Title>{pd?.name}</Card.Title>
                        <div className="d-flex justify-content-center">
                           <div className="mx-4">
                               <h6 className="fw-normal">YEAR</h6>
                              <p>{pd?.year}</p>
                           </div>
                           <div  style={{'borderRight':"thin solid rgb(184, 178, 178)","height":"50px"}} ></div>
                           <div  className="mx-4">
                               <h6 className="fw-normal">TYPE</h6>
                               <p>{pd?.type}</p>
                           </div>
                           <div  style={{'borderRight':"thin solid rgb(184, 178, 178)","height":"50px"}} ></div>
                           <div  className="mx-4">
                               <h6 className="fw-normal">POWER</h6>
                               <p>{pd?.displacement}</p>
                           </div>
                        </div>
                        <hr />
                         <Card.Text>

                         <div className="d-flex justify-content-center">
                           <div className="mx-4">
                               <small className="fw-normal">ENGINE TYPE</small>
                              <p>{pd.enginetype}</p>
                           </div>

                           <div  className="mx-4">
                               <small className="fw-light">ENGINE POWER</small>
                               <small>{pd?.enginepower}</small>
                           </div>

                        </div>

                         </Card.Text>
                         <div className="d-flex justify-content-center align-items-center">


                          <button onClick={()=>handledelete(pd._id)} className="btn btn-danger mx-3 mt-3">Delete</button>


                           <h3 style={{"color":"red"}} className="mx-3 mt-3">${pd?.price}</h3>

                           <p style={{"color":"black"}} className="mx-3 mt-3">{pd?.status}</p>
                           
                       </div>
                       </Card.Body>
                     </div>

                         </div>
                               
                                 
                             )


                }

            </div>
        </div>
           <Footer></Footer>
        </>
    );
};

export default Myorders;