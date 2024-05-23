import { useRef } from "react";
import TechSupportCarousel from "../Banners-Carousels/TechSupportCarousel";
import TrustBanner from "../Banners-Carousels/TrustBanner";
import Navbar from "../NavbarComponent/Navbar";
import Contact from "./Contact";
import Expertise from "./Expertise";
import Footer from "./Footer";
import Goals from "./Goals";
import Hero from "./Hero";
import Services from "./Services";
import Testimonials from "./Testimonials";
import "./Styles/app.css"
import PropTypes from "prop-types";
const Desktop = ({contactRef}) => {
  return (
    <div className="desktop">
      <div className="div overflow-y-hidden">
        {/* <Navbar contactRef={contactRef} /> */}
        <Hero />
        <TrustBanner />
        <Goals />
        <Services />
        <TechSupportCarousel />
        <Expertise />
        <Testimonials />
        <Contact ref={contactRef} />
      </div>
    </div>
  );
};



export default Desktop;
