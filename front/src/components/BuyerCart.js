import axios from "axios";
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useEffect} from 'react';

function BuyerCart(){

    const [list ,setList] = useState([]);
    const [confirmedlist ,setConfirmedList] = useState([]);
    const history = useHistory();
  
    const [totalPay,setTotalpay] = useState([])
  
    function handlePayment(){
       
        window.location = `/buyer-pay/${totalPay}`;
    }
    
        
        function handleRemove(e){
            const cartid = e.target.value;
            console.log(cartid);
            axios
        .post("http://localhost:8080/buyercart/remove",{
            cartid : cartid 
            })
            .then((response) => {
            console.log(response.data);   
            window. location. reload(false);
            })
            .catch((error) => {
            console.log(error.response);
            });
            console.log(list)
        }

        
       function handleRequest(order){
        axios
            .post("http://localhost:8080/buyer/addorder",{
                
                farmer : {firstname : order.farmername} ,
                crop_category : order.crop,
                quantity : order.quantity,
                total_amount : order.expectedprice,
                status : 'unapproved',
                buyer : {user_name : order.buyer_username}
                
            })
            .then((response) => {
                console.log(response.data);
                if(response.status === 201)
                {
                
                alert("Order send To request")
                }
            })
            .catch((error) => {
            });
            console.log(list)

        }
        let user = sessionStorage.getItem('authenticatedUser');
        useEffect(() => {      
            axios
            .get("http://localhost:8080/buyercart/"+user)
            .then((response) => {
                console.log(response)
                console.log(response.data)
              setList(response.data.result);  
              
            })
            .catch((error) => {
              console.log(error.response);
            });
            console.log(list)
        
        }, []);

        
        useEffect(() => {      
            axios
            .get("http://localhost:8080/buyer/orders/"+user)
            .then((response) => {
                console.log(response.data)
                setConfirmedList(response.data.result[0]);  
                console.log(response.data.result);
              //setTotalpay(list.map((item)=>{return(total = total + item.expectedprice)}))
              
            })
            .catch((error) => {
              console.log(error);
            });
            console.log(list)
        
        }, []);

        useEffect(()=>{
            let total = 0;

                for (let i = 0; i < confirmedlist.length; i++) {
                    total += confirmedlist[i].total_amount;
                    if(i===(confirmedlist.length-1))
                    {
                        setTotalpay(total);
                        console.log(totalPay);
                    }
                }
        });
        
    return(
        <div> 
            <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-danger mt-3" onClick={history.goBack}>Back</button>
            </div>
           
            <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-danger mt-3 mb-3" >Send Request</button>
            </div>
            <div className="container d-flex justify-content-center">
                <div className="row col-8">
                    
            <table class="table table-success table-hover table-striped">
                <thead>
                <tr class="table-success">
                    <td class="table-danger">Crop</td>
                    <td class="table-danger">Quantity</td>
                    <td class="table-danger">Price To Pay</td>
                    <td class="table-danger">farmername</td>
                    <td class="table-danger"></td>
                    <td class="table-danger"></td>
                </tr>
                </thead>
                <tbody>
                {list.map((item)=>{
                        return(
                            <tr class="table-success" key={item.cartid}>                                            
                            <td class="table-success">{item.crop}</td>
                            <td class="table-success">{item.quantity}</td>
                                <td class="table-success">₹{item.expectedprice}</td>
                                <td class="table-success">{item.farmername}</td>
                                <td class="table-success"><button type="button" class="btn btn-success" name="cartid" value={item.cartid} onClick={handleRemove}>Remove</button></td>   
                                <td colSpan={4}></td><td><button  type="button" class="btn btn-warning" onClick={()=>handleRequest(item)}>Order Now</button></td>                                       
                            </tr>
                            
                    )}
                    )
                    }
                    
                </tbody>
            </table>
            </div>
            </div>

            <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-danger mt-3 mb-3" >Confirmed Orders</button>
            </div>
           
            <div className="container d-flex justify-content-center">
                <div className="row col-8">
                    
            <table class="table table-success table-hover table-striped">
                <thead>
                <tr class="table-success">
                    <td class="table-danger">Crop</td>
                    <td class="table-danger">Quantity</td>
                    <td class="table-danger">Price To Pay</td>
                    <td class="table-danger">farmername</td>
                    <td class="table-danger"></td>
                </tr>
                </thead>
                <tbody>
                {confirmedlist.map((item)=>{
                        return(
                            <tr class="table-success" key={item.oid}>                                            
                            <td class="table-success">{item.crop_category}</td>
                            <td class="table-success">{item.quantity}</td>
                                <td class="table-success">{item.total_amount}</td>
                                <td class="table-success">{item.farmer.firstname}</td>    
                                <td></td>                                     
                            </tr>
                    )}) 
                    }
                    <tr><td colSpan={3}>Total To Pay</td><td>₹{totalPay}</td><td><button  type="button" class="btn btn-danger" onClick={handlePayment}>Pay Now</button></td></tr>
                </tbody>
                
            </table>
            </div>
            </div>
        </div>


 

    )
};

export default BuyerCart;