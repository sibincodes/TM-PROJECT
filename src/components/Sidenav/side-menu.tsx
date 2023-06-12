import React, { Dispatch, SetStateAction, useState} from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { List, useTheme } from "@mui/material";

import { ReactSVG } from "react-svg";
import { NavLink } from "react-router-dom";
export const SideMenu = ({
  mainMenu,
  childItems,
  menuOpen,
  handleClick,
  index,
  setOpen
}: {
  mainMenu: string;
  childItems: {subChildItem? : {icon: string; title: string; path: string }[], icon: string; title: string; path: string }[];
  menuOpen: boolean;
  handleClick: (title:number) => void;
  index : number;
  setOpen:  Dispatch<SetStateAction<{ [x: string]: boolean }>> 
}) => {
  const theme = useTheme();
const [isOpen, setIsOpen] = useState(false);
  const childClickHandler = (hasSubChildren : boolean) => {
    if(hasSubChildren){
      setIsOpen(prevState => !prevState);
    }
  }

  return (
    <>
      <ListItemButton onClick={()=>handleClick(index)} className="sideNav__parent">
        <ListItemText primary={mainMenu} />
        {
          <object
            data="/HeaderIcons/next.svg"
            width="8"
            height="16"
            className={
              menuOpen ? "sideNav__parent--open" : "sideNav__parent--close"
            }
          />
        }
      </ListItemButton>
      <Collapse in={menuOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <>
            {childItems.map(({subChildItem, icon, title, path }, index) => (
              <>
               <NavLink
               key={index}
               to={subChildItem ? '' : path}
               className={({ isActive, isPending }) =>
                 isPending
                   ? ""
                   : isActive && !subChildItem 
                   ? "sideNav__link sideNav__link--active"
                   : "sideNav__link"
               }
               onClick={() => childClickHandler(subChildItem ? true : false)}
             >
               <ListItemButton className="sideNav__child">
                 <ListItemIcon>
                   <ReactSVG src={icon} />
                 </ListItemIcon>
                 <ListItemText primary={title} />
                 {subChildItem &&  <ExpandMore />}
               </ListItemButton>
             </NavLink>

          <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
          {subChildItem?.map(({icon, title, path }, index) => (
            <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <ReactSVG src={icon} />
            </ListItemIcon>
            <ListItemText primary={title} />
          </ListItemButton>
          ))}
          </List>
          </Collapse>
             </>
            ))
            
            }
          </>
        </List>
      </Collapse>
    </>
  );
};
