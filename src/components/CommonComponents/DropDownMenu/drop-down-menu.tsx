import React from "react";
import { ListItemIcon, Menu, MenuItem, SxProps } from "@mui/material";

export interface DropDownStatus {
  isOpen: boolean;
  anchorEl: HTMLElement | null;
  handleMenuClose: () => void;
  style?: SxProps;
  menuOptions:{src?:string,listItem:string}[]
}
export const DropDown = ({
  isOpen,
  anchorEl,
  handleMenuClose,
  style,
  menuOptions
}: DropDownStatus) => {
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
        "aria-labelledby": "basic-button",
        sx: style,
      }}
    >
      {menuOptions.map(({ src, listItem }) => (
        <MenuItem onClick={handleClose}>
          {src && <ListItemIcon>
            <img src={src} />
          </ListItemIcon>}
          {listItem}
        </MenuItem>
      ))}
    </Menu>
  );
};
