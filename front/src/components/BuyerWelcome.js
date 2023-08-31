import react ,{useState}from "react";
import { useParams } from 'react-router-dom';
import AuthenticateService from "./AuthenticateService";
import SideBar from "./SideBar";

import BuyerProduct from "./BuyerProduct";
import BuyerCart from "./BuyerCart";
import BuyerProfile from "./BuyerProfile";


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

const [components, setComponents] = useState(<BuyerProduct/>); 
     
    var showCart = ()=>{
    //   window.location = `/farmer-order/${username}`;
    setComponents(<BuyerCart/>)
    }
    var showProduct = ()=>{
        // window.location = `/farmer-product`;
        setComponents(<BuyerProduct/>)
      }

      function handleMyProduct(){
            
      }
  

      function handleProfile(){
        setComponents(<BuyerProfile/>)
      }
    

      

    return(
        <>
            <div className="container-fluid" >
                <div className="row " style={{backgroundColor:"rgb(201,192,187)"}}>

            <div class="col-3" style={{width:"20vw" ,backgroundColor:"rgb(196,174,173)"}}>
               
                
                    <button class="btn btn-outline-success me-2" type="button" style={{width:"30vh" , marginTop:"10vh"}} onClick={showProduct} >View Products</button>
                    <button class="btn btn-outline-success me-2" type="button" style={{width:"30vh" ,marginTop:"10vh"}} onClick={showCart}>My Cart</button>
                    <button class="btn btn-outline-success me-2" type="button" style={{width:"30vh" , marginTop:"10vh"}} onClick={handleProfile} >Update Profile</button>
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