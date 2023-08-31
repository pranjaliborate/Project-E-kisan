
import react from "react";
import { useState,useEffect } from "react";
import AuthenticateService from "../AuthenticateService";
import axios from 'axios'
function AdminLogin()
{

    const myStyle={
        backgroundImage: 
    "url('https://cdn.pixabay.com/photo/2016/09/21/04/46/barley-field-1684052_1280.jpg')",
        height:'100vh',
        marginTop:'0px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };


    
    var [login, setLogin] = useState({ user_name: '', password: '' });

    var handleChange = (e) => {
        e.preventDefault();
        var name = e.target.name;
        var value = e.target.value;
      setLogin({ ...login, [name]: value, });
    };

    var onSubmit = (e)=>{
        e.preventDefault();

        axios
    .post("http://localhost:8080/admin/login", {
      password: login.password,
      user_name: login.user_name,
    })
    .then((response) => {
      console.log(response.data);

      if(response.status === 200)
      {

        AuthenticateService.AdminLogin(login.user_name);

        console.log(login.user_name);
        setLogin({user_name: '', password: '' });
       
        window.location = `/admin-welcome/${login.user_name}`;
        
      }
      else{
        console.log(login.user_name);
       // sethasLoginFailed(true);
       setLogin({user_name: '', password: '' });
        alert("Invalid Password/Username");

      }

    })
    .catch((error) => {
      console.log(error.response);
    });
    }

    return(
        <div>
                <div className="container-fluid" style={myStyle}>
                    <div className="row rounded">
                        <div className="col-md-4 offset-md-4 " >
                            <div className="login-form bg-light mt-4 p-4 " >
                                <form onSubmit={onSubmit} className="row g-3" >
                                    <h4 className="text-center">Admin-Login</h4>
                                    
                                    <div className="col-12 d-flex flex-row">
                                        
                                        <img className="mt-2 me-2" src="https://cdn-icons-png.flaticon.com/512/456/456212.png" style={{height: "20px" , width:"20px"}}></img>
                                        <input type="text" name="user_name" className="form-control" placeholder="Username" 
                                         value={login.user_name}
                                         onChange={handleChange}/>
                                    </div>
                                    <div className="col-12 d-flex flex-row">
                                        
                                    <img className="mt-2 me-2" src="https://cdn-icons-png.flaticon.com/512/3064/3064155.png" style={{height: "20px" , width:"20px"}}></img>
                                        <input type="password" name="password" className="form-control" placeholder="Password"
                                        value={login.password}
                                        onChange={handleChange}/>
                                    </div>
                                   
                                    <div className="col-12 text-center">
                                        <button type="submit" class="btn btn-dark ">Login</button>
                                    </div>
                                </form>
                                <hr className="mt-4"/>
                                
                            </div>
                        </div>
                    </div>
                </div>
           
        </div>
    );
}


export default AdminLogin;