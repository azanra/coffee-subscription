import { Link } from "react-router";
import CoffeeLogo from "../../../assets/shared/desktop/logo.svg";
import HamburgerLogo from "../../../assets/shared/mobile/icon-hamburger.svg";
import useIsMobileScreen from "../../../shared/hooks/useIsMobileScreen";

const Header = () => {
  const { isMobileScreen } = useIsMobileScreen();

  const navigationTab = [
    { to: "/", text: "home" },
    { to: "/about", text: "about us" },
    { to: "/plan", text: "create your plan" },
  ];

  return (
    <div className="flex justify-between mb-[40px]">
      <img src={CoffeeLogo} alt="coffee-logo" />

      {isMobileScreen ? (
        <img src={HamburgerLogo} alt="hamburger-logo" />
      ) : (
        <div className="flex gap-[33px]">
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
