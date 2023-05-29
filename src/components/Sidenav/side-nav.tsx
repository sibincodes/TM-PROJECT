import List from "@mui/material/List";
import { SideNavComponent } from "../../styles/sideNav";

import { sideMenuOptions } from "../data/sideMenuData";
import { SideMenu } from "./side-menu";

export const SideNavigation = () => {
  return (
    <SideNavComponent>
      {sideMenuOptions.map(({ mainMenu, childItems }) => (
        <List
          sx={{ width: "100%", maxWidth: 400, bgcolor: "background.paper" }}
        >
          <SideMenu mainMenu={mainMenu} childItems={childItems} />{" "}
        </List>
      ))}
    </SideNavComponent>
  );
};
