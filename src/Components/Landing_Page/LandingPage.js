import React from "react"; // Importing the necessary modules from React library
import { Link } from "react-router-dom"; // Importing the Link component from react-router-dom library
import "./LandingPage.css"; // Importing the CSS styles for the Landing_Page component

// Defining the Function component Landing_Page
const Landing_Page = () => {
  return (
    <section className="hero-section"> {/* Creating a section with class name 'hero-section' */}
      <div>
        <div data-aos="fade-up" className="flex-hero"> {/* Creating a div with data-aos attribute and class name 'flex-hero' */}
            
            <h1>
              Your Health<br/>

              <span className="text-gradient">
                
                Our Responsibility
              </span>
            </h1>
            
             
            <h4>
            Book your appointment online in just a few clicks and take control of your well-being today. <br/>
            Start your journey to better health now.
            </h4>
            <a href="#services"> {/* Creating a hyperlink to jump to the 'services' section */}
              <button className="button">Get Started</button> {/* Creating a button with class name 'button' */}
            </a>
        </div>
      </div>
    </section>
  );
};

export default Landing_Page; // Exporting the Landing_Page component to be used in other parts of the application