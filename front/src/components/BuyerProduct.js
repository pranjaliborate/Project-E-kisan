
import {useState , useEffect} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";

function BuyerProduct(){
    const username = sessionStorage.getItem("authenticatedUser")
    const [list ,setList] = useState([]);
    const history = useHistory();

    var [searchitem, setSearchitem] = useState({ crop: '' });

    // var [hasLoginFailed, sethasLoginFailed] = useState(false);
    var handleMysearch = (e) => {
        e.preventDefault();
        var name = e.target.name;
        var value = e.target.value;
        setSearchitem({ ...searchitem, [name]: value, });
    };


    useEffect(() => {    
       axios
      .get("http://localhost:8080/admin/products",{})
      .then((response) => {
        setList(response.data);   
      })
      .catch((error) => {
        console.log(error.response);
      });}, []);

    function handleSearchAll() {
     
      axios
      .post("http://localhost:8080/admin/products",{})
      .then((response) => {
        setList(response.data);   
      })
      .catch((error) => {
        console.log(error.response);
      });
      console.log(list)
  }

    function handleSearch(e) {
        e.preventDefault();
        axios
        .get("http://localhost:8080/product/"+searchitem.crop)
        .then((response) => {
          setList(response.data);   
        })
        .catch((error) => {
          console.log(error.response);
        });
    }

    

   

    var [selectedquantity, setSelectedQuantity] = useState({ quantity: ''});

   
    var handleChange = (e) => {
        e.preventDefault();
        var name = e.target.name;
        var value = e.target.value;
        setSelectedQuantity({ ...selectedquantity, [name]: value, });
        console.log(selectedquantity.quantity)
    };

    

    function addProduct(product)
    {
      console.log(product);
      console.log(product.crop);
      console.log();

      if(selectedquantity.quantity>product.quantity || selectedquantity.quantity<0)
      {
        alert("selected quantity not available")
      }
      else
      {
        axios
        .post("http://localhost:8080/buyercart/addcart", {
          buyer_username : username,
          crop : product.crop,
          quantity : selectedquantity.quantity,
          expectedprice : ((product.expected_Price/product.quantity)*selectedquantity.quantity).toFixed(2),
          farmername : product.farmer.firstname
        })
        .then((response) => {
            if(response.status === 201)
          {
            
              alert("Product Added to the cart")
          }
          console.log(response.data);
             
        })
        .catch((error) => {
          console.log(error.response);
        });
      }
     
    }

    return(
        <div>
                <div class="d-flex justify-content-between">
                <div >
                    <button type="button" className="btn btn-warning mt-3" onClick={handleSearchAll}>All</button>
                </div>

                <div class="container d-flex justify-content-center">
                  <div className="row">
                    <div className="col-12 " >
                      <form class="d-flex mt-3">
                        <input class="form-control me-2" type="search" placeholder="Search For Product" aria-label="Search" name="crop" 
                          value={searchitem.crop}
                          onChange={handleMysearch} />
                        <button class="btn btn-outline-danger" type="submit" onClick={handleSearch}>Search</button>
                      </form>
                    </div>
                  </div>
                </div>

              
                </div>

      <div className="container d-flex justify-content-center">
        <div className="row col-8">

        <table className="table table-dark table-hover  ">
        <thead><tr><td>Crop Category</td><td>Quantity</td><td>Price/Quintal</td><td>Farmer</td><td></td></tr></thead>
        <tbody>
        
        {list.map((item)=>{
                                    return(
                                        <tr key={item.pid}>                                            
                                           <td>{item.crop}</td>
                                           <td>{item.quantity}</td>
                                            <td>₹{(item.expected_Price/item.quantity).toFixed(2)}</td>
                                            <td>{item.farmer.firstname}</td>
                                            <td><input type="number" name="quantity" className="form-control" min="1" max={item.quantity} placeholder="Quantity" style={{width:"100px"}}
                                             onChange={handleChange}/></td>
                                            <td ><button type="button" class="btn btn-warning" onClick={()=>addProduct(item)}>Add To Cart</button></td>                                          
                                        </tr>
                                )}) 
        }
        </tbody>
        </table>
        
        </div>
      </div>
     
        </div>
    )
}

export default BuyerProduct;