import { styled } from "@mui/system";

export const Header = styled('div')(({ theme }) => ({

    '.header':{
        borderBottom: '1px solid',
        borderColor: theme.palette.custom.bngGrey,
        boxShadow:'unset'
    },
    '.header .MuiToolbar-root':{
        padding:'0'

    },
    '.header__logo': {
        width:'280px',

    },
    '.header__logo img': {
        width: '170px',
        padding: '12px 0',
        margin: '0 auto',
        display: 'flex'
    },
    ".MuiToolbar-root.header__right":{
        padding:'25px 32px 21px 23px',
        justifyContent:'space-between',
        width: 'calc(100% - 280px)'

    }

}))
