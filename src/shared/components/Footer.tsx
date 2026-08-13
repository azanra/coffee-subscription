import CoffeeIcon from "../../assets/shared/desktop/logo.svg?react";
import Facebook from "../../assets/shared/desktop/icon-facebook.svg?react";
import Twitter from "../../assets/shared/desktop/icon-twitter.svg?react";
import Instagram from "../../assets/shared/desktop/icon-instagram.svg?react";
import { Link } from "react-router";

const Footer = () => {
  const navList = [
    { to: "/", text: "home" },
    { to: "/about", text: "about us" },
    { to: "/plan", text: "create your plan" },
  ];
  const socialMediaList = [
    <Facebook className="footer-icon" />,
    <Twitter className="footer-icon" />,
    <Instagram className="footer-icon" />,
  ];

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
              className="text-preset-8 text-(--neutral-500) hover:text-(--neutral-0)"
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
              {list}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
