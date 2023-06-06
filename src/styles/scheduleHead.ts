import { styled } from "@mui/system";

export const ScheduleHead = styled('div')(({ theme }) => ({
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    "h4":{
        fontSize:"16px",
        lineHeight:'20px',
        fontWeight:'700',
        color:theme.palette.custom.backgroundBlack

    },
    ".head__arrow":{
        width:'27px',
        height:'27px',

    }

}));