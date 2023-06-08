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

    },
    "button":{
        padding:'4px 17px',
        border:'1px solid',
        borderColor:`${theme.palette.custom.backgroundBlack} !important`,
        color:theme.palette.custom.backgroundBlack,
        borderRadius:'200px',
        fontSize:'14px',
        lineHeight:'21px',
        fontWeight:'500',
        backgroundColor:'white !important'
    },
    ".MuiButton-startIcon":{

        margin:'0 13px 0 0',
        transform:'rotate(180deg)',
        display:'block'
    },
    ".MuiButton-endIcon":{
        margin:'0 0px 0 13px'
    },
    "svg path":{
        stroke: '#0E0E0E',
        strokeWidth: '1.5px'
    
    }

}));