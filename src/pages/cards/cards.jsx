import React from "react"
import './cards.css'
function Cards({img,title,clickLink}){
    function handleTypeClick(){
        clickLink(title);
    }
    console.log(img);
    return(
        <>
            <div className="cardsContainer" onClick={handleTypeClick}>
                    <img src={img} alt="Cards Template" className="cardsImage" width={400} height={350} />
                    <div className="type-heading">{title}</div>
            </div>
        </>
    )
}
export default Cards;