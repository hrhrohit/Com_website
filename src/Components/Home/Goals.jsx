import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Styles/goals.css";

const Goals = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200, // longer animation duration
            once: false, // animation happens every time the element comes into view
            easing: 'ease-out-cubic', // easing function for a smooth animation
            anchorPlacement: 'top-bottom', // ensures animation starts when the top of the element hits the bottom of the viewport
        });
        AOS.refresh();
    }, []);

    return (
        <div>
            <div className="text-wrapper-18" data-aos="fade-up" data-aos-delay="0" data-aos-anchor-placement="top-bottom">
                Our Goals
            </div>
            <img
                className="mask-group-2"
                alt="Mask group"
                src="/img/mask-group-1.png"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-anchor-placement="top-bottom"
            />
            <div className="frame-34" data-aos="fade-up" data-aos-delay="600" data-aos-anchor-placement="top-bottom">
                <p className="text-wrapper-34">
                    We Provide The Best Solution For Your Business Development
                </p>
                <p className="text-wrapper-35">
                    Our expert team specializes in delivering meticulous provisioning processes and advanced troubleshooting
                    techniques, meticulously tailored to guarantee seamless SIP operations. With our in-depth knowledge and
                    proactive approach, we ensure that your SIP infrastructure operates flawlessly, minimizing downtime and
                    maximizing efficiency
                </p>
            </div>
        </div>
    );
};

export default Goals;
