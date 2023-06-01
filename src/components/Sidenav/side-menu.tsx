import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { List, useTheme } from "@mui/material";
import { useState } from "react";
import { ReactSVG } from "react-svg";
import { NavLink } from "react-router-dom";
export const SideMenu = ({
  mainMenu,
  childItems,
}: {
  mainMenu: string;
  childItems: { icon: string; title: string }[];
}) => {
  const [menuOpen, setOpen] = useState(false);
  const theme = useTheme();

  const handleClick = () => {
    setOpen((prev: boolean) => !prev);
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
              <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "" : isActive ? "sideNav__link sideNav__link--active" : "sideNav__link"
              }
            >
              <ListItemButton className="sideNav__child">
                <ListItemIcon>
                <ReactSVG src={icon} />
                </ListItemIcon>
                <ListItemText primary={title} />
              </ListItemButton>
              </NavLink>
            ))
          }
          </>
        </List>
      </Collapse>
    </>
  );
};
