import React from 'react';
import { ListItemIcon, Menu, MenuItem } from '@mui/material';

export interface DropDownStatus {
    isOpen : boolean;
    anchorEl : HTMLElement | null;
    handleMenuClose : () => void;
} 
export const DropDown = ({isOpen, anchorEl, handleMenuClose} : DropDownStatus) => {

    const handleClose = () => {
        handleMenuClose();
    };

  return (
    <Menu
    id="header-menu"
    anchorEl={anchorEl}
    open={isOpen}
    onClose={handleClose}
    MenuListProps={{
      'aria-labelledby': 'basic-button',
    }}
  >
    <MenuItem onClick={handleClose}> 
    <ListItemIcon>
      <img src="./ListIcons/classwork.svg" />
    </ListItemIcon>Classwork</MenuItem>
    <MenuItem  onClick={handleClose}>
       <ListItemIcon>
      <img src="./ListIcons/homework.svg" />
    </ListItemIcon>
      Home Work</MenuItem>
    <MenuItem onClick={handleClose}>
    <ListItemIcon>
      <img src="./ListIcons/assignment.svg" />
    </ListItemIcon>
      Assignment</MenuItem>
    <MenuItem onClick={handleClose}>
    <ListItemIcon>
      <img src="./ListIcons/project.svg" />
    </ListItemIcon>
      Project</MenuItem>
    <MenuItem onClick={handleClose}>
    <ListItemIcon>
      <img src="./ListIcons/diary.svg" />
    </ListItemIcon>
      Diary</MenuItem>
  </Menu>
  )
}
