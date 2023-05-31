import { styled } from "@mui/system";

export const SideNavComponent = styled('div')(({ theme }) => ({

    '.sideNav .MuiDrawer-paper': {
        width: '280px',
        borderLeft: '1px solid',
        borderColor: theme.palette.custom.bngGrey,
        position:'relative',
        minHeight:'100vh'
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
    '.sideNav__parent .MuiSvgIcon-root[data-testid="ExpandMoreIcon"] ':{
        transform: 'rotate(270deg)'

    },
    '.sideNav__parent .MuiSvgIcon-root[data-testid="ExpandLessIcon"] ':{
        transform: 'rotate(180deg)'

    },
    '.sideNav__parent .MuiSvgIcon-root path': {
        fill: theme.palette.custom.midGrey,

    },
    '.sideNav__child': {
        padding: '10px 16px',
        color: theme.palette.custom.darkGrey,
        textTransform: 'capitalize',
        margin: '0 20px 4px 20px'

    },

    '.sideNav__child .MuiListItemIcon-root': {
        minWidth: 'unset',
        marginRight: '15px'
    },
    '.sideNav__child .MuiTypography-root': {
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: '400'

    }

}));