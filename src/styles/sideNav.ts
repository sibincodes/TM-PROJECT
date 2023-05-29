import { styled } from "@mui/system";

export const SideNavComponent = styled('div')(({ theme }) => ({
    '.sideNav__parent':{
        padding:'10px 36px',
        color:theme.palette.custom.lightGrey,
        textTransform:'uppercase'
    }
    ,
    '.sideNav__child':{
        padding:'10px 36px',
        color:theme.palette.custom.darkGrey,
        textTransform:'capitalize'
    }
  }));