import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { Outlet } from "react-router-dom";

export  const SideNavigation = () => {
    const [inputValues, setInputValues] = React.useState<{[key:string]: boolean | any}>([])
  

  const handleClick = (menu: string) => {
    setInputValues( 
        prevState => (
            { ...inputValues,
                [menu]: !prevState
            }
        )
    );
  }

  return (
    <>
       <List sx={{ width: "100%", maxWidth: 400, bgcolor: "background.paper" }}>
      <ListItemButton onClick={(e)=>handleClick('setup')}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="SETUP" />
        {inputValues.setup ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={inputValues.state} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Teacher Note" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={()=>handleClick('dataentry')}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="DATA ENTRY AREA" />
        {inputValues.dataentry ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={inputValues.dataentry} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
    <Outlet/>
    </>
 
  );
}
