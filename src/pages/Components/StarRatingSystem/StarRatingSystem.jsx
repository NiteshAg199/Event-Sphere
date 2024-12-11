import React from "react";

function StarRatingSystem({totRatings,ratedBy}){
    let fullFilledStar = Math.floor(totRatings/ratedBy);
    let halfFilledStar = Math.round(totRatings/ratedBy)-fullFilledStar;
    let starFilledArray=Array(fullFilledStar).fill(1);
    let halfFilledStarArray= Array(halfFilledStar).fill(1);
    let noStarFilledArray=Array(5-fullFilledStar-halfFilledStar).fill(1);
    console.log(starFilledArray);
    return(
        <>
            {starFilledArray.map((e,ind)=>{return <span key={ind} className="fa fa-star checked" style={{"color":"rgb(186, 186, 2)"}}></span>})}
            {halfFilledStarArray.map((e,ind)=>{ return <span key={ind} className="fa fa-star-half" style={{"color":"rgb(186, 186, 2)"}}></span>})}
            {noStarFilledArray.map((e,ind)=>{return <span key={ind} className="fa fa-star"></span>})}
        </>
    )
}
export default StarRatingSystem;