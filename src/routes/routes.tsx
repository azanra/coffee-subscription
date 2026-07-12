import App from "../App";
import About from "../pages/about/About";

import Plan from "../pages/plan/Plan";

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
