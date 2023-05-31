import { Box } from "@mui/material";
import List from "@mui/material/List";

import { sideMenuOptions } from "../data/sideMenuData";
import { SideMenu } from "./side-menu";

export const SideNavigation = () => {
  return (
    <>
    <Box className="sideNav__logo" >
    <img src="logo.png" />

    </Box>
      {sideMenuOptions.map(({ mainMenu, childItems }) => (
        <List
          
        >
          <SideMenu mainMenu={mainMenu} childItems={childItems} />{" "}
        </List>
      ))}
    </>
  );
};
