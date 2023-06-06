import { styled } from "@mui/system";

export const WrapperComponent = styled('div')(({ theme }) => ({
    ".wrapper":{
        borderRadius:'8px',
        border:'1px solid',
        borderColor:theme.palette.custom.paleBlue
    },
    ".wrapper__head":{
        padding:'10px 24px',
        backgroundColor:theme.palette.custom.transparentBlue,
        borderRadius:'8px 8px 0 0'
    },
    ".wrapper__body":{
        padding:'0 20px',
        borderTop:'1px solid',
        borderColor:theme.palette.custom.paleBlue,
        backgroundColor:'white',
        borderRadius:'0 0 8px 8px'




    }

}))