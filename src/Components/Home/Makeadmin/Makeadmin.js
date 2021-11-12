import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Footer from '../../Footer/Footer';
import Header from '../Header/Header';

const Makeadmin = () => {
    const [alert, setAlert] = useState('')
    console.log(alert)
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {

        console.log(data)
        fetch('https://powerful-ravine-38865.herokuapp.com/users/admin', {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(data => {
                setAlert(data)
                
                if (data.modifiedCount) {

                    setTimeout(function () {
                        setAlert('')
                    }, 700);
                }
                console.log(data)
                reset()
            })
    }
    return (
        <>
        <Header></Header>
        <div className="container">

            {
                alert?.modifiedCount &&

                <Alert variant="success">Admin added Successfully</Alert>
                
                
                }

          

<div className="row">
    <div className="col-md-4">


    </div>
    <div className="col-md-7 mt-4">
        <div className="w-50 mx-5 text-center">


            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Make<span className="text-danger">Admin</span></h2>
                {alert.insertedId &&
                    <Alert variant="success" >Review Successfully</Alert>

                }


                <input className="form-control my-3"   {...register("email")} placeholder="email" />

                {/* <input  className="form-control my-3"   {...register("password")} placeholder="password" /> */}



                {/* <input value={user?.email}  className="form-control my-3" {...register("bookingid")} placeholder="email" /> */}

                <button className="btn btn-primary w-100 ">Make Admin</button>

            </form>

        </div>

    </div>
    <div className="col-md-1">


    </div>






</div>
      
     
     
      
      
        </div >
        <Footer></Footer>
        </>
    );
};

export default Makeadmin;