import Coffee from "../../assets/shared/desktop/logo.svg";
import Facebook from "../../assets/shared/desktop/icon-facebook.svg";
import Twitter from "../../assets/shared/desktop/icon-twitter.svg";
import Instagram from "../../assets/shared/desktop/icon-instagram.svg";
import { Link } from "react-router";

const Footer = () => {
  const navList = [
    { to: "/", text: "home" },
    { to: "/about", text: "about us" },
    { to: "/plan", text: "create your plan" },
  ];
  const socialMediaList = [Facebook, Twitter, Instagram];
  return (
    <div>
      <div>
        <img src={Coffee} alt="coffee" />
      </div>
      <div>
        {navList.map((list) => {
          return (
            <Link replace key={list.text} to={list.to}>
              {list.text}
            </Link>
          );
        })}
      </div>
      <div>
        {socialMediaList.map((list, index) => {
          return (
            <a key={index} href="">
              <img src={list} alt="social media" />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
