import { styled } from "@mui/system";

export const ScheduleTable = styled('div')(({ theme }) => ({
    padding: "20px 10px 10px",
    overflowX: "scroll",

    ".table": {
        width: "fit-content",
        margin: 'auto',

    },

    "th,td": {
        fontSize: '15px',
        lineHeight: '22.5px',
        fontWeight: '600',
        color: theme.palette.custom.blackOlive,
        textAlign: 'center',
        width: 'max-content',
        cursor:'pointer'

    },
    "td": {
        padding: '6px 4px',
        position: 'relative',


    },
    "td span": {
        fontSize: '15px',

        lineHeight: '22.5px',
        fontWeight: '600',
        display: "block",
        margin:'auto',
        padding: "4px 10px",
        width: 'max-content',
        maxWidth: '70px'




    },
    "td span:first-child": {
        marginBottom: '4px',
    },

    "th": {
        color: theme.palette.custom.backgroundBlack,
        padding: '0 14px 8px'
    }
    , ".cell--border": {
        borderColor: `${theme.palette.custom.blue} !important`,
        backgroundColor: theme.palette.custom.lightBlue
    },
    ".cell": {
        border: '1px solid',
        borderRadius: '4px',
        borderColor:'transparent'
  
    },
    ".cell-dot":{
        width:'6px',
        height:'6px',
        backgroundColor:theme.palette.custom.red,
        position: 'relative',
    bottom: '-8px',
    borderRadius: '50%',
    margin:'auto',
    visibility:'hidden'
    },
    ".cell--highlight":{
        visibility:'visible'
    }

}))