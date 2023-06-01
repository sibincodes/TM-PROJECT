export interface RoutesContextProps {
    id:number;
    path: string;
    title: string;
  };
  export type RoutesContextType = {
    routes: RoutesContextProps[];
    saveRoutes: (todo: RoutesContextProps) => void;
    updateRoutes: (id: number) => void;
  };