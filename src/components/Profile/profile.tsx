import {  useState } from 'react';
import { Layout } from '../Layout/layout';
import { ButtonComponent } from '../CommonComponents/Button/button';
import { DropDown } from "../CommonComponents/DropDownMenu/drop-down-menu";
import addButton from "../../assets/add-button.svg";

export const Profile = () => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);


  const ButtonActionHandler = (event: React.MouseEvent<HTMLButtonElement | null>) => {
    setAnchorEl(event.currentTarget);
  }

  const handleMenuClose = () => {
    setAnchorEl(null);
  }
  const addIconButton = <img src={addButton} />;
  return (
    <Layout>
      <>
      Profile
      <ButtonComponent name ='Add New' buttonType='add' 
              icon={addIconButton}
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              actionHandler={(e)=>ButtonActionHandler(e)}
      />
      <DropDown isOpen={open} anchorEl={anchorEl} handleMenuClose={handleMenuClose}/>
      </>
    </Layout>
  )
}

