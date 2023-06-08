import { Box } from "@mui/material";
import List from "@mui/material/List";
import { RoutesContext } from "../../context/routes-context-provider";
import { RoutesContextType } from "../../@types/routes-context-type";
import { sideMenuOptions } from "../data/sideMenuData";
import { SideMenu } from "./side-menu";
import React, { useEffect, useState } from "react";
import { Preview } from "@mui/icons-material";

export const SideNavigation = () => {
  const { saveRoutes } = React.useContext(RoutesContext) as RoutesContextType;
  const [menuOpen, setOpen] = useState<{ [x: string]: boolean }>({});
  const handleClick = (menuOption: string) => {
    setOpen((prev) => ({ ...prev, [menuOption]: !menuOpen[menuOption] }));
  };

  useEffect(() => {
    sideMenuOptions.map(({ mainMenu }) => {
      setOpen((prev) => ({ ...prev, [mainMenu]: false }));
    });
  }, []);
  const navMenuClickHandler = (title: string) => {
    saveRoutes({ title, path: `Dashboard/2020-2021/${title}` });
  };
  return (
    <>
      {sideMenuOptions.map(({ mainMenu, childItems }) => (
        <List>
          <SideMenu
            mainMenu={mainMenu}
            childItems={childItems}
            menuOpen={menuOpen[mainMenu]}
            handleClick={handleClick}
            navMenuClickHandler={navMenuClickHandler}
          />{" "}
        </List>
      ))}
    </>
  );
};
