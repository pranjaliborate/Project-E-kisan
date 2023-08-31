import React from 'react'
import { useState } from 'react';
import axios from 'axios';

function ForgotPassword() {

    var [info, setInfo] = useState({ usertype: '', newpassword: '', username: '', confirmpassword: '' });

    function handleChange(e) {
        e.preventDefault();
        var name = e.target.name;
        var value = e.target.value;

        setInfo({ ...info, [name]: value },)
    };


    var handleSubmit = (e) => {
        e.preventDefault();

        if (info.newpassword === info.confirmpassword) {

            const url = `http://localhost:8080/${info.usertype}/forgot-password`

            console.log(info)
            const pass = info.newpassword;
            const username = info.username;
            axios
                .post(url, {
                    password: pass,
                    user_name: username

                })
                .then((response) => {
                    console.log(response.data);
                    if (response.data === "updated") {
                        alert("password Updated Successfully");
                        window.location('/')
                    }

                })
                .catch((error) => {
                    console.log(error.response);
                });

        }
        else {
            alert("change password and confirmed password must be same");
        }


    }

    console.log(info.username);
    return (
        
        <div className="container-fluid" >
        <div className="row rounded" >
            <div className="col-md-4 offset-md-4 " >
                <div className="login-form bg-light mt-4 p-4 " style={{ borderRadius: "30px" }} >
                    <form onSubmit={handleSubmit}   className="row g-3" >
                        <h4 className="text-center">Change-Password</h4>

                        <div className="col-12 d-flex flex-row">


                            <select class="form-select" name="usertype" onChange={handleChange} aria-label="Default select example" required>
                                <option > select Category</option>
                                <option value="farmer" >Farmer</option>
                                <option value="buyer">Buyer</option>   
                            </select>
                        </div>

                        <div className="col-12 d-flex flex-row">


                            <input type="text" name="username" className="form-control" placeholder="Username" 
                            value={info.username}  onChange={handleChange}/>
                        </div>
                        <div className="col-12 d-flex flex-row">


                            <input type="password" name="newpassword" className="form-control" placeholder="Enter Change Password" 
                            value={info.newpassword} 
                            onChange={handleChange}/>
                        </div>

                        <div className="col-12 d-flex flex-row">


                            <input type="password" name="confirmpassword" className="form-control" placeholder="Confirm Password" 
                            value={info.confirmpassword} 
                            onChange={handleChange}/>
                        </div>

                        <div className="col-12 text-center">
                            <button type="submit" class="btn btn-success ">Confirm</button>
                        </div>
                    </form>
                    <hr className="mt-4" />

                </div>
            </div>
        </div>
    </div>

            
 )           
};

            export default ForgotPassword;


