import CoffeeIcon from "../../assets/shared/desktop/logo.svg?react";
import Facebook from "../../assets/shared/desktop/icon-facebook.svg?react";
import Twitter from "../../assets/shared/desktop/icon-twitter.svg?react";
import Instagram from "../../assets/shared/desktop/icon-instagram.svg?react";
import { Link } from "react-router";
import NAVIGATION_TAB from "../const/navConst";

const Footer = () => {
  const socialMediaList = [
    <Facebook className="footer-icon" />,
    <Twitter className="footer-icon" />,
    <Instagram className="footer-icon" />,
  ];

  return (
    <footer className="bg-(--neutral-900) p-[32px] flex flex-col gap-[24px] items-center xxl:flex-row xxl:px-[80px] xxl:py-[48px] xxl:justify-between">
      <div className="flex items-center justify-center">
        <CoffeeIcon className="coffee-icon-logo" />
      </div>

      <nav className="flex items-center justify-center gap-[32px]">
        {NAVIGATION_TAB.map((list) => {
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
      </nav>
      <nav className="flex items-center justify-center gap-[24px]">
        {socialMediaList.map((list, index) => {
          return (
            <a key={index} href="">
              {list}
            </a>
          );
        })}
      </nav>
    </footer>
  );
};

export default Footer;
