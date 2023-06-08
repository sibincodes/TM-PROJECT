import { styled } from "@mui/system";


export const ScheduleDetail = styled('div')(({ theme }) => ({

    display: 'flex',
    columnGap: '16px',
    alignItems: 'center',
    padding:'16px 20px 20px',

    ".detail__period": {
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        height: '38px',
        width: '38px',
        color: 'white',
        backgroundColor: theme.palette.custom.backgroundBlack,
        fontSize: '15px',
        lineHeight: '22.5px',
        fontWeight: '700',
        borderRadius: '4px'
    },
    ".detail__desc":{
        width:'calc(100% - 54px)',
        display:'flex',
        justifyContent:'space-between'

    },
    ".detail__subject": {
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        rowGap: '12px'

    },
    ".detail__subject-topic":{
        rowGap: '12px',
        paddingLeft:'20px'


    },
    ".details__text": {
        display: "flex",
        columnGap: '2px',
        alignItems: 'center'

    },
    ".details__text h6,.details__text span": {
        fontSize: '14px',
        lineHeight: '21px',
        fontWeight: '500',
        color:theme.palette.custom.lightBlack


    },
    ".details__text span": {
        fontWeight: '700',
        color:theme.palette.custom.backgroundBlack
    },
    ".details__task": {
        display: "flex",
        columnGap: '8px',
        marginLeft: '6px'

    },
    ".details__task span": {
        width: '30px',
        height: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        border: '1px solid',
        fontSize:'16px',
        fontWeight:'700'

    },
    "span.details__task-ontime":{
        borderColor:theme.palette.custom.blue,color:theme.palette.custom.backgroundBlack,backgroundColor:theme.palette.custom.lightBlue
    },
    "span.details__task-pending":{
        borderColor:theme.palette.custom.borderRed,color:theme.palette.custom.borderRed,backgroundColor:theme.palette.custom.transparentRed
    }

}))