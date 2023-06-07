export interface RoutesContextProps {
    path: string;
    title: string;
  };
  export type RoutesContextType = {
    routes: RoutesContextProps | undefined;
    saveRoutes: (todo: RoutesContextProps) => void;
  };