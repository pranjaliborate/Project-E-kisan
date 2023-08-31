import react from "react";
import { useState } from "react";
import AuthenticateService from "./AuthenticateService";
import axios from "axios";
import { useEffect } from "react";

function FarmerLogin()
{

  const myStyle={
    backgroundImage: 
"url('https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')",
    height:'100vh',
    marginTop:'0px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};


// useEffect(() => { 
//   AuthenticateService.logout();
// });
    
    var [login, setLogin] = useState({ user_name: '', password: '' });

    // var [hasLoginFailed, sethasLoginFailed] = useState(false);
    var handleChange = (e) => {
        e.preventDefault();
        var name = e.target.name;
        var value = e.target.value;
      setLogin({ ...login, [name]: value, });
    };

    console.log(login)
    var onSubmit = (e)=>{
        e.preventDefault();

        axios
    .post("http://localhost:8080/farmer/login", login)
    .then((response) => {
      console.log(response.data);

      if(response.status === 200)
      {

        AuthenticateService.farmerLogin(login.user_name);

        setLogin({user_name: '', password: '' });
        window.location = `/farmer-welcome/${login.user_name}`;
        
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
    return(<>
               
               <div className="container-fluid" style={myStyle}>
                    <div className="row rounded" >
                        <div className="col-md-4 offset-md-4 " >
                            <div className="login-form bg-light mt-4 p-4 " style={{borderRadius : "30px"}} >
                                <form onSubmit={onSubmit} className="row g-3" >
                                    <h4 className="text-center">Farmer-Login</h4>
                                    
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
                                <div className="col-12">
                                    <p className="text-center mb-0">Have not account yet? <a href="/Buyer-reg">Sign-up</a></p>
                                    <p className="text-center mb-0"><a href="/forgot-password">Forgot password?</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                         </> 
                    
    );
}

export default FarmerLogin;