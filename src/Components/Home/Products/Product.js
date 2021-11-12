import React, { useEffect, useState } from 'react';
import logo from '../../../images/logo-dark.svg'
import './Product.css'
import Singleproducts from './Singleproducts/Singleproducts';

const Product = () => {
    const [bikes,setBikes]= useState([]);
    useEffect(()=>{
     fetch('https://powerful-ravine-38865.herokuapp.com/bikes')
     .then(res=>res.json())
     .then(data=>{
         console.log(data)
         setBikes(data.slice(0,6))
     })

    },[])
    return (
        <div className="container product">
           <img  className="my-4" src={logo} alt="" /><br />
           <span className="fw-bolder" style={{"color":"#E63619","fontSize":"16px"}}>TAKING RIDES TO A NEWER LEVEL</span>
           <h3 style={{"fontWeight":"700","fontSize":"48px","fontStyle":"normal"}}>CHOOSE A MOTORCYCLE</h3>
           <p style={{ "padding": "20px",
     "color": "gray"}} className="fw-light">A sportbike, or sports bike, is a motorcycle optimized for speed, acceleration, braking, and cornering <br />  on paved roads,typically at the expense of comfort and fuel economy by comparison with other motorcycles,</p>
               
               <div className="row">

                   {
                     bikes.map(bike=><Singleproducts
                     bike={bike}
                     key={bike.id}
                     >


                     </Singleproducts>)
                   }
               </div>



        </div>

    );
};

export default Product;