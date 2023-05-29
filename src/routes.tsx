
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/home";

export const RoutesPage = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

