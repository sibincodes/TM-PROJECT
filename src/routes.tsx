
import { ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/home";
import { theme } from "./ThemeProvider";

export const RoutesPage = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </ThemeProvider>
    </>
  );
};

