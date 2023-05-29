
import { Routes, Route } from "react-router-dom";
import { routerType } from "./types/router.types";
import { pageRoutes } from "./page-routes";
import {ProtectedRoutes} from "./components/protected-routes";

export const Router = () => {
  const page = pageRoutes.map(({ path, title, element }: routerType) => {
    return <Route element={<ProtectedRoutes/>}> <Route key={title} path={`/${path}`} element={element} /></Route>;
  });

  return <Routes>{page}</Routes>;
};

