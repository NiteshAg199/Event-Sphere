import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailIcon from '@mui/icons-material/Mail';
import './footer.css'
function Footer(){
    return (
        <>
        <div className="footer">
            <div>
                <span className="logo-footer-name">Festiva</span>
                <FacebookIcon />
                <YouTubeIcon></YouTubeIcon>
                <TwitterIcon></TwitterIcon>
                <MailIcon></MailIcon>
            </div>
        </div>
        </>
    )
}
export default Footer;