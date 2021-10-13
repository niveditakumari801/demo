import React from 'react'
import '../App.css';
import comp4img from "../img/comp4.jpg"


 function Comp4() {
  return (
    <>

      <div className="comp4">
        
        <div className = "img-text4">
         <h1> GOLD BONDED</h1>
         <h6>Our Gold-bonded pieces are pure 925 sterling silver coated 3x in the same 14k gold we use for our solid gold pieces. The thickness of our gold-bonded pieces is 3-5x the normal amount of gold found in plating.</h6>
        </div>

        <div className="head4">
        <img src={comp4img} alt="a latte" className="img4" />
        </div>

      </div> 
      
    </>
    )
 
}

export default Comp4

