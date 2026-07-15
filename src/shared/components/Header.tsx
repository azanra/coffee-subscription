import { Link } from "react-router";
import CoffeeLogo from "../../assets/shared/desktop/logo.svg";
import HamburgerLogo from "../../assets/shared/mobile/icon-hamburger.svg";
import CloseLogo from "../../assets/shared/mobile/icon-close.svg";
import useIsMobileScreen from "../hooks/useIsMobileScreen";

import { useState } from "react";

const Header = () => {
  const [isShow, setIsShow] = useState(false);
  const { isMobileScreen } = useIsMobileScreen();

  const navigationTab = [
    { to: "/", text: "home" },
    { to: "/about", text: "about us" },
    { to: "/plan", text: "create your plan" },
  ];

  return (
    <div className="mb-[40px]">
      <div className="flex justify-between items-center">
        <img src={CoffeeLogo} alt="coffee-logo" />

        {isMobileScreen ? (
          <img
            src={isShow ? CloseLogo : HamburgerLogo}
            alt="hamburger-logo"
            onClick={() => setIsShow(!isShow)}
          />
        ) : (
          <div className="flex gap-[33px] text-(--neutral-500) text-preset-8">
            {navigationTab.map((nav) => {
              return (
                <Link to={nav.to} key={nav.to}>
                  {nav.text.toUpperCase()}
                </Link>
              );
            })}
          </div>
        )}
      </div>

      {isShow && isMobileScreen && (
        <div className="flex flex-col gap-[32px] text-center px-[82.5px] pt-[80px] pb-[54px] text-(--neutral-900) text-preset-4">
          {navigationTab.map((nav) => {
            return (
              <Link to={nav.to} key={nav.to}>
                {nav.text.toUpperCase()}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Header;
