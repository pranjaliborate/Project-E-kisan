import {useHistory} from "react-router-dom"
import { useState } from "react";

import axios from "axios";

function CustomProduct()
{
    const history = useHistory();

    let user = sessionStorage.getItem('authenticatedUser');

    const [product,setProduct] = useState({ farmer:{user_name: user}, crop: '' , quantity:'' ,expected_Price:''});

    var handleChange = (e) => {
        e.preventDefault();
        var name = e.target.name;
        var value = e.target.value;
        setProduct({ ...product, [name]: value, });
    };

    function handleSubmit(){

        axios
        .post("http://localhost:8080/product/add", {
            farmer:{user_name: user},
             crop: product.crop , 
             quantity: product.quantity ,
             expected_Price: product.expected_Price
        })
        .then((response) => {
          console.log(response.data);
          history.goBack();
          alert("Product added successfully");
        })
        .catch((error) => {
       console.log(error.response);
         });

        }
    console.log(product);

    return(
        <>
           <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-danger mt-3" onClick={history.goBack}>Back</button>
            </div>

            <center><table>
                
            <div className="d-flex justify-content-center mt-6 flex-column">
                <tr>
                
                <div class="row g-3 align-items-center">
                <td>
                <div class="col-auto">
                    <label for="inputPassword6" class="col-form-label">Crop</label>
                </div>
                </td>
                <td>
                <div class="col-auto">
                
                    <input type="text" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" name="crop" value={product.crop}
                            onChange={handleChange}/>
                </div>
                </td>
                </div>
                </tr>

                <tr>
                <div class="row g-3 align-items-center">
                <td>
                <div class="col-auto">
                    <label for="inputPassword6" class="col-form-label">Quantity</label>
                </div>
                </td>
                <td>
                <div class="col-auto">
                    <input type="number" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" name="quantity" value={product.quantity}
                            onChange={handleChange}/>
                </div>
                </td>
                </div>
                </tr>
                <tr>
                <div class="row g-3 align-items-center">
                <td>
                <div class="col-auto">
                    <label for="inputPassword6" class="col-form-label">Expected Price</label>
                </div>
                </td>
                <td>
                <div class="col-auto">
                    <input type="number" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" name="expected_Price" value={product.expected_Price}
                            onChange={handleChange}/>
                </div>
                </td>
                </div>
                </tr>
                <tr><td><button type="button" class="btn btn-warning" onClick={handleSubmit}>Add</button></td></tr>
            </div>
            </table></center>
        </>
    )
}

export default CustomProduct;