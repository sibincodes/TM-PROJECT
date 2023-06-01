import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import {TopNav} from '../Topnav/topnav'
import { SideNavigation } from "../Sidenav/side-nav";
import { SideNavComponent } from '../../styles/sideNav';
import { theme } from '../../ThemeProvider';

const drawerWidth = 240;

interface ChildrenProps {
  children: JSX.Element[] | JSX.Element
}

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
        sx={{ position:'relative',marginLeft:'280px',marginTop:'98px',padding:'20px 24px',backgroundColor:theme.palette.custom.backgroundBlue,minHeight:'calc(100vh - 98px)' }}
      >
        <Toolbar />
      {children}
      </Box>
    </Box>
    </>
   
  );
}
