import { styled } from "@mui/system";

export const StudentList = styled('div')(({ theme }) => ({
    "th,td": {
        lineHeight: 'inherit',
        padding: '18px 16px',

    },

    "tbody tr": {
        borderTop: '1px solid',
        borderLeft: '2px solid',
        borderColor: theme.palette.custom.paleBlue,
        borderLeftColor: 'transparent',

        cursor: "pointer"
    },

    "tbody tr:hover": {
        backgroundColor: theme.palette.custom.aliceBlue,


    },
    "th:first-child,td:first-child": {
        paddingRight: '0'

    },
    "table": {
        border: '1px solid',
        borderColor: theme.palette.custom.paleBlue,
        backgroundColor: 'white',
        borderCollapse: "collapse",
        minWidth: '325px'

    },
    ".MuiCheckbox-root": {
        padding: '0'

    },
    ".MuiCheckbox-root div": {
        width: '20px',
        height: "20px",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    },
    ".MuiCheckbox-root svg": {
        width: '16px',
        height: '16px',

    },
    ".Mui-checked svg": {
        width: "20px",
        height: '20px'

    },

    "thead .MuiButton-root": {
        fontSize: '14px',
        lineHeight: '18px',
        fontWeight: '500',
        color: theme.palette.custom.backgroundBlack
    },
    " thead .MuiButton-endIcon": {

        marginLeft: '11px',
        marginRight: '0',
        marginTop: '-4px'

    },
    ".MuiMenuItem-root": {
        backgroundColor: theme.palette.custom.aliceBlue

    },
    ".list__left": {
        display: 'flex',
        alignItems: 'center'

    },
    ".list__image ": {
        width: '24px',
        height: '24px',
        marginRight: '10px',
        borderRadius: '50%'
    },
    "tbody .list__image ": {
        border: '2px solid',
        borderColor: theme.palette.custom.borderRed
    },
    ".list__text": {
        fontSize: '14px',
        lineHeight: '18px',
        fontWeight: '500',
        color: theme.palette.custom.backgroundBlack

    },
    "td .list__text": {
        lineHeight: '20px',
        color: theme.palette.custom.lightBlack

    },
    ".list__marks": {
        display: 'flex',
        justifyContent: 'center'

    },
    ".list__inputBox": {
        borderBottom: '1px solid',
        borderColor: theme.palette.custom.sonicSilver,
        marginRight: '6px'


    },
    ".list__marks input": {
        width: '34px',
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: '600',
        color: theme.palette.custom.sonicSilver,
        outline: 'none',
        border: 'none',
        textAlign: 'center',
        textIndent: '7px',
        backgroundColor: 'transparent'


    },
    ".list__marks .list__text": {
        position: 'relative',
        top: '3px',
    },
    ".list__bar": {

        left: '4px',


    },
    ".list__marks span": {
        color: theme.palette.custom.sonicSilver,
        fontWeight: '600'

    }

}))