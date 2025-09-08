import { Link } from "react-router";

const Header = () => {
  const navigation = [
    { to: "/", text: "home" },
    { to: "/about", text: "about us" },
    { to: "/plan", text: "create your plan" },
  ];
  return (
    <div>
      <div></div>
      <div>
        {navigation.map((nav) => {
          return (
            <Link replace to={nav.to} key={nav.to}>
              {nav.text.toUpperCase()}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
