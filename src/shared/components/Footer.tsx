import CoffeeIcon from "../../assets/shared/desktop/logo.svg?react";
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
    <div className="bg-(--neutral-900) p-[32px] flex flex-col gap-[24px] items-center xxl:flex-row xxl:px-[80px] xxl:py-[48px] xxl:justify-between">
      <div className="flex items-center justify-center">
        <CoffeeIcon className="coffee-icon-logo" />
      </div>

      <div className="flex items-center justify-center gap-[32px]">
        {navList.map((list) => {
          return (
            <Link
              replace
              key={list.text}
              to={list.to}
              className="text-preset-8 text-(--neutral-500)"
            >
              {list.text}
            </Link>
          );
        })}
      </div>
      <div className="flex items-center justify-center gap-[24px]">
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
