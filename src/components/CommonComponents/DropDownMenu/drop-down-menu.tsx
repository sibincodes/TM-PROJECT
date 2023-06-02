import React from 'react';
import { Menu, MenuItem } from '@mui/material';

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
    <MenuItem onClick={handleClose}>Classwork</MenuItem>
    <MenuItem onClick={handleClose}>Home Work</MenuItem>
    <MenuItem onClick={handleClose}>Assignment</MenuItem>
    <MenuItem onClick={handleClose}>Project</MenuItem>
    <MenuItem onClick={handleClose}>Diary</MenuItem>
  </Menu>
  )
}
