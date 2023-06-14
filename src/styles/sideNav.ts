import { styled } from "@mui/system";

export const SideNavComponent = styled('div')(({ theme }) => ({

    '.sideNav':{
        position:'fixed',
        top:'98px',
        width: '280px',
        borderRight: '1px solid',
        borderColor: theme.palette.custom.bngGrey,
        height:'calc(100% - 98px)'

    
    },

    '.sideNav .MuiDrawer-paper': {
        position:'relative',
        border:'none'

 
    },
    '.sideNav .MuiList-root': {
        padding: '0px',
        marginBottom:'5px'


    },
    

    '.sideNav__parent': {
        padding: '12px 36px',
        color: theme.palette.custom.lightGrey,
        textTransform: 'uppercase',
    },
    '.sideNav__parent .MuiList-root':{
        marginBottom:'0'

    },
    '.sideNav__parent .MuiTypography-root': {
        fontSize: '12px',
        lineHeight: '20px',
        fontWeight: '600',
        letterSpacing:'.8px',
        fontFamily:'PlusJakartaSans'
    }
    ,
    '.sideNav__parent--open':{
        transform: 'rotate(90deg)'

    },
    '.sideNav__parent .MuiSvgIcon-root[data-testid="ExpandLessIcon"] ':{
        transform: 'rotate(-90deg)'

    },
    '.sideNav__parent .MuiSvgIcon-root path': {
        fill: theme.palette.custom.midGrey,

    },
    '.sideNav__link':{
        margin: '0 20px 8px 20px',
        display:'block',
        textDecoration:'none'


    },
    '.sideNav .MuiCollapse-root':{
        marginTop:'4px'
    },
    '.sideNav__link--active':{
        borderRadius:'6px',
        backgroundColor:theme.palette.custom.blue



    },
    '.sideNav__child': {
        padding: '10px 16px',
        color: theme.palette.custom.darkGrey,
        textTransform: 'capitalize',

    },
    '.sideNav__child .MuiListItemText-root':{
        margin:'0'
    },
    '.sideNav__link--active .sideNav__child':{
        color:'white'

    },

    '.sideNav__child .MuiListItemIcon-root': {
        minWidth: 'unset',
        marginRight: '13px'
    },
    '.sideNav__link--active .sideNav__child .MuiListItemIcon-root path':{
        stroke:'white'

    },
    '.sideNav__child .MuiTypography-root': {
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: '400'

    },
    ".sideNav__innerChild.MuiList-root":{
        marginBottom:'12px',
        marginLeft:'26px'

    },
    ".sideNav__innerChild .sideNav__link":{
        marginBottom:'4px'
    },
    ".sideNav__collapse":{
        display:'none'
    }


}));