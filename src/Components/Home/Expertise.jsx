import React, { useEffect, useRef } from "react";
import "./Styles/expertise.css";

const Expertise = () => {
    const svgRef = useRef(null);

    useEffect(() => {
        const svgElement = svgRef.current;

        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    svgElement.classList.add("animate");
                } else {
                    svgElement.classList.remove("animate");
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.1,
        });

        if (svgElement) {
            observer.observe(svgElement);
        }

        return () => {
            if (svgElement) {
                observer.unobserve(svgElement);
            }
        };
    }, []);

    return (
        <>
            <div className="text-wrapper-19">Why Choose Us</div>
            <div className="overlap">
                <p className="body-text">
                    Choose us for unparalleled VoIP and billing support services.
                    Our expertise ensures seamless communication
                    and efficient billing solutions, making us the top choice for your business.
                </p>
                <div className="overlap-group">
                    <img className="element" alt="Element" src="Com_website/img/26432-1.svg" />
                    <img className="img" alt="Element" src="Com_website/img/26432-3.svg" />
                    <div className="card">
                        <div className="div-2">
                            <img className="img-2" alt="Unparalleled" src="Com_website/img/unparalleled-expertise.svg" />
                            <div className="div-3">
                                <div className="text-wrapper">Unparalleled Expertise</div>
                                <p className="p">
                                    Our skilled and experienced members are dedicated to delivering top-notch service.
                                </p>
                            </div>
                        </div>
                        <div className="div-2">
                            <img className="img-2" alt="Icon" src="Com_website/img/icon.svg" />
                            <div className="div-3">
                                <div className="text-wrapper">Reliable and Timely Service</div>
                                <p className="text-wrapper-2">We value your time and understand the urgency of problems.</p>
                            </div>
                        </div>
                        <div className="div-2">
                            <img className="img-2" alt="Satisfaction" src="Com_website/img/satisfaction-guaranteed-text.svg" />
                            <div className="div-3">
                                <div className="text-wrapper">Satisfaction guaranteed</div>
                                <p className="text-wrapper-2">Customer satisfaction is at the core of everything we do.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="frame">
                    <svg ref={svgRef} xmlns="http://www.w3.org/2000/svg" className="vector" viewBox="0 0 166 39" fill="none">
                        <path d="M10 29C14.2473 27.9737 18.083 24.7994 22.2337 23.2633C30.8013 20.0926 39.8674 19.201 48.6786 18.2609C57.6745 17.301 66.3295 17.57 75.157 14.9565C81.9829 12.9357 89.307 14.0492 96.2727 12.6618C100.347 11.8503 104.799 12.4783 108.909 12.4783C115.488 12.4783 121.73 10.8261 128.315 10.8261C137.562 10.8261 146.776 10 156 10" stroke="#ED1C24" stroke-opacity="0.5" stroke-width="20" stroke-linecap="round" />
                    </svg>

                    <p className="what-our-client-says">
                        <span className="span">“</span>
                        <span className="text-wrapper-3 text-black">
                            What Our Client Says About Us
                        </span>
                        <span className="span">”</span>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Expertise;
