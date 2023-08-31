import {useState , useEffect} from "react";
import axios from 'axios';

function BuyerProfile()
{
    const [personalInfo , setPersonalInfo] = useState([])
    
    const [firstnameflag , setFirstNameflag] = useState(false);
    const [lastnameflag , setLastNameflag] = useState(false);
    const [emailflag , setEmailflag] = useState(false);
    const [addressflag , setAddressflag] = useState(false);
    const [passwordflag , setPasswordflag] = useState(false);
    const [contactflag , setContactflag] = useState(false);
    const[usernameflag , setUserNameflag]=useState(false);
    
    function handleFlag(e){
        if(e.target.name === "firstname")
        {
            setFirstNameflag(true);
        }
        if(e.target.name === "lastname")
        {
            setLastNameflag(true);
        }

        if(e.target.name === "email")
        {
            setEmailflag(true);
        }
        if(e.target.name === "address")
        {
            setAddressflag(true);
        }
        if(e.target.name === "contact")
        {
            setContactflag(true);
        }
        if(e.target.name === "username")
        {
            setUserNameflag(true);
        }
        if(e.target.name === "password")
        {
            setPasswordflag(true);
        }
        
    }

    function handleCancel(){
        setFirstNameflag(false);
        setLastNameflag(false);
        setEmailflag(false);
        setAddressflag(false);
        setContactflag(false);
        setUserNameflag(false);
        setPasswordflag(false);  
    }


   
     const [changeInfo, setChangeInfo] = useState({firstname: "",
         lastname: "",
           email: "",
           contact: "",
           user_name: sessionStorage.getItem("authenticatedUser"),
           address:"",
           password: "",
          });
        
    console.log(changeInfo);
        function changeProfile(){
            //http://localhost:9099/change-profile/farmer/adii
            const url = "http://localhost:8080/change-profile/buyer/"+sessionStorage.getItem('authenticatedUser')
              axios
              .post(url, {
                firstname: changeInfo.firstname,
                lastname: changeInfo.lastname,
                email: changeInfo.email,
                contact: changeInfo.contact,
                user_name: changeInfo.user_name,
                address:changeInfo.address,
                password: changeInfo.password, 
              })
              .then((response) => {
                console.log(response.data)
                if(response.data == "update succesfully" )
                {
                alert("updated")  
                window.location.reload(false);
                } 
              })
              .catch((error) => {
                console.log(error.response);
              });
            
          }
    const handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setChangeInfo({ ...changeInfo, [name]: value });
      
    };
    console.log(changeInfo);
   
    const url = "http://localhost:8080/buyer/"+sessionStorage.getItem('authenticatedUser');
    useEffect(() => {      
        axios
        .get(url,{})
        .then((response) => {
         
        console.log(response.data);
          setPersonalInfo(response.data);
         
        })
        .catch((error) => {
          console.log(error.response);
        });
        
    
    }, []);
    return(
        <div class="container my-4 ">

        <hr/>

        <div class="row">

       
      
   
            <div class="col-lg-12 col-md-6 mb-4">

                <div class="card bg-secondary">
                    <div class="card-header">
                        <center> <b> Personal Info </b> </center>
                    </div>

                    <div className='row '>
                        <div className='col-12'>
                        <div className='container-fluid d-flex justify-content-evenly '>
 
                        <div className='row col-3'>
    <div class="card " style={{ width: "12rem", height: "40vh", marginTop: "10vh", marginBottom: "10vh" ,backgroundColor:"black" ,color: "white" }}>
    
    <center><img src="https://img.freepik.com/free-icon/important-person_318-10744.jpg" class="card-img-top" alt="..." style={{ width: "100px", height: "100px" , marginTop: "5vh" }} /></center>
    <div class="card-body">
        <center><b><h5 class="card-title">{personalInfo.firstname}</h5></b></center>
        <center><p class="card-text">Buyer</p></center>
        <center><a href="#" class="btn btn-primary"  style={{ marginTop: "vh" }}>Info</a></center>
    </div>
    </div>
    </div>
    
    </div>
                        <center> 
      
                        <div class="card-body d-flex justify-content-center col-8">
                        <h5 class="card-title"></h5>
                        <div class="card-text col-12">
                            <div class="col-md-12">
                            <div class="card mb-3">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0 mt-3">First Name :</h6>
                                        </div>
                                        <div class="col-sm-3 mt-3 text-secondary">
                                            {personalInfo.firstname}
                                        </div>

                                        <div class="col-sm-6 mt-2 text-secondary">
                                        {! firstnameflag && <button type="button" name="firstname"  class="btn btn-link" onClick={handleFlag}>change</button>}
                                        {firstnameflag && <input type="text" class="form-control" name="firstname"  placeholder="Enter New First Name"  
                        value={changeInfo.firstname}
                        onChange={handleChange}/>}
                                        </div>
                                        
                                    </div>
                                    <hr />
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0 mt-3">Last Name :</h6>
                                        </div>
                                        <div class="col-sm-3 mt-3 text-secondary">
                                            {personalInfo.lastname}
                                        </div>

                                        <div class="col-sm-6 mt-2 text-secondary">
                                        {! lastnameflag && <button type="button" name="lastname"  class="btn btn-link" onClick={handleFlag}>change</button>}
                                        {lastnameflag && <input type="text" class="form-control" name="lastname"  placeholder="Enter New Last Name"  
                        value={changeInfo.lastname}
                        onChange={handleChange}/>}
                                        </div>
                                        
                                    </div>
                                    <hr />
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0 mt-3">Contact No: :</h6>
                                        </div>
                                        <div class="col-sm-3 mt-3 text-secondary">
                                        {personalInfo.contact}
                                        </div>

                                        <div class="col-sm-6 mt-2 text-secondary">
                                        {! contactflag && <button type="button" name="contact" class="btn btn-link" onClick={handleFlag}>change</button>}
                        {contactflag && <input type="text" name="contact" class="form-control"  placeholder="Enter New ContactNo"
                         value={changeInfo.contact}
                        onChange={handleChange}/>}
                                        </div>
                                        
                                    </div>
                                    <hr/>
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0 mt-3">Email :</h6>
                                        </div>
                                        <div class="col-sm-3 mt-3 text-secondary">
                                            {personalInfo.email}
                                        </div>

                                        <div class="col-sm-6 mt-2 text-secondary">
                                        {! emailflag && <button type="button" name="email"  class="btn btn-link" onClick={handleFlag}>change</button>}
                                        {emailflag && <input type="text" class="form-control" name="email"  placeholder="Enter New Email"  
                        value={changeInfo.email}
                        onChange={handleChange}/>}
                                        </div>
                                        
                                    </div>
                                    <hr/>
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0 mt-3">Address :</h6>
                                        </div>
                                        <div class="col-sm-3 mt-3 text-secondary">
                                            {personalInfo.address}
                                        </div>

                                        <div class="col-sm-6 mt-2 text-secondary">
                                        {! addressflag && <button type="button" name="address"  class="btn btn-link" onClick={handleFlag}>change</button>}
                                        {addressflag && <input type="text" class="form-control" name="address"  placeholder="Enter New Address"  
                        value={changeInfo.address}
                        onChange={handleChange}/>}
                                        </div>
                                        
                                    </div>
                                    <hr/>
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0 mt-3">User Name :</h6>
                                        </div>
                                        <div class="col-sm-3 mt-3 text-secondary">
                                            {personalInfo.user_name}
                                        </div>

                                        <div class="col-sm-6 mt-2 text-secondary">
                                        {! usernameflag  && <button type="button" name="username"  class="btn btn-link" onClick={handleFlag}>change</button>}
                                        {usernameflag  && <input type="text" class="form-control" name="firstname"  placeholder="Enter New User Name"  
                        value={changeInfo.user_name}
                        onChange={handleChange}/>}
                                        </div>
                                        
                                    </div>
                                    <hr/>
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <center>{! passwordflag && <button type="button" name="password" class="btn btn-link" onClick={handleFlag}>change password</button>}
                        {passwordflag && <input type="text" name="password" class="form-control"  placeholder="Enter New password" 
                        value={changeInfo.password}
                        onChange={handleChange}/>}
                        </center>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                             
                            {
                        (firstnameflag || lastnameflag ||emailflag ||addressflag ||passwordflag ||contactflag ||usernameflag) &&
                                
                                <center className="d-flex justify-content-evenly">
                                <button type="button" class="btn btn-success" onClick={changeProfile}>Save</button>
                                <button type="button" class="btn btn-danger" onClick={handleCancel}>Cancel</button>
                                </center>
                            }
                           
                        </div>
                    </div>
                        </center>
                        </div>

                    </div>


                    

                </div>


            </div>


        </div>
        </div>
    )
}

export default BuyerProfile;