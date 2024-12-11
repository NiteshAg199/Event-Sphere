import React from "react";
import './EventOrganizerCard.css';
import StarRatingSystem from "../StarRatingSystem/StarRatingSystem";

const EventOrganizerCard=({providerName,totRatings,eventType,ratedBy,id,img,handleEventOrganizerSelector,charges})=>{
    let ratings=Math.round(((totRatings/ratedBy)+Number.EPSILON)*100)/100;
    function handleCurrentEventOrganizerSelector(e){
        e.stopPropagation();
        handleEventOrganizerSelector(id);
    }
    return(
        <>
            <div className="eventOrganizerCardOuterCss" onClick={handleCurrentEventOrganizerSelector}>
                <div className="eventOrganizerCardInnerCss">
                    <div className="eventOrganizerCardImageCss">
                        <img src={img} alt="" width="300" height="200"/>
                    </div>
                    <div className="eventOrganizerNameCardCss">{providerName}</div>
                    <div className="eventOrganizerEventTypeOuterCss">
                    <div className="eventOrganizerEventType">{eventType}</div>
                    <div className="eventOrganizerEventTypePrice">Rs. {charges}</div>
                    </div>
                    <div className="eventOrganizerStarsRating">
                        <div className="starRatings">
                        <StarRatingSystem totRatings={totRatings} ratedBy={ratedBy}/>
                        </div>
                        <div className="eventOrganizerStarsRatingValue">{`${ratings} (${ratedBy})`}</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EventOrganizerCard;