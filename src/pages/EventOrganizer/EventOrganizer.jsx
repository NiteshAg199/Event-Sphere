import React from 'react';
import './EventOrganizer.css';
import eventProviderData from '../../resource/eventProviderDummy.js';
import EventOrganizerCard from '../Components/EventsOrganizerCard/EventOrganizerCard';
import Filter from '../Components/Filters/Filters.jsx';
import { useState,useEffect } from 'react';

const EventOrganizer=()=>{

    const [items, setItems] = useState(eventProviderData); // All items
    const [visibleItems, setVisibleItems] = useState([]); // Items currently displayed
    const [page, setPage] = useState(1); // Current page
    const itemsPerPage = 9; 

    useEffect(() => {
        // Simulate fetching initial data
        setVisibleItems(items.slice(0, itemsPerPage));
    }, []);

    const loadMore = () => {
        // Load next batch of items
        const nextPage = page + 1;
        const start = page * itemsPerPage;
        const end = start + itemsPerPage;

        setVisibleItems(prev => [...prev, ...items.slice(start, end)]);
        setPage(nextPage);
    };

    

    const handleScroll = (event) => {
        const { scrollTop, scrollHeight, clientHeight } = event.target;
        if (scrollTop + clientHeight >= scrollHeight - 5) {
            loadMore();
        }
    };

    function handleEventOrganizerSelector(id){
        console.log(id);
    }
    return(
        <>
            <div className="eventOrganizerHeading">Event Organizer's</div>
                <div className="evtfilterAndCards">
                <Filter/>

                <div className="eventOrgannizerCardsContainer"
            onScroll={handleScroll}
        >
            {visibleItems.map((evtOrg, ind) => {
                return <EventOrganizerCard key={ind} id={ind}eventType={evtOrg.eventType} charges={evtOrg.charges} providerName={evtOrg.providerName} totRatings={evtOrg.totRatings} ratedBy={evtOrg.ratedBy} img={evtOrg.img} handleEventOrganizerSelector={handleEventOrganizerSelector}/>
            }
            )}
        </div>

                {/* <div className="eventOrgannizerCardsContainer" >
                    {eventProviderData.map((evtOrg,ind)=>{
                        return <EventOrganizerCard key={ind} id={ind}eventType={evtOrg.eventType} charges={evtOrg.charges} providerName={evtOrg.providerName} totRatings={evtOrg.totRatings} ratedBy={evtOrg.ratedBy} img={evtOrg.img} handleEventOrganizerSelector={handleEventOrganizerSelector}/>}
                    )}
                </div> */}
            </div>
        </>
    );
}
export default EventOrganizer;