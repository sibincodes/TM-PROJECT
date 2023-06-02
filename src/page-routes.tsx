import { routerType } from "./@types/routes-type";
import { Profile } from "./components/Profile/profile";
import { TeacherNotes } from "./components/TeacherNotes/teacher-notes";
import { Login } from "./components/Login/login";

export const pageRoutes  : routerType[] = [
  {
    path: "/",
    element: <TeacherNotes />,
    title: "Teacher Notes",
    protectedRoute : true
  },
  {
    path: "profile",
    element: <Profile />,
    title: "Profile",
    protectedRoute : true

  },
  {
    path: "login",
    element: <Login />,
    title: "Login",
    protectedRoute : false

  }

];





