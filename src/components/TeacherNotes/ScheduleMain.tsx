import { Box } from "@mui/material"
import { ScheduleHead } from "../../styles/scheduleHead"
import Wrapper from "../CommonComponents/BoxWrapper/Wrapper"
import TableComponent from "../CommonComponents/Table/TableComponents"
import ScheduleDetailComponent from "./ScheduleDetail"
import ScheduleHeadComponent from "./ScheduleHead"
import ScheduleTableComponent from "./ScheduleTable"
import ScheduleTable from "./ScheduleTable"

const ScheduleMain=()=>{
const wrapperHead=<ScheduleHeadComponent/>
    const wrapperBody=[<ScheduleTableComponent/>,<ScheduleDetailComponent/>]
    return <Box sx={{maxWidth:'480px'}}>
            <Wrapper  wrapperHead={wrapperHead} wrapperBody={wrapperBody} />

    </Box>


}
export default ScheduleMain;