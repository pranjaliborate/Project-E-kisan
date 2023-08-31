import {useHistory} from "react-router-dom"
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function Product(){
    const history = useHistory();
    let user = sessionStorage.getItem('authenticatedUser');
    const [product,setProduct] = useState({ farmer:{user_name: user}, crop: '' , quantity:'' ,expected_Price:''});

    
    var handleChange = (e) => {
        e.preventDefault();
        var name = e.target.name;
        var value = e.target.value;
        setProduct({ ...product, [name]: value, });
    };

    function addProduct(e){
        var name = e.target.name;
        var value = e.target.value;

        setProduct({ ...product, [name]: value, })
    }

    function cancelProduct(){
        setProduct( { farmer:{user_name: user}, crop: '' , quantity:'' ,expected_Price:''}) ;
        }
    
    function confirmProduct(){

        axios
        .post("http://localhost:8080/product/add", {
            farmer:{user_name: user},
             crop: product.crop , 
             quantity: product.quantity ,
             expected_Price: product.expected_Price
        })
        .then((response) => {
          console.log(response.status===200);
          alert("Product added successfully");
        })
        .catch((error) => {
       console.log(error.response);
         });

        }
    console.log(product);
    return(
        <div>
            
            <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-danger mt-3" ><Link className="dropdown-item" to="/farmer/custom-product">Add Your Product</Link></button>
            </div>


            <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-danger mt-3" onClick={history.goBack}>Back</button>
            </div>

            <div className=" container  d-flex flex-direction: column  justify-content-evenly ">
            <div class="row">

            <div className="col-3 card p-4 mt-4 mb-4 me-4 ms-4" style={{width: "18rem"}}>
            <img src="https://5.imimg.com/data5/PW/AC/MY-38700875/m-p-origin-sarbati-wheat-500x500.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Wheat (गेहूं)</h5>
                <p className="card-text">गेहूँ मध्य पूर्व के लेवांत क्षेत्र से आई एक घास है, जिसकी खेती दुनिया भर में की जाती है। पाचन और कब्ज पत्ता गोभी के फायदे में पाचन और कब्ज से राहत दिलाना भी शामिल है।कैंसर से रोकथामदर्द से </p>
                
                <button type="button" className="btn btn-danger mt-3"  data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat"  name="crop" value="wheat" onClick={addProduct}>Add Product</button>
            </div>
            </div>

            <div className="col-3 card p-4 mt-4 mb-4 me-4 ms-4" style={{width: "18rem"}}>
            <img src="https://www.apnikheti.com/upload/crops/4929idea993089idea99cottonplant1.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Cotton (कपास)</h5>
                <p className="card-text">भारत में कपास की खेती लगभग 6 मिलियन किसानों को प्रत्यक्ष तौर पर आजीविका प्रदान करता है और 40 से 50 लाख लोग इसके व्यापार या प्रसंस्करण में कार्यरत है। </p>
                <button type="button" className="btn btn-danger mt-3"  data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat"  name="crop" value="cotton" onClick={addProduct}>Add Product</button>
            </div>
            </div>

            <div className="col-3 card p-4 mt-4 mb-4 me-4 ms-4" style={{width: "18rem"}}>
            <img src="https://www.agrifarming.in/wp-content/uploads/2015/05/Bajra-seed.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Bajar</h5>
                <p className="card-text">बाजरा एक ऐसी फसल है ऐसे किसानो जो कि विपरीत एवं सीमित वर्षा वाले क्षेत्रो तथा बहुत कम उर्वरको की मात्रा के साथ  फसले अच्छा उत्पादन नही दे पाती के लिए संतुत की जाती है।

</p>
<button type="button" className="btn btn-danger mt-3"  data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat"  name="crop" value="Bajar" onClick={addProduct}>Add Product</button>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
            </div>

            <div className="col-3 card p-4 mt-4 mb-4 me-4 ms-4" style={{width: "18rem"}}>
            <img src="https://www.grainmart.in/news/wp-content/uploads/2019/07/Jowar.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">jawari</h5>
                <p className="card-text">ज्वार एक पोषक तत्व है। इसके अलावा ज्वार में काफी मात्रा में पोटेशियम, फॉस्फोरस, कैल्शियम और आयरन भी होता है।.</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                <button type="button" className="btn btn-danger mt-3"  data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat"  name="crop" value="jawari" onClick={addProduct}>Add Product</button>
            </div>
            </div>

            <div className="col-3 card p-4 mt-4 mb-4 me-4 ms-4" style={{width: "18rem"}}>
            <img src="https://www.world-grain.com/ext/resources/Article-Images/2020/12/GMR_Rice_AdobeStock_64819529_E_Nov.jpg?t=1609338918&width=1080" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Rice</h5>
                <p className="card-text"> भारत में भात, खिचड़ी सहित काफी सारे पकवान बनते हैं। चावल का चलन दक्षिण भारत और पूर्वी-दक्षिणी भारत में उत्तर भारत से अधिक है।</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                <button type="button" className="btn btn-danger mt-3"  data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat"  name="crop" value="Rice" onClick={addProduct}>Add Product</button>
            </div>
            </div>

            <div className="col-3 card p-4 mt-4 mb-4 me-4 ms-4" style={{width: "18rem"}}>
            <img src="https://gardenerspath.com/wp-content/uploads/2019/09/How-to-Plant-and-Grow-Cabbage-Cover.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Cabbage</h5>
                <p className="card-text">सब्जियों को सेहत के लिए बहुत फायदेमंद माना जाता है और उन्हीं सब्जियों में से एक है पत्ता गोभी. पत्ता गोभी को सब्जी बनाने से लेकर कई व्यंजनों में</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                <button type="button" className="btn btn-danger mt-3"  data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat"  name="crop" value="Cabbage" onClick={addProduct}>Add Product</button>
            </div>
            </div>

            </div>
            </div>

            
            
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Required Input</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">Quantity You Have:</label>
                            <input type="number" name="quantity" class="form-control" id="recipient-name" value={product.quantity}
                            onChange={handleChange}/>
                        </div>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">Expected Price:</label>
                            <input type="number" name="expected_Price" class="form-control" id="recipient-name" value={product.expected_price}
                                                  onChange={handleChange}/>
                        </div>
                        
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={cancelProduct}>Cancel</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={confirmProduct}>Confirm</button>
                    </div>
                    </div>
                </div>
                </div>

        </div>
    )
}

export default Product;