import React from 'react'

function Card() {
  return (
    <div className='container'>
    <div className='row col-12'>
        <div class="col-md-6 mt-10 ">
         <div class="card border-warning flex-md-row mb-4 shadow-sm h-md-250 bg-success " style={{borderRadius:"40px",marginTop:"20px"}}>
            <div class="card-body d-flex flex-column align-items-start">
               <strong class="d-inline-block mb-2 text-warning">You Can Buy !!!</strong>
               
               
               <p class="card-text mb-auto">Buy Product From Recognise Farmer With Market Price</p>
               <a class="btn btn-outline-warning btn-sm" href="/buyer-login">Continue Buying</a>
            </div>
            <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="https://i.pinimg.com/564x/27/4c/3a/274c3ad7626992dde987d15a8a84064d.jpg" style={{borderRadius:"40px",width: "200px", height: "250px"}}/>
         </div>
      </div>
      <div class="col-md-6 mt-10 ">
         <div class="card border-warning flex-md-row mb-4 shadow-sm h-md-250 bg-success " style={{borderRadius:"40px",marginTop:"20px"}}>
            <div class="card-body d-flex flex-column align-items-start">
               <strong class="d-inline-block mb-2 text-warning">You Can Sell !!!</strong>
               
          
               <p class="card-text mb-auto">You Can Sell Your Product To Recognise Buyer</p>
               <a class="btn btn-outline-warning btn-sm" href="/farmer-login">Continue Selling</a>
            </div>
            <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="https://i.pinimg.com/564x/27/4c/3a/274c3ad7626992dde987d15a8a84064d.jpg" style={{borderRadius:"40px",width: "200px", height: "250px"}}/>
         </div>
      </div>
      </div>
    </div>
  )
}

export default Card