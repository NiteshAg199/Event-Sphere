import React from "react";
import data from "../../resource/data";
import Cards from "../cards/cards";
import './EventType.css'
const EventType=()=>{
    function clickLink(str){
            console.log(str);
    }
    return(
        <>
            <div className="eventTypeContainer">
                <div className="eventTypeHeading">Event Types</div>
                <div className="eventsCardsContainer">
                {data.map(data=>{return<Cards img={data.img} title={data.title} clickLink={clickLink}></Cards>})}
                </div>
            </div>
        </>
    )
}
export default EventType;