import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import Useauth from '../../../Hooks/Useauth';

const Review = () => {
    const [alert, setAlert] = useState('')
    const { user } = Useauth()
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {

        console.log(data)
        fetch('https://powerful-ravine-38865.herokuapp.com/review', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);


                setAlert(data)
                if (data.insertedId) {
                    swal({
                        title: "Good job!",
                        text: "Review added Successfully",
                        icon: "success",
                        button: "Ok",
                      });
                   
                }



                reset()

            })

    };
    return (
        <div>



            <div className="row">
                <div className="col-md-4">


                </div>
                <div className="col-md-7 mt-4">
                    <div className="w-50 mx-5 text-center">


                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h2>Please <span className="text-danger">Make a Review</span></h2>
                            
                            <input value={user.displayName} className="form-control my-3" {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />

                            {/* <input className="form-control my-3" {...register("email")} placeholder="email" /> */}
                            <input value={user.email} className="form-control my-3"   {...register("email")} placeholder="email" />
                            <textarea className="form-control my-3" {...register("description")} placeholder="description" />

                            {/* <input value={user?.email}  className="form-control my-3" {...register("bookingid")} placeholder="email" /> */}

                            
                            <input {...register("ratings")} placeholder="ratings" className=" form-control w-100 p-2 my-2" type="number" 
                                min="0" max="5"/>


                            <button className="btn btn-primary w-100 ">Review</button>

                        </form>

                    </div>

                </div>
                <div className="col-md-1">


                </div>






            </div>





        </div>
    );
};

export default Review;