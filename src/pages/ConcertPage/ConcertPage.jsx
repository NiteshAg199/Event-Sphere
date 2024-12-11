import React, { useEffect } from "react";
import './ConcertPage.css';
import cover from '../../projectPhotos/download.jpeg'
const ConcertPage=()=>{
    // useEffect(aync(),[])
    return(
        <>
            <div className="ConcertPageContainer">
                <div className="ConcertName">Arijit Singh Concert</div>
                <div style={{backgroundImage:`url(${cover})`,backgroundSize:"cover",backgroundRepeat:"no-repeat", width:"60vw",height:"60vh"}}>
                    {/* <img src={cover} alt="eventPhoto"/> */}
                </div>
                <div className="ConcertDetails">
                    <div className="ConcertDesc">shortdescAboutConcert</div>
                    <div className="ConcertLocation">date and time</div>
                    <div className="ConcertLocation">location</div>
                    <div className="ConcertLocation">price</div>
                    <div className="RemainingTicket">1024/total</div>
                    <button>Book Ticket</button>
                </div>
                <div className="aboutPage">long desc</div>
            </div>
        </>
    );
}
export default ConcertPage;