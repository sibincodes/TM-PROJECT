import { styled } from "@mui/system";

export const SideNavComponent = styled('div')(({ theme }) => ({

    '.sideNav .MuiDrawer-paper': {
        minWidth: '270px',
        border: '1px solid',
        borderColor: theme.palette.custom.bngGrey
    },
    '.sideNav .MuiList-root': {
        padding: '0px',

    },
    '.sideNav__logo': {
        borderBottom: '1px solid',
        borderColor: theme.palette.custom.bngGrey

    },
    '.sideNav__logo img': {
        width: '170px',
        padding: '12px 0',
        margin: '0 auto',
        display: 'flex'
    },
    '.sideNav__parent': {
        padding: '12px 16px',
        color: theme.palette.custom.lightGrey,
        textTransform: 'uppercase',
        margin: '0 20px 6px 20px'
    },
    '.sideNav__parent .MuiTypography-root': {
        fontSize: '12px',
        lineHeight: '20px',
        fontWeight: '600',
        letterSpacing:'.8px',
        fontFamily:'PlusJakartaSans'
    }
    ,
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