import Team from "./components/Team";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";

const AppRoutes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/meet-the-team",
        element: <Team />
    },
    {
        path: "/portfolio",
        element: <Portfolio />
    },
    {
        path: "/reviews",
        element: <Reviews />
    },
    {
        path: "/contact",
        element: <Contact />
    },

];

export default AppRoutes;