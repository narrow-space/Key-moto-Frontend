
import React from 'react';
import { Card, Col, Row,Button, } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Singleproducts = (props) => {
const { name, price, id,_id, img,year,type,displacement,enginetype,enginepower} = props.bike
return (
    <div className="col-md-4 my-4 ">
        
        <div style={{ width: '22   rem' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
   <div className="d-flex justify-content-center">
      <div className="mx-4">
          <h6 className="fw-normal">YEAR</h6>
         <p>{year}</p>
      </div>
      <div  style={{'borderRight':"thin solid rgb(184, 178, 178)","height":"50px"}} ></div>
      <div  className="mx-4">
          <h6 className="fw-normal">TYPE</h6>
          <p>{type}</p>
      </div>
      <div  style={{'borderRight':"thin solid rgb(184, 178, 178)","height":"50px"}} ></div>
      <div  className="mx-4">
          <h6 className="fw-normal">POWER</h6>
          <p>{displacement}</p>
      </div>
   </div>
   <hr />
    <Card.Text>
     
    <div className="d-flex justify-content-center">
      <div className="mx-4">
          <small className="fw-normal">ENGINE TYPE</small>
         <small>{enginetype}</small>
      </div>
      
      <div  className="mx-4">
          <small className="fw-light">ENGINE POWER</small>
          <small>{enginepower}</small>
      </div>
      
   </div>

    </Card.Text>
    <div className="d-flex justify-content-center align-items-center">
      <Link to={`/bikes/${_id}`}><button className="btn btn-danger mx-3 mt-3">BUYNOW</button></Link>
      <h3 style={{"color":"red"}} className="mx-3 mt-3">${price}</h3>
  </div>
  </Card.Body>
</div>

    </div>
);
};

export default Singleproducts;