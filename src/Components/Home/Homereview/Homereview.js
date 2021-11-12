import React, { useEffect, useState } from 'react';
import ReactStars from "react-rating-stars-component";
import './Homereview.css'


const Homereview = () => {


  
  const [review, setReview] = useState([])
  

  useEffect(() => {
    fetch('https://powerful-ravine-38865.herokuapp.com/allreview')
      .then(res => res.json())
      .then(data => {
        setReview(data)
      })
  }, [])
 

 

  return (


     
























    <div className="container">
      <h3>Our <span style={{ "color": "red" }}>clients Reviews</span></h3>
      < hr />
      <div className="row">
        {
          review.map(rw => <div className="col-md-4 my-3 "><div className="" style={{ "width": "18rem" }}>

            <div className="card-body">
              <h5 className="card-title text-danger">Name:<span className="text-dark">{rw.name}</span>   </h5>
              <h5 className="card-title text-danger">Email:<span className="text-dark" >{rw.email}</span> </h5>

              <h5 className="card-text text-danger">Description:<small className="text-dark">{rw.description}</small> </h5>

             
       <div className="d-flex justify-content-center alings-items-center ">
         
            <h5 className="mt-2">Ratings:</h5>
         
         <div className="mt-2">
         <ReactStars 
    count={5}
    value={rw.ratings}
  
    size={20}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    filledIcon={<i className="fa fa-star"></i>}
    activeColor="#DC3545"
  />
         </div>
    
       </div>

  


              

            </div>
          </div></div>)
        }

      </div>
      < hr />
    </div>
   
  );
};

export default Homereview;