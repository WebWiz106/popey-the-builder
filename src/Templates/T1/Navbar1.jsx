import React from 'react'

function Navbar1({websiteData}) {
  return (
    <>
    <nav class="navbar navbar-expand-lg " style={{backgroundColor:websiteData?.Navbar?.colors?.bgColor,"fontFamily":websiteData?.Navbar?.fontFamily}}>
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            {websiteData.Navbar.Data.map((options)=>(
                options.isEnabled?<li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#" style={{color:websiteData?.Navbar?.colors?.fontColor}} >{options.optionName}</a>
                      </li>:""
            ))}
           
          </ul>
        </div>
      </div>
    </nav>
    
    
    </>
  )
}

export default Navbar1