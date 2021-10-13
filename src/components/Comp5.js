import React from 'react'
import '../App.css';
import comp5img from "../img/comp5.jpg"


 function Comp5() {
  return (
    <>

      <div className="comp5">
        
      <div className="head5">
        <img src={comp5img} alt="a latte" className="img5" />
        </div>

        <div className = "img-text5">
         <h1> STERLING SILVER</h1>
         <h6>Our Silver chains are pure 925 Sterling Silver coated in Rhodium. Rhodium is one of the most costly precious metals due to its rarity, and gives our chains their added shine and durability.</h6>
        </div>



      </div> 
      
    </>
    )
 
}

export default Comp5

