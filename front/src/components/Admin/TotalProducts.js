import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useHistory } from "react-router-dom";

function TotalProducts() {
  const history = useHistory();
    const { username } = useParams();

    const [list, setList] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8080/admin/products")
            .then((response) => {

                setList(response.data);

            })
            .catch((error) => {
                console.log(error.response);
            });
    }, []);
    console.log(list);
   
    return (
        <div>
            <div> <div class="container my-4 ">

                <hr />

                <div class="row">




                    <div class="col-lg-12 col-md-6 mb-4">

                        <div class="card bg-secondary">
                            <div class="card-header">
                                <center> <b className='text-warning text-uppercase fw-bold'> Product List </b> </center>
                            </div>

                            <div className='row '>
                                <div className='col-12'>

                                {list.map((item) => {
                                        return (
                                            <center>

                                                <div class="card-body d-flex justify-content-center col-8">
                                                    <h5 class="card-title"></h5>
                                                    <div class="card-text col-12">
                                                        <div class="col-md-12">
                                                            <div class="card mb-3">
                                                                <div class="card-body">
                                                                    <div class="row">
                                                                        <div class="col-sm-3">
                                                                            <h5 class="mb-0 mt-5 text-uppercase fw-bold text-info">{(item.crop)}</h5>
                                        
                                                                           
                                                                        </div>
                                                                        <div class="col-sm-3">
                                                                            <h5 class="mb-0 mt-3 text-uppercase fw-bold">Seller</h5>
                                                                            <hr />
                                                                            <h6 className='mb-0 mt-4  '>{item.farmer.firstname}</h6>

                                                                        </div>

                                                                        <div class="col-sm-3">
                                                                            <h5 class="mb-0 mt-3 text-uppercase fw-bold">Quantity</h5>
                                                                            <hr />
                                                                            <h6 className='mb-0 mt-4'>{item.quantity}</h6>

                                                                        </div>
                                                                        <div class="col-sm-3">
                                                                            <h5 class="mb-0 mt-3 text-uppercase fw-bold">Exp Price</h5>
                                                                            <hr />

                                                                          
                                                                                <h6 className='mb-0 mt-4 text-success'>{item.expected_Price}</h6>
                                                                           
                                                                        </div>

                                                                    </div>
                                                                    <hr />

                                                                    <hr />

                                                                    <div class="row">
                                                                        <div class="col-sm-12">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </center>
                                        )
                                    })
                                    }

                                </div>

                            </div>




                        </div>


                    </div>


                </div>
            </div>
            </div>
        </div>
    )
}

export default TotalProducts