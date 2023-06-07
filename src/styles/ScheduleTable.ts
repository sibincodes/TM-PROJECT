import { styled } from "@mui/system";

export const ScheduleTable = styled('div')(({ theme }) => ({
    paddingTop: "20px",
    paddingBottom: "16px",

    "th,td": {
        fontSize: '15px',
        lineHeight: '22.5px',
        fontWeight: '600',
        color: theme.palette.custom.blackOlive,
        padding: '6px 4px',
        textAlign: 'center',

    },
    "td div":{
        padding:"4px 10px"
    },
    "td span": {
        fontSize: '15px',
        lineHeight: '22.5px',
        fontWeight: '600',
        display: "block",
        padding: '0'


    },
    "td span:first-child": {
        marginBottom: '12px'
    },
    "th": {
        color: theme.palette.custom.backgroundBlack,
        padding: '0 14px 10px'
    }

}))