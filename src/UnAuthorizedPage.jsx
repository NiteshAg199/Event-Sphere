import React, { useState } from "react";
import photo from './projectPhotos/website-error-401-authorization-required-260nw-571762609.webp'
import './UnAuthorizedPage.css';
function UnAuthorizedPage(){
  const[bgimage,setBgImage]=useState({});
  

  function handleMouseEnter(){
    setBgImage({"filter": "blur(2px)",
      "-webkit-backdrop-filter": "blur(2px)",
      // "backdrop-filter": "blur(2px)"
    });
    
  }
  function handleMouseLeave(){
    setBgImage({});
  }
  function handleClick(e){
    e.preventDefault();
  }
    return(
      <>
      <div className="container" style={bgimage}>
      <button  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}onClick={handleClick} className="btn"><b>Go to Home Page</b></button>
      </div>
      </>  
    );
}
export default UnAuthorizedPage;