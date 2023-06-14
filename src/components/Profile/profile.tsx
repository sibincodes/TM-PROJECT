import {  useEffect, useState } from 'react';
import { Layout } from '../Layout/layout';
import { ButtonComponent } from '../CommonComponents/Button/button';
import { DropDown } from "../CommonComponents/DropDownMenu/drop-down-menu";
import addButton from "../../assets/add-button.svg";
import React from 'react';
import { useLocation } from 'react-router-dom';
import { RoutesContext } from '../../context/routes-context-provider';
import { RoutesContextType } from '../../@types/routes-context-type';
export const Profile = () => {

  const { saveRoutes } = React.useContext(RoutesContext) as RoutesContextType;
  const {pathname} =  useLocation();
  const title = 'Circular';
  useEffect(()=>{
    saveRoutes({ title, path: `Dashboard/2020-2021/${pathname}` });
  },[]);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);


  const ButtonActionHandler = (event: React.MouseEvent<HTMLButtonElement | null>) => {
    setAnchorEl(event.currentTarget);
  }

  const handleMenuClose = (val:string) => {
    setAnchorEl(null);
  }
  const menuOptions = [
    { src: "./ListIcons/classwork.svg", listItem: "Classwork" },
    { src: "./ListIcons/homework.svg", listItem: "Home Work" },
    { src: "./ListIcons/assignment.svg", listItem: "Assignment" },
    { src: "./ListIcons/project.svg", listItem: "Project" },
    { src: "./ListIcons/diary.svg", listItem: "Diary" },
  ];
  const addIconButton = <img src={addButton} />;
  return (
    <Layout>
      <>
      <ButtonComponent name ='Add New' buttonType='add' 
              startIcon={addIconButton}
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              actionHandler={(e)=>ButtonActionHandler(e)}
      />
      <DropDown isOpen={open} anchorEl={anchorEl} handleMenuClose={handleMenuClose} menuOptions={menuOptions}/>
      </>
    </Layout>
  )
}

