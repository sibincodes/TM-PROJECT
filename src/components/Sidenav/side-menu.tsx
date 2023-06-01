import React, { useState } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { List, useTheme } from "@mui/material";
import {RoutesContextType, RoutesContext} from '../../routes';

export const SideMenu = ({
  mainMenu,
  childItems,
}: {
  mainMenu: string;
  childItems: { icon: string; title: string }[];
}) => {
  const { saveRoutes } = React.useContext(RoutesContext) as RoutesContextType;
  const [menuOpen, setOpen] = useState(false);
  const theme = useTheme();

  const handleClick = () => {
    setOpen((prev: boolean) => !prev);
    saveRoutes({title:'Teacher', path: "Dashboard/2020-2021/Teacher Notes"});
  };
  return (
    <>
      <ListItemButton onClick={handleClick} className="sideNav__parent">
        <ListItemText primary={mainMenu} />
        {<object
                  data="/HeaderIcons/next.svg"
                  width="8"
                  height="16"
                  className={menuOpen?"sideNav__parent--open":"sideNav__parent--close"}
                />}
      </ListItemButton>
      <Collapse in={menuOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <>
            {childItems.map(({ icon, title }) => (
              <ListItemButton className="sideNav__child">
                <ListItemIcon>
                  <object data={icon} />
                </ListItemIcon>
                <ListItemText primary={title} />
              </ListItemButton>
            ))}
          </>
        </List>
      </Collapse>
    </>
  );
};
