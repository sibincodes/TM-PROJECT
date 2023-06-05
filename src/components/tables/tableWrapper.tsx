import FormComponent from "../Forms/formComponent";
import { Layout } from "../Layout/layout";
import TableComponent from "./tableComponent"


const TableWrapper=()=>{

    return <Layout>
        <TableComponent/>
        <FormComponent/>
        </Layout>
}

export default TableWrapper;