import React, { useState } from "react";
import './Filters.css';
import StarRatingSystem from "../StarRatingSystem/StarRatingSystem";
const Filters=()=>{
    const [filter,setFilter]=useState({
        "sortBy":"",
        "evtTypeFilter":""
    })
    function handleChangeFilter(e){
        console.log(e.target.name,e.target.value);
    }
    return(
        <>
            <div className="filterOuterClass">
            <div className="filterHeading">Filter</div>
            <form>
            <legend>Sorted By</legend>
                <label for="avgReviews">Avg Reviews</label>
                <input type="radio" name="sortBy" id="avgReviews" value="avgReviews"/><br/>
                <label for="bestOrganizer">Best Organizer</label>
                <input type="radio" name="sortBy" id="bestOrganizer" value="bestOrganizer"/><br/>
                <label for="charges">Prices</label>
                <input type="radio" name="sortBy" id="charges" value="charges"/><br/>
                <br/>
            <legend>Choose Event Type</legend>
                <label for="birthdayParty">Birthday Party</label>
                <input type="radio" name="evtTypeFilter" id="birthdayParty" value="Birthday Party" onChange={handleChangeFilter}/><br/>
                <label for="Reception">Reception</label>
                <input type="radio" name="evtTypeFilter" id="Reception" value="Reception" onChange={handleChangeFilter}/><br/>
                <label for="Marriage">Marriage</label>
                <input type="radio" name="evtTypeFilter" id="Marriage" value="Marriage" onChange={handleChangeFilter}/><br/>
                <label for="businessEvents">Business Events</label>
                <input type="radio" name="evtTypeFilter" id="businessEvents" value="Business Events"onChange={handleChangeFilter}/><br/>
                <br/>
            <legend>Rated</legend>
                <label for="fourPlus"><StarRatingSystem totRatings={4} ratedBy={1}/> or more</label>
                <input type="radio" name="rated" id="fourPlus" value="fourPlus" onChange={handleChangeFilter}/><br/>
                <label for="threePlus"><StarRatingSystem totRatings={3} ratedBy={1}/> or more</label>
                <input type="radio" name="rated" id="threePlus" value="threePlus" onChange={handleChangeFilter}/><br/>
                <label for="twoPlus"><StarRatingSystem totRatings={2} ratedBy={1}/> or more</label>
                <input type="radio" name="rated" id="twoPlus" value="twoPlus" onChange={handleChangeFilter}/><br/>
                <label for="onePlus"><StarRatingSystem totRatings={1} ratedBy={1}/> or more</label>
                <input type="radio" name="rated" id="onePlus" value="onePlus"onChange={handleChangeFilter}/><br/>
            </form>
            </div>
        </>
    );
}
export default Filters;