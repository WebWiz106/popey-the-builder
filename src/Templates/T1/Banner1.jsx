import React from 'react'

function Banner1({bannerdata}) {
  return (
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        {bannerdata.data.map((bd,index)=>{
          return <div class={`carousel-item ${index===0?"active":""}`} data-bs-interval={bd.swapTime}>
          <img src={bd.image} style={{height:bannerdata.height}} class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>{bd.heading}</h5>
            <p>{bd.subheading}</p>
          </div>
        </div>
        })}
        
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
  </div>
  )
}

export default Banner1