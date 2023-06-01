import { createTheme } from "@mui/material";
declare module '@mui/material/styles' {
    interface PaletteOptions {
        custom: {
            [color: string]: string
        }
    }
    interface Palette {
        custom: {
            [color: string]: string
        }
    }
}
export const theme = createTheme({
    palette: {
        custom: {
            darkGrey: '#344054',
            lightGrey: '#84919A',
            midGrey: '#9AA6AC',
            bngGrey: '#F2F4F7',
            borderLightGrey:'#DDE2E4',
            textGrey:'#6E7C87',
            black:'#000',
            lightBlack:'#252525',
            blue:'#417EE3'
        },
    },

});