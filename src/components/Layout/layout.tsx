import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import {TopNav} from '../Topnav/topnav'
import { SideNavigation } from "../Sidenav/side-nav";
import { SideNavComponent } from '../../styles/sideNav';
import { ChildrenProps } from '../../@types/react-children-type';

const drawerWidth = 240;


export const Layout = ({children } : ChildrenProps) => {
  return (
    <>      <TopNav/>
     <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <SideNavComponent>
      <Drawer
      className="sideNav"
        variant="permanent"
        anchor="left"
      >
        {/* <Toolbar /> */}
        <SideNavigation/>
      </Drawer>
      </SideNavComponent>
      <Box
        component="main"
        sx={{ position:'relative',marginLeft:'280px',marginTop:'98px' }}
      >
        <Toolbar />
      {children}
      </Box>
    </Box>
    </>
   
  );
}
