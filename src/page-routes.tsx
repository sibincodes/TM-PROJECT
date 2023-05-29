import { routerType } from "./types/router.types";
import { Home } from "./components/Home/home";
import { Profile } from "./components/Profile/profile";

export const pageRoutes: routerType[] = [
  {
    path: "/",
    element: <Home />,
    title: "home"
  },
  {
    path: "profile",
    element: <Profile />,
    title: "profile"
  },
];



