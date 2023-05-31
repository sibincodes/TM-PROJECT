
import { ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { theme } from "./ThemeProvider";
import { routerType } from "./types/router.types";
import { pageRoutes } from "./page-routes";
import { ProtectedRoutes } from "./components/protected-routes";

export const Router = () => {

  const pages = pageRoutes &&  pageRoutes.map(({ path, title, element, protectedRoute }: routerType) => {
    if(protectedRoute)
    return  <Route key={title} path={`/${path}`} element={ <ProtectedRoutes>{element}</ProtectedRoutes>} />;

    return  <Route key={title} path={`/${path}`} element={ element} />;
  });

  return  <ThemeProvider theme={theme}><Routes>{pages}</Routes></ThemeProvider>
};

