import React from "react";
import { ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { theme } from "./ThemeProvider";
import { routerType } from "./types/router.types";
import { pageRoutes } from "./page-routes";
import { ProtectedRoutes } from "./components/protected-routes";


export interface RoutesContextProps {
  path: string;
  title: string;
};
export type RoutesContextType = {
  routes: RoutesContextProps | undefined;
  saveRoutes: (todo: RoutesContextProps) => void;
};
export const RoutesContext = React.createContext<RoutesContextType | null>(null);


export const Router = () => {

  const [routes, setRoutes] = React.useState<RoutesContextProps>();

  const saveRoutes = (selectedpath: RoutesContextProps) => {
    const newTodo: RoutesContextProps = {
      title: selectedpath?.title,
      path: selectedpath?.path,
    }
    setRoutes(newTodo)
  }
  


  const pages = pageRoutes &&  pageRoutes.map(({ path, title, element, protectedRoute }: routerType) => {
    if(protectedRoute)
    return  <Route key={title} path={`/${path}`} element={ <ProtectedRoutes>{element}</ProtectedRoutes>} />;

    return  <Route key={title} path={`/${path}`} element={ element} />;
  });

  return (
    <RoutesContext.Provider value={{ routes, saveRoutes }}>
    <ThemeProvider theme={theme}><Routes>{pages}</Routes></ThemeProvider>
    </RoutesContext.Provider>
  )
};

