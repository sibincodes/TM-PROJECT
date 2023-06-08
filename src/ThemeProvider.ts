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
            blue:'#417EE3',
            backgroundBlue:'#FAFBFD',
            paleBlue:'#EAECF0',
            transparentBlue:'#F7F9FF',
            backgroundBlack:'#0E0E0E',
            blackOlive:"#3F3F3F",
           lightBlue:'#E8F1FF',
           red:'#E73025',
           borderRed:'#EF2424',
           transparentRed:'#FFF0F0',
           sonicSilver:"#757575",
           aliceBlue:"#EBF0FE",
           darkBlue:'#1381EF',
           borderGrey:'#D0D5DD',
           borderBlue:'#1183F4'
        },
    },
    typography: {
        fontFamily: 'PlusJakartaSans',
      },

});