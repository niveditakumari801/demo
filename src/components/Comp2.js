import React from 'react'

import '../App.css';
import comp2img from "../img/comp2.jpg"

function Comp2() {
  return (
    <>
    <div className="image">
          <div className="head">
        <img src={comp2img} alt="image" className="img1" />
        </div>
        <div className = "img-text">
            <h4>MADE IN ITALLY</h4>
         <h1> At JAXXON, we work with some of the world’s most skilled jewelers in Italy to provide only the finest chains direct to you without unnecessary markup. </h1>
        </div>
      </div> 
    </>
  );
}

export default Comp2;
