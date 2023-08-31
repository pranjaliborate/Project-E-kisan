import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function FarmerReg()
{

    const [regestration, setRegestration] = useState({
      firstname: "",
      lastname: "",
        email: "",
        contact: "",
        user_name: "",
        address:"",
        password: "",  
        
      });
      
    
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRegestration({ ...regestration, [name]: value });
  };

  const [isvalid, setIsvalid] = useState(false);

  
  console.log(regestration);
  console.log(isvalid);
  const handleSubmit = (e) => {
     e.preventDefault();
    console.log("clicked")
    if(isvalid)
    {
    axios
    .post("http://localhost:8080/farmer/add", regestration)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.response);
    });
 
   setRegestration({
     firstname: "",
     lastname: "",
     email: "",
     contact: "",
     user_name: "",
     address:"",
     password: "",
   });

   alert("Registration succefull")
  }
  else{
    alert("Registration Unsuccefull")
  }

  }



const [fnameErr, setFnameErr] = useState("")
function firstNameValidation(){
    if(regestration.firstname === "")
    {
        setFnameErr("* Invalid Firstname") ;
        setIsvalid(false);
    }
    else{
        setFnameErr("");
        setIsvalid(true);
    }
}

const [lnameErr, setLnameErr] = useState("")
function lastNameValidation(){
    if(regestration.lastname === "")
    {
      setLnameErr("* Invalid Last Name") ;
      setIsvalid(false);
    }
    else{
      setLnameErr("");
      setIsvalid(true);
    }
}

const [emailErr, setEmailErr] = useState("")
function emailValidation(){
  const regex =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  ;
    if(regex.test(regestration.email))
    {
      setEmailErr("") ;
      setIsvalid(true)
    }
    else{
      setEmailErr("* Invalid Email");
      setIsvalid(false);
    }
}

const [contactNoErr, setConatctNoErr] = useState("")
function contactNoValidation(){
    if(regestration.contact.length != 10)
    {
      setConatctNoErr("* Invalid Conatact No") ;
      setIsvalid(false);
    }
    else{
      setConatctNoErr("");
      setIsvalid(true);
    }
}

const [userNameErr, setUserNameErr] = useState("")
function userNameValidation(){
    if(regestration.user_name === "")
    {
      setUserNameErr("* Invalid User Name") ;
      setIsvalid(false);
    }
    else{
      setUserNameErr("");
      setIsvalid(true);
    }
}

const [passwordErr, setPasswordErr] = useState("")
function passwordValidation(){
    if(regestration.password === "")
    {
      setPasswordErr("* Invalid Password") 
      setIsvalid(false);
    }
    else{
      setPasswordErr("");
      setIsvalid(true);
    }
}

const [addressErr, setAddressErr] = useState("")
function addressValidation(){
    if(regestration.address === "")
    {
      setAddressErr("* Invalid Address") ;
      setIsvalid(false);
    }
    else{
      setAddressErr("");
      setIsvalid(true);
    }
}


  return (
    <div>
      <>
      {/* <section className="vh-100" > */}
      <div>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-9">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-7 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Farmer-Registration
                      </p>
                    
                      <form className="mx-1 mx-md-4" method="Post">
                        <div className="d-flex flex-column  mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="firstName"
                              name="firstname"
                              className="form-control"
                              placeholder="First Name"
                              value={regestration.firstname}
                              onChange={handleChange}
                              onBlur={firstNameValidation}
                            />
                          </div>
                          <div>
                          <span className="text-danger">{fnameErr}</span>
                          </div>
                          
                        </div>

                        <div className="d-flex flex-column  mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="lastName"
                              name="lastname"
                              className="form-control"
                              placeholder="Last Name"
                              value={regestration.lastname}
                              onChange={handleChange}
                              onBlur={lastNameValidation}
                            />
                          </div>
                          <div>
                          <span className="text-danger">{lnameErr}</span>
                          </div>
                          
                        </div>

                        <div className="d-flex flex-column  mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="email"
                              name="email"
                              className="form-control"
                              placeholder="Email"
                              value={regestration.email}
                              onChange={handleChange}
                              onBlur={emailValidation}
                            />
                          </div>
                          <div>
                          <span className="text-danger">{emailErr}</span>
                          </div>
                          
                        </div>

                        <div className="d-flex flex-column  mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="contactNo"
                              name="contact"
                              className="form-control"
                              placeholder="Contact No"
                              value={regestration.contact}
                              onChange={handleChange}
                              onBlur={contactNoValidation}
                            />
                          </div>
                          <div>
                          <span className="text-danger">{contactNoErr}</span>
                          </div>
                          </div>
                          <div className="d-flex flex-column  mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="address"
                              name="address"
                              className="form-control"
                              placeholder="Address"
                              value={regestration.address}
                              onChange={handleChange}
                              onBlur={addressValidation}
                            />
                          </div>
                          <div>
                          <span className="text-danger">{addressErr}</span>
                          </div>
                          
                        </div>


                        
                        <div className="d-flex flex-column  mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="userName"
                              name="user_name"
                              className="form-control"
                              placeholder="user Name"
                              value={regestration.user_name}
                              onChange={handleChange}
                              onBlur={userNameValidation}
                            />
                          </div>
                          <div>
                          <span className="text-danger">{userNameErr}</span>
                          </div>
                          
                        </div>

                        <div className="d-flex flex-column  mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="password"
                              name="password"
                              className="form-control"
                              placeholder="Password"
                              value={regestration.password}
                              onChange={handleChange}
                              onBlur={passwordValidation}
                            />
                          </div>
                          <div>
                          <span className="text-danger">{passwordErr}</span>
                          </div>
                          
                        </div>

                        <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
                       </form>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </section> */}
      </div>
    </>
    </div>
  );
};

export default FarmerReg;