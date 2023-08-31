import React from 'react'
import { useEffect, useState } from 'react'

import axios from 'axios';
function FarmersList() {
  const [farmerlist, setFarmerlist] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/admin/getfarmers")
      .then((response) => {

        setFarmerlist(response.data);

      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);
  console.log(farmerlist);

  return (
    <div className='container-fluid d-flex justify-content-evenly '>
    {farmerlist.map((item)=>{
      const url = "/farmer-info/"+item.user_name ;
    
     
  return(
    
    <div className='row col-3'>
    <div class="card " style={{ width: "15rem", height: "50vh", marginTop: "10vh", marginBottom: "10vh" ,backgroundColor:"black" ,color: "white" }}>
      
      <center><img src="https://www.shutterstock.com/image-vector/vector-indian-farmer-crops-260nw-1873318486.jpg" class="card-img-top" alt="..." style={{ width: "100px", height: "100px" , marginTop: "5vh" }} /></center>
      <div class="card-body">
        <center><b><h5 class="card-title">{item.firstname}</h5></b></center>
        <center><p class="card-text">Farmer</p></center>
        <center><a href={url} class="btn btn-primary"  style={{ marginTop: "8vh" }}>SEE DETAILS</a></center>
      </div>
      </div>
  </div>
)}) 
}
</div>
    
  )
}
export default FarmersList