import React from "react"
import '../App.css';
import comp3img from "../img/comp3.jpg"


 function Comp3() {
  return (
    <>

      <div className="comp3">
        <div className = "img-text3">
         <h1> WHY 14K?</h1>
         <h6>14k Gold is more durable and resilient against normal wear and tear than 18k or 24k gold. That is why both our Solid Gold and Gold-Bonded Chains are crafted with 14k Gold, ensuring enduring quality.</h6>
        </div>
        <div className="head3">
        <img src={comp3img} alt="a latte" className="img3" />
        </div>
      </div> 
      
    </>
    )
 
}



export default Comp3



















