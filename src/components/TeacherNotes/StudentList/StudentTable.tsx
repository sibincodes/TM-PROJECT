import { Avatar, Box, TextField } from "@mui/material";
import { useState } from "react";
import { ReactSVG } from "react-svg";
import { StudentList } from "../../../styles/studentList";
import { theme } from "../../../ThemeProvider";
import { ButtonComponent } from "../../CommonComponents/Button/button";
import { DropDown } from "../../CommonComponents/DropDownMenu/drop-down-menu";
import TableComponent from "../../CommonComponents/Table/TableComponents";

//Avatar and Name
const AvatarComponent = ({ name, img }: { name: string; img?: string }) => {
  return (
    <Box className="list__left">
      <Avatar src={img || "/icons/user.svg"} className="list__image" />
      <h4 className="list__text">{name}</h4>
    </Box>
  );
};
const InputComponent = () => {
  return (
    <Box className="list__marks">
      <div className="list__inputBox">
        <input className="list__input" />
        <span className="list__text  list__bar">/</span>
      </div>

      <span className="list__text">50</span>
    </Box>
  );
};

// Filter dropdown
const Button = () => {
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
    { listItem: "View All(55)" },
    { listItem: "View All(55)" },
    { listItem: "View All(55)" },
    { listItem: "View All(55)" },
    { listItem: "View All(55)" },
  ];
  const ButtonActionHandler = (
    event: React.MouseEvent<HTMLButtonElement | null>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <ButtonComponent
        name="Filter by"
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
  const users = [
    {
      id: 1,
      student: {
        id: 33,
        fullname: "Jenna",
        class: "V",
        section: "A",
        avatar: "https://i.pravatar.cc/150?img=4",
      },
      task: {
        id: 400,
        type: "assignment",
        details: {},
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
      },
      task: {
        id: 400,
        type: "assignment",
        details: {},
      },
    },
  ];
  const columns = [{col:<AvatarComponent name="All Students" />,colData:''}, {col:<Button />,colData:''}];
  const rows = users.map((elem) => ({
    row: [
      {
        col: (
          <AvatarComponent
            name={elem.student.fullname}
            img={elem.student.avatar}
          />
        ),
        colData: "",
      },
      { col: <InputComponent />, colData: "" },
    ],
    rowData: elem,
  }));
  return (
    <StudentList className="list">
      <TableComponent
        columns={columns}
        rows={ rows }
        sort={true}
      />
    </StudentList>
  );
};
export default StudentTableComponent;
