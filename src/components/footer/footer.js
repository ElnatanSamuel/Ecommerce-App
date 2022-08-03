import FooterAccord from "./footeraccord";

const Footer = () => {
  return (
    <>
      <div className="footeraccord">
        <FooterAccord />
      </div>
      <footer>
        <div className="footerlinks">
          <h3 className="footer-head">SUPPORT</h3>
          <ul className="footerlist">
            <li>Contact</li>
            <li>Store</li>
            <li>Account</li>
            <li>FaQ</li>
          </ul>
        </div>
        <div className="community-footer">
          <h3 className="footer-head">JOIN OUR COMMUNITY</h3>
          <p className="footer-para">
            Subscribe to recive updates and notifications on new sale offer
          </p>
          <div className="community-input">
            <input className="footer-input" type="text" placeholder="Email" />
            <button className="footer-btn">SUBSCRIBE</button>
          </div>
        </div>
        <div className="footerlinks">
          <h3 className="footer-head">ABOUT</h3>
          <ul className="footerlist">
            <li>Our Mission</li>
            <li>Our Story</li>
            <li>Blog</li>
            <li>FaQ</li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
