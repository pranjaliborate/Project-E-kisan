import React from 'react'

function Slider() {
  return (
    <div className='d-flex justify-content-center' >
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="https://img.etimg.com/thumb/msid-89266931,width-1200,height-900/news/economy/agriculture/natural-farming-will-be-promoted-along-the-ganga-river-corridor-announces-finance-minister.jpg" class="d-block " alt="..." style={{height :"100vh" ,width:"98vw"}}/>
            </div>
            <div class="carousel-item">
            <img src="https://wallpaperaccess.com/full/4293117.jpg" class="d-block " alt="..." style={{height :"100vh" ,width:"98vw"}}/>
            </div>
            <div class="carousel-item">
            <img src="https://wallpaperaccess.com/full/6443448.jpg" class="d-block " alt="..." style={{height :"100vh" ,width:"98vw"}}/>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
    </div>
  )
}

export default Slider