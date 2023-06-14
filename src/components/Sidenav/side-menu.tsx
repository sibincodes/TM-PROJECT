import React, { Dispatch, SetStateAction, useState } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import { List, useTheme } from "@mui/material";

import { ReactSVG } from "react-svg";
import { NavLink } from "react-router-dom";
export const SideMenu = ({
  mainMenu,
  childItems,
  menuOpen,
  handleClick,
  index,
  setOpen,
}: {
  mainMenu: string;
  childItems: {
    subChildItem?: { icon: string; title: string; path: string }[];
    icon: string;
    title: string;
    path: string;
  }[];
  menuOpen:  {
    main: boolean;
    childItem: {
        [x: number]: boolean;
    };
}
  handleClick: (title: number,child?:boolean,index?:number) => void;
  index: number;
  setOpen: React.Dispatch<React.SetStateAction<{
    [x: string]: {
        main: boolean;
        childItem: {
            [y: number]: boolean;
        };
    };
}>>
}) => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const childClickHandler = (hasSubChildren: boolean) => {
    if (hasSubChildren) {
      setIsOpen((prevState) => !prevState);
    }
  };
  return (
    <>
      <ListItemButton
        onClick={() => handleClick(index)}
        className="sideNav__parent"
      >
        <ListItemText primary={mainMenu} />
        {
          <object
            data="/HeaderIcons/next.svg"
            width="8"
            height="16"
            className={
              menuOpen?.main ? "sideNav__parent--open" : "sideNav__parent--close"
            }
          />
        }
      </ListItemButton>
      <Collapse in={menuOpen?.main} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <>
            {childItems.map(({ subChildItem, icon, title, path }, indexes) => (
              <>
                <NavLink
                  key={indexes}
                  to={subChildItem ? "" : path}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? ""
                      : isActive && !subChildItem
                      ? "sideNav__link sideNav__link--active"
                      : "sideNav__link"
                  }
                  onClick={() => subChildItem ? handleClick(index,true,indexes):()=>{}}
                >
                  <ListItemButton className="sideNav__child">
                    <ListItemIcon>
                      <ReactSVG src={icon} />
                    </ListItemIcon>
                    <ListItemText primary={title} />
                    {subChildItem && (
                      <object
                        data="/HeaderIcons/next.svg"
                        width="8"
                        height="16"
                        className={
                          isOpen
                            ? "sideNav__parent--open"
                            : "sideNav__parent--close"
                        }
                      />
                    )}
                  </ListItemButton>
                </NavLink>

                <Collapse in={menuOpen?.childItem[indexes]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding className="sideNav__innerChild">
                    {subChildItem?.map(({ icon, title, path }, indexed) => (
                      <NavLink
                        key={indexed}
                        to={path}
                        className={({ isActive, isPending }) =>

                            isActive 
                            ? "sideNav__link sideNav__link--active"
                            : "sideNav__link"
                        }
                      >
                        <ListItemButton className="sideNav__child">
                          <ListItemText primary={title} />
                        </ListItemButton>
                      </NavLink>
                    ))}
                  </List>
                </Collapse>
              </>
            ))}
          </>
        </List>
      </Collapse>
    </>
  );
};
