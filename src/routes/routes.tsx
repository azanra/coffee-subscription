import App from "../App";
import About from "../pages/components/About";
import Plan from "../pages/components/Plan";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/plan",
    element: <Plan />,
  },
];

export default routes;
