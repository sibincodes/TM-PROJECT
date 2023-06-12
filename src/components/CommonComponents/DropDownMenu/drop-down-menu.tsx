import React from "react";
import { ListItemIcon, Menu, MenuItem, SxProps } from "@mui/material";

export interface DropDownStatus {
  isOpen: boolean;
  anchorEl: HTMLElement | null;
  handleMenuClose: (val:string) => void;
  style?: SxProps;
  menuOptions:{src?:string,listItem:string,value?:any}[]
}
export const DropDown = ({
  isOpen,
  anchorEl,
  handleMenuClose,
  style,
  menuOptions
}: DropDownStatus) => {
  const handleClose = (val?:string) => {
    handleMenuClose(val || '');
  };


  return (
    <Menu
      id="header-menu"
      anchorEl={anchorEl}
      open={isOpen}
      onClose={()=>handleClose()}
      MenuListProps={{
        "aria-labelledby": "basic-button",
        sx: style,
      }}
    >
      {menuOptions.map(({ src, listItem ,value}) => (
        <MenuItem onClick={()=>handleClose(value)}>
          {src && <ListItemIcon>
            <img src={src} />
          </ListItemIcon>}
          {listItem}
        </MenuItem>
      ))}
    </Menu>
  );
};
