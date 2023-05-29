import { createTheme } from "@mui/material";
declare module '@mui/material/styles' {
    interface PaletteOptions {
        custom:{
            [color:string]:string
        }
      }
      interface Palette {
        custom:{
            [color:string]:string
        }
      }
  }
export const theme = createTheme({
    palette: {
        custom: {
            darkGrey: '#344054',
            lightGrey: '#84919A',
          },
      },
    
  });