import { styled } from "@mui/system";

export const Header = styled('div')(({ theme }) => ({

    '.header':{
        borderBottom: '1px solid',
        borderColor: theme.palette.custom.bngGrey,
        boxShadow:'unset',
        position:'relative'
    },
    '.header .MuiIconButton-root':{
        padding:'0',
        width: 'fit-content',
    height: 'fit-content'
    },
    '.header .MuiToolbar-root':{
        padding:'0'

    },
    '.header__logo': {
        width:'280px',
        borderRight: '1px solid',
        borderColor: theme.palette.custom.bngGrey,

    },
    '.header__logo img': {
        width: '170px',
        padding: '12px 0',
        margin: '0 auto',
        display: 'flex'
    },
    ".MuiToolbar-root.header__right":{
        padding:'24px 32px 21px 23px',
        justifyContent:'space-between',
        width: 'calc(100% - 280px)'

    },
    ".header__right--flex":{
        display:'flex',
        alignItems:'center'

    },
    ".header__title":{
        fontSize:'20px',
        lineHeight:'28px',
        fontWeight:'700',
        color:theme.palette.custom.black,
        marginBottom:'10px'

    },

    '.header__links,.header__links li':{
        columnGap:'10px'
    },
    ".header__links .MuiTypography-root":{
        fontSize:'12px',
        lineHeight:'15px',
        fontWeight:'400',
        color:theme.palette.custom.textGrey

    },
    ".header__links p.MuiTypography-root":{
        fontWeight:'500',
        color:theme.palette.custom.lightBlack

    },
    ".header__search":{
        padding:'12px 8px',
        borderRadius:'6px',
        border:'1px solid',
        borderColor:theme.palette.custom.borderLightGrey,
        display: 'flex',
        alignItems: 'center',
        height:'40px',
        width:'332px',
        marginRight:'25px'
    },
    ".header__search input, .header__search button":{
       
        height:'auto',

    },

    ".header__search input":{
        fontSize:'14px',
        color:theme.palette.custom.midGrey,
        lineHeight:'24px',
        fontWeight:'400',
        marginLeft:'10px'
    },
    ".header__avatar img":{
        width:'32px',
        height:'32px',
    }

}))
