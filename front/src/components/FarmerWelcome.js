import react ,{useState}from "react";
import { useParams } from 'react-router-dom';
import AuthenticateService from "./AuthenticateService";
import SideBar from "./SideBar";

import FarmerProduct from "./FarmerProduct";
import FarmerOrder from "./FarmerOrder";
import FarmerProfile from "./FarmerProfile";
import FarmerAddedProduct from "./FarmerAddedProduct";

function Welcome()
{
    const { username } = useParams()
  const myStyle={
    backgroundImage: 
"url('https://cdn.pixabay.com/photo/2016/09/21/04/46/barley-field-1684052_1280.jpg')",
    height:'100vh',
    marginTop:'0px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};

const sidebarStyle={
    backgroundImage: 
"url('https://i.pinimg.com/236x/f4/7f/24/f47f24709105d4738edda3ebbfc9e35a.jpg')",
    height:'100vh',
    marginTop:'0px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};

const [components, setComponents] = useState(<FarmerProduct/>); 
     
    var handleOrder = ()=>{
    //   window.location = `/farmer-order/${username}`;
    setComponents(<FarmerOrder/>)
    }
    var handleProduct = ()=>{
        // window.location = `/farmer-product`;
        setComponents(<FarmerProduct/>)
      }

      function handleMyProduct(){
        setComponents(<FarmerAddedProduct/>)
      }
  

      function handleProfile(){
        setComponents(<FarmerProfile/>)
      }
    

      

    return(
        <>
            <div className="container-fluid" >
                <div className="row " style={{backgroundColor:"grey"}}>

            <div class=" bg-light col-3" style={{width:"20vw" ,backgroundColor:"rgb(44, 56, 61)"}}>
               
                
                    <button class="btn btn-outline-info me-2" type="button" style={{width:"30vh" , marginTop:"10vh"}} onClick={handleProduct} >Add Products</button>
                    <button class="btn btn-outline-info me-2" type="button" style={{width:"30vh" ,marginTop:"10vh"}} onClick={handleOrder}>See Orders</button>
                    <button class="btn btn-outline-info me-2" type="button" style={{width:"30vh" , marginTop:"10vh"}} onClick={handleMyProduct} >My Product</button>
                    <button class="btn btn-outline-info me-2" type="button" style={{width:"30vh" , marginTop:"10vh"}} onClick={handleProfile} >Update Profile</button>
                    {/* <button class="btn btn-outline-info me-2" type="button" style={{width:"30vh",marginTop:"10vh"}} onclick={handleMyProduct}>My Product</button> */}
                    {/* <button class="btn btn-outline-info me-2" type="button" style={{width:"30vh",marginTop:"10vh"}} onclick={handleProfile}>Update Profile</button> */}
              
                
                </div>
                <div className="col-9">
                    {components}
                </div>

                </div>
              
            </div>
            
        </>
    );
}

export default Welcome;