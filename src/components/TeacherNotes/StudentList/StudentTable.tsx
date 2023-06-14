import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import { StudentList } from "../../../styles/studentList";
import { theme } from "../../../ThemeProvider";
import { ButtonComponent } from "../../CommonComponents/Button/button";
import { DropDown } from "../../CommonComponents/DropDownMenu/drop-down-menu";
import TableComponent from "../../CommonComponents/Table/TableComponents";
import { AvatarComponent } from "./AvatarComponent";


const InputComponent = ({
  student,
  marksChangeHandler,
  value,
}: {
  student: any;
  value: string;
  marksChangeHandler: (
    student: {
      id: number;
      fullname: string;
      class: string;
      section: string;
      avatar: string;
    },
    marks: string
  ) => void;
}) => {
  return (
    <Box className="list__marks">
      <div className="list__inputBox">
        <input
          className="list__input"
          onChange={(e) => marksChangeHandler(student, e.target.value)}
          value={value}
        />
        <span className="list__text  list__bar">/</span>
      </div>

      <span className="list__text">50</span>
    </Box>
  );
};

// Filter dropdown
const Button = ({
  setSort,
  sort,
}: {
  setSort: React.Dispatch<React.SetStateAction<string>>;
  sort: string;
}) => {
  const dropdownStyles = {
    ".MuiMenuItem-root": {
      padding: "10px 16px",
      marginBottom: "2px",
      fontSize: "14px",
      lineHeight: "18px",
      fontWeight: "500",
      color: theme.palette.custom.backgroundBlack,
      borderLeft: "2px solid",
      borderColor: "transparent",
    },
    ".MuiMenuItem-root:hover": {
      backgroundColor: theme.palette.custom.aliceBlue,
      borderColor: theme.palette.custom.darkBlue,
    },
  };
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const menuOptions = [
    { listItem: "View All(55)", value: "View All" },
    { listItem: "Not Submitted (10)", value: "Not Submitted" },
    { listItem: "Pending Evaluation (15)", value: "Pending Evaluation" },
    { listItem: "Resubmitted (10)", value: "Resubmitted" },
    { listItem: "Approved (10)", value: "Approved" },
    { listItem: "Rejected (5)", value: "Rejected" },
  ];
  const ButtonActionHandler = (
    event: React.MouseEvent<HTMLButtonElement | null>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (val?:string) => {
    setAnchorEl(null);
    val && setSort(val);

  };
  
  return (
    <>
      <ButtonComponent
        name={sort || "Filter by"}
        buttonType="header"
        endIcon={<ReactSVG src="/icons/dropdown.svg" />}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        actionHandler={(e) => ButtonActionHandler(e)}
      />
      <DropDown
        isOpen={open}
        anchorEl={anchorEl}
        handleMenuClose={handleMenuClose}
        style={dropdownStyles}
        menuOptions={menuOptions}
      />
    </>
  );
};

const StudentTableComponent = () => {
  const [marks, setMarks] = useState<{
    [id: number]: string;
  }>({});
  const users = [
    {
      id: 1,
      student: {
        id: 33,
        fullname: "Jenna",
        class: "V",
        section: "A",
        avatar: "https://i.pravatar.cc/150?img=4",
        color: "#EF2424",
      },
      task: {
        id: 400,
        type: "assignment",
        details: {
          status : 'Not Submitted'
        },
      },
    },
    {
      id: 2,
      student: {
        id: 231,
        fullname: "Nazim",
        class: "V",
        section: "A",
        avatar: "https://i.pravatar.cc/150?img=3",
        color: "#EF2424",
      },
      task: {
        id: 400,
        type: "assignment",
        details: {
          status : 'Pending Evaluation'
        },
      },
    },
  ];
  useEffect(() => {
    users.map((elem) =>
      setMarks((prev) => ({ ...prev, [elem.student.id]: "0" }))
    );
  }, []);
  const marksChangeHandler = (
    student: {
      id: number;
      fullname: string;
      class: string;
      section: string;
      avatar: string;
    },
    marks: string
  ) => {
    setMarks((prev) => ({ ...prev, [student.id]: marks }));
  };
  const [sort, setSort] = useState("");
  const columns = [
    { col: <AvatarComponent name="All Students" />, colData: "" },
    { col: <Button setSort={setSort} sort={sort} />, colData: "" },
  ];
  const data = sort && sort!=="View All" ?
  users.filter((elem) => elem?.task?.details?.status===sort) : users;

  const rows = data.length > 0 ? data.map((elem) => (
    {
    row: [
      {
        col: (
          <AvatarComponent
            name={elem.student.fullname}
            img={elem.student.avatar}
            color={elem.student.color}
          />
        ),
        colData: "",
      },
      {
        col: (
          <InputComponent
            student={elem.student}
            value={marks[elem.student.id]}
            marksChangeHandler={marksChangeHandler}
          />
        ),
        colData: "",
      },
    ],
    rowData: elem,
  } 
  )) :    [{
    row: [
      {
        col: (
          <div>No data found!!</div>
         
        ),
        colData: "",
      },
   
    ],
    rowData: '',
  }]
      ;
      console.log(rows.length)

  return (
    <StudentList className="list">
      <TableComponent columns={columns} rows={rows} sort={data.length>0} />
    </StudentList>
  );
};
export default StudentTableComponent;
