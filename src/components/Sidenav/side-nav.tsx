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
  const [menuOpen, setOpen] = useState<{
    [x: string]: { main: boolean; childItem: { [y: number]: boolean } };
  }>({});
  const handleClick = (menuOption: number, child?: boolean, index?: number) => {
    if (!child) {
      setOpen((prev) => ({
        ...prev,
        [menuOption]: {
          main: !menuOpen[menuOption].main,
          childItem: menuOpen[menuOption].childItem,
        },
      }));
    } else if (index?.toString()) {
      setOpen((prev) => ({
        ...prev,
        [menuOption]: {
          main: menuOpen[menuOption].main,
          childItem: {
            ...menuOpen[menuOption].childItem,
            [index]: !menuOpen[menuOption].childItem[index],
          },
        },
      }));
    }
  };

  // useEffect(() => {
  //   sideMenuOptions.map(({ mainMenu },index) => {
  //     setOpen((prev) => ({ ...prev, [index]: false }));
  //   }
  //   );
  // }, []);

  useEffect(() => {
    if (Object.entries(menuOpen).length)
      localStorage.setItem("menuIndex", JSON.stringify(menuOpen));
  }, [menuOpen]);

  useEffect(() => {
    const openedMenuDetails = localStorage.getItem('menuIndex');
    if(openedMenuDetails){
      const openedMenuData = JSON.parse(openedMenuDetails);
      setOpen(openedMenuData);
    }
    else
    {
    sideMenuOptions?.map(({ mainMenu, childItems }, index) => {
      let childItem: { [x: number]: boolean } = {};
      childItems?.map(({ icon }, indexes) => {
        childItem[indexes] = false;
      });
      setOpen((prev) => ({
        ...prev,
        [index]: { main: false, childItem: childItem },
      }));
    });
    }
  }, []);

  return (
    <>
      {sideMenuOptions?.map(({ mainMenu, childItems }, index) => (
        <List>
          <SideMenu
            index={index}
            mainMenu={mainMenu}
            childItems={childItems}
            menuOpen={menuOpen[index]}
            handleClick={handleClick}
            setOpen={setOpen}
          />{" "}
        </List>
      ))}
    </>
  );
};
