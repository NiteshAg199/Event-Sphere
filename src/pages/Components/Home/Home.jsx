import React from "react";
import './Home.css';
import Cards from "../../cards/cards";
import data from "../../../resource/data";
import CustomSlider from "../customeSlider/CustomSlider";

const Home=()=>{
    function clickLink(str){
        console.log(str);
}
    return(
        <>
            <div className="mainHomePage">
                <div className="mainHomePageLogoName">Festiva</div>
                    <div className="mainHomePageCoverAnimation">
                        <img className="mainHomePageCoverImage" src="https://www.oyorooms.com/blog/wp-content/uploads/2018/02/event.jpg" />
                        <div class="bottom-left">Bottom Left</div>
                        <div class="top-left">Top Left</div>
                        <div class="top-right">Top Right</div>
                        <div class="bottom-right">Bottom Right</div>
                        <div class="centered">Centered</div>
                    </div>
                    {/* <div className="eventsCardsContainer">
                    <CustomCarousel>{data.map(data=>{return<Cards img={data.img} title={data.title} clickLink={clickLink}></Cards>})}</CustomCarousel>
                    </div> */}

                    <CustomSlider slides={data} clickLink={clickLink}/>
            </div>
        </>
    );
}
export default Home;