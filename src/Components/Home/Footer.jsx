import "./Styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
      <div className="footer-logo-social">
          <div className="footer-logo">
            <img
              className="logo-final-working"
              alt="Logo final working"
              src="/img/logo-final-working-file-01-1.png"
            />
            <img className="group-2" alt="Group" src="/img/group-3.png" />
          </div>
          <div className="footer-logo-contact">
           
          </div>
          <div className="footer-contact">
            <p className="contact-info">Phone : +1 000 000 00</p>
            <div className="contact-info">Email : comstream@gmail.com</div>
          </div>
        </div>
        <div className="footer-section">
          <div className="footer-title">Navigate</div>
          <div className="footer-links">
            <div className="footer-link">Home</div>
            <div className="footer-link">About Us</div>
            <div className="footer-link">Contact Us</div>
            <div className="footer-link">Case Studies</div>
            <div className="footer-link">Testimonials</div>
          </div>
        </div>
        <div className="footer-section">
          <div className="footer-title">Services</div>
          <div className="footer-links">
            <div className="footer-link">Technical</div>
            <div className="footer-link">Managed Platforms</div>
            <div className="footer-link">Billing Support</div>
            <div className="footer-link">Other Services</div>
          </div>
        </div>
        <div className="footer-section">
          <div className="footer-title">Legal</div>
          <div className="footer-links">
            <div className="footer-link">Privacy Statement</div>
            <div className="footer-link">Terms of Use</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
