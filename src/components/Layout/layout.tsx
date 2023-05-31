import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import {TopNav} from '../Topnav/topnav'
import { SideNavigation } from "../Sidenav/side-nav";
import { SideNavComponent } from '../../styles/sideNav';

const drawerWidth = 240;

interface ChildrenProps {
  children: JSX.Element[] | JSX.Element
}

export const Layout = ({children } : ChildrenProps) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <TopNav/>
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
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
      {children}
      </Box>
    </Box>
  );
}
