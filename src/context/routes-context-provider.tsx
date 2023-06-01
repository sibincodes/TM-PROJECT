import React from 'react';
import { RoutesContextType, RoutesContextProps } from '../@types/routes-context-type';

interface ChildrenProps {
    children: JSX.Element[] | JSX.Element
  }
export const RoutesContext = React.createContext<RoutesContextType | null>(null);

export const RouteProvider = ({ children }: ChildrenProps) => {
const [routes, setRoutes] = React.useState<RoutesContextProps>();

const saveRoutes = (selectedpath: RoutesContextProps) => {
  const newTodo: RoutesContextProps = {
    title: selectedpath?.title,
    path: selectedpath?.path,
  }
  setRoutes(newTodo)
}

return <RoutesContext.Provider value={{ routes, saveRoutes }}>{children}</RoutesContext.Provider>;

}