import React from 'react';
import Navbar1 from "../Templates/T1/Navbar1";
// import Navbar2 from "../Templates/T2/Navbar2";
// import Navbar3 from "../Templates/T3/Navbar3";
// import Navbar4 from "../Templates/T4/Navbar4";
// import Navbar5 from "../Templates/T5/Navbar5";
// import Navbar6 from "../Templates/T6/Navbar6";

import Banner1 from "../Templates/T1/Banner1";
// import Banner2 from "../Templates/T2/Banner2";
// import Banner3 from "../Templates/T3/Banner3";
// import Banner4 from "../Templates/T4/Banner4";
// import Banner5 from "../Templates/T5/Banner5";
// import Banner6 from "../Templates/T6/Banner6";

// import About1 from "../Templates/T1/About1";
// import About2 from "../Templates/T2/About2";
// import About3 from "../Templates/T3/About3";
// import About4 from "../Templates/T4/About4";
// import About5 from "../Templates/T5/About5";
// import About6 from "../Templates/T6/About6";

// import Footer1 from "../Templates/T1/Footer1";
// import Footer2 from "../Templates/T2/Footer2";
// import Footer3 from "../Templates/T3/Footer3";
// import Footer4 from "../Templates/T4/Footer4";
// import Footer5 from "../Templates/T5/Footer5";
// import Footer6 from "../Templates/T6/Footer6";

// import Facilities1 from "../Templates/T1/Facilities1";
// import Facilities2 from "../Templates/T2/Facilities2";
// import Facilities3 from "../Templates/T3/Facilities3";
// import Facilities4 from "../Templates/T4/Facilities4";
// import Facilities5 from "../Templates/T5/Facilities5";
// import Facilities6 from "../Templates/T6/Facilities6";

// import Nearby1 from "../Templates/T1/Nearby1";
// import Nearby2 from "../Templates/T2/Nearby2";
// import Nearby3 from "../Templates/T3/Nearby3";
// import Nearby4 from "../Templates/T4/Nearby4";
// import Nearby5 from "../Templates/T5/Nearby5";
// import Nearby6 from "../Templates/T6/Nearby6";

function Home({websiteData}) {
  return (
    <>
    <Navbar1 websiteData={websiteData} />
    <Banner1 bannerdata={websiteData?.Home?.Banner} />
    {/* <About1 /> */}
    {/* <Facilities1 /> */}
    {/* <Nearby1 /> */}
    {/* <Footer1 /> */}
    
    
    </>
  )
}

export default Home