import { routerType } from "./types/router.types";
import { Profile } from "./components/Profile/profile";
import {TeacherNotes} from "./components/TeacherNotes/teacher-notes";

export const pageRoutes: routerType[] = [
  {
    path: "/",
    element: <TeacherNotes />,
    title: "TeacherNotes"
  },
  {
    path: "profile",
    element: <Profile />,
    title: "profile"
  },
];



