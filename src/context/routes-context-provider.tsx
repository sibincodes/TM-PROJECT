import React from 'react';
import { RoutesContextType, RoutesContextProps } from '../@types/routes-context-type';
import { ChildrenProps } from '../@types/react-children-type';

export const RoutesContext = React.createContext<RoutesContextType | null>(null);

export const RouteProvider = ({ children }: ChildrenProps) => {
const [routes, setRoutes] = React.useState<RoutesContextProps>({
  title:'Teacher Notes',
  path:'Dashboard/2020-2021/teacher'
});

const saveRoutes = (selectedpath: RoutesContextProps) => {
  const newTodo: RoutesContextProps = {
    title: selectedpath?.title,
    path: selectedpath?.path,
  }
  setRoutes(newTodo)
}

return <RoutesContext.Provider value={{ routes, saveRoutes }}>{children}</RoutesContext.Provider>;

}