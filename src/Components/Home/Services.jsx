import React, { useEffect, useRef } from "react";
import "./Styles/services.css";

const Services = () => {
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
        <div className="frame-10">
            <div className="group">
                <div className="overlap-group-3">
                    <svg
                        ref={svgRef}
                        className="vector-2"
                        xmlns="http://www.w3.org/2000/svg"
                        width="190"
                        height="36"
                        viewBox="0 0 190 36"
                        fill="none"
                    >
                        <path
                            d="M9.5 26C11.2925 21.9567 22.8896 20.7248 26.3889 19.9048C38.9816 16.9536 51.4029 15.3478 64.22 13.8095C81.0507 11.7895 98.4513 12.2857 115.393 12.2857C129.66 12.2857 143.858 11.5238 158.122 11.5238C163.349 11.5238 168.449 11.345 173.66 10.9312C175.225 10.807 179.691 11.6229 180.5 10"
                            stroke="#FF0000"
                            strokeOpacity="0.5"
                            strokeWidth="19"
                            strokeLinecap="round"
                        />
                    </svg>
                    <div className="text-wrapper-9">Our Services</div>
                </div>
            </div>
            <p className="text-wrapper-10">Discover our complete range of services tailored to meet your need.</p>
        </div>
    );
};

export default Services;
