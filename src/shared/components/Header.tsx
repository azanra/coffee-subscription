import { Link } from "react-router";
import CoffeeLogo from "../../assets/shared/desktop/logo.svg";
import HamburgerLogo from "../../assets/shared/mobile/icon-hamburger.svg?react";
import CloseLogo from "../../assets/shared/mobile/icon-close.svg?react";
import useIsMobileScreen from "../hooks/useIsMobileScreen";

import { useState } from "react";
import stringUtils from "../utils/stringUtils";
import NAVIGATION_TAB from "../const/navConst";

const Header = () => {
  const [isShow, setIsShow] = useState(false);
  const { isMobileScreen } = useIsMobileScreen();

  return (
    <div className="mb-[40px]">
      <div className="flex justify-between items-center">
        <img
          src={CoffeeLogo}
          alt="coffee-logo"
          className="w-[160px] md:w-[237px]"
        />

        {isMobileScreen ? (
          <button onClick={() => setIsShow((prev) => !prev)}>
            {isShow ? <CloseLogo /> : <HamburgerLogo />}
          </button>
        ) : (
          <div className="flex gap-[33px] text-(--neutral-500) text-preset-8">
            {NAVIGATION_TAB.map((nav) => {
              return (
                <Link
                  to={nav.to}
                  key={nav.to}
                  className="hover:text-(--neutral-900) focus:outline-(--teal-600) focus:text-(--neutral-900)"
                >
                  {nav.text.toUpperCase()}
                </Link>
              );
            })}
          </div>
        )}
      </div>

      {isShow && isMobileScreen && (
        <div className="flex flex-col gap-[32px] text-center px-[82.5px] pt-[80px] pb-[54px] text-(--neutral-900) text-preset-4">
          {NAVIGATION_TAB.map((nav) => {
            return (
              <Link to={nav.to} key={nav.to}>
                {stringUtils.toTitleCase(nav.text)}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Header;
