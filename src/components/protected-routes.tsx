
import { Navigate } from 'react-router-dom';
interface ChildrenProps {
  children: JSX.Element
}
export const ProtectedRoutes = ({ children } :  ChildrenProps) => {
    const user = true;
    if (!user) {
        return <Navigate to="/login" replace />;
    }
    return children;
};
