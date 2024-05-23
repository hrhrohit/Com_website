import { forwardRef } from "react";
import "./Styles/contact.css";

const Contact = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} className="frame-23">
        <p className="have-another">
          Have Another Question? <br />
          Let’s Talk
        </p>
        <div className="frame-24">
          <div className="frame-25">
            <div className="frame-5">
              <p className="div-4">
                <span className="text-wrapper-23">Full Name</span>
                <span className="text-wrapper-24">*</span>
              </p>
              <div className="frame-26">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="text-input text-wrapper-25"
                />
                <img className="line-2" alt="Line" src="/img/line-3.svg" />
              </div>
            </div>
            <div className="frame-5">
              <p className="div-4">
                <span className="text-wrapper-23">Your email</span>
                <span className="text-wrapper-24">*</span>
              </p>
              <div className="frame-26">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="text-input text-wrapper-25"
                />
                <img className="line-3" alt="Line" src="/img/line-3-1.svg" />
              </div>
            </div>
          </div>
          <div className="frame-5">
            <p className="div-4">
              <span className="text-wrapper-23">Message</span>
              <span className="text-wrapper-24">*</span>
            </p>
            <div className="frameMessage">
              <textarea
                placeholder="Enter your message"
                className="text-input text-wrapper-25 message-input mb-[-21px]"
              />
              <img className="line-4" alt="Line" src="/img/line-3-2.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="frame-27">
        <button className="text-wrapper-26">Send Request</button>
        <svg className="vector-4"  xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
          <path d="M13.0001 8.88102L13.5458 1.37168M13.5458 1.37168L6.04583 2.03356M13.5458 1.37168L1.47718 13.6285"  stroke-width="1.09795" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </>
  );
});

export default Contact;
