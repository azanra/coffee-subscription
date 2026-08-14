import About from "../pages/about/About";
import Home from "../pages/home/Home";

import Plan from "../pages/plan/Plan";

const routes = [
  {
    path: "/",
    element: <Home />,
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
