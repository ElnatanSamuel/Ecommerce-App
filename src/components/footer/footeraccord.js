import Collapsible from "react-collapsible";

const FooterAccord = () => {
  return (
    <>
      <Collapsible trigger="SUPPORT >">
        <ul className="footerlist">
          <li>Contact</li>
          <li>Store</li>
          <li>Account</li>
          <li>FaQ</li>
        </ul>
      </Collapsible>
      <Collapsible trigger="JOIN OUR COMMUNITY >">
        <div className="community-footer">
          <p className="footer-para">
            Subscribe to recive updates and notifications on new sale offer
          </p>
          <div className="community-input">
            <input className="footer-input" type="text" />
            <button className="footer-btn">SUBSCRIBE</button>
          </div>
        </div>
      </Collapsible>
      <Collapsible trigger="ABOUT >">
        <ul className="footerlist">
          <li>Our Mission</li>
          <li>Our Story</li>
          <li>Blog</li>
          <li>FaQ</li>
        </ul>
      </Collapsible>
    </>
  );
};

export default FooterAccord;
