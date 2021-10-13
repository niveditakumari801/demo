import React from "react"
import '../App.css';
import comp1img from "../img/comp111.webp"


 function Comp1() {
  return (
    <>

      <div className="image">
          <div className="head">
        <img src={comp1img} alt="a latte" className="img1" />
        </div>
        <div className = "img-text">
            <h4>OUR</h4>
         <h1> MATERIALS </h1>
        </div>
      </div> 
      
    </>
    )
 
}



export default Comp1



















// import React from 'react'
// import comp1img from '../img/comp1.jpg'
// import '../App.css';

// function Comp1() {
//   return (
//     <>

// <div>
//     <img src = {comp1img} alt = "image1" />
  
// </div>
// <div>
//     <h3>Hello World</h3>
// </div>


// {/* <div
//         class="bg_image"
//         style={{
//           backgroundImage: 'url('+hcbgImage+')',
//           backgroundSize: "cover",
//           height: "100vh",
//           color: "#f5f5f5"
//         }}
//       >
//         <h1>This is Text on top</h1>
//       </div> */}
//     </>
//   );
// }

// export default Comp1;
