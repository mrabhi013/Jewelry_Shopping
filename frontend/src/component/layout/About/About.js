import React from "react";
import "./aboutSection.css";
import { Typography, Avatar } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

const About = () => {
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dspboq8gh/image/upload/v1634707248/products/xupo3he7avq9gfeabobt.jpg"
              alt="Founder"
            />
            <span>
              Jewellery Shopping E-commerce Wesbite. 
            </span>
            <Typography>Created By:</Typography>
            <Typography>Abhishek Sawle</Typography>
            <Typography>Shraddha Abhang</Typography>
            <Typography>Shubham Bhosale</Typography>
            <Typography>Pranay Ghagare</Typography>
            
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Follow Us</Typography>
            <a
              href="https://www.facebook.com/"
              target="blank"
            >
              <FacebookIcon className="facebookSvgIcon" />
            </a>

            <a href="https://instagram.com/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
