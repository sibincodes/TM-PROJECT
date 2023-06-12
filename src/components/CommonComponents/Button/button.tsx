
import { SxProps } from "@mui/material";
import Button from "@mui/material/Button";

export const ButtonComponent = ({
  styles,
  name,
  icon,
  typeVariant,
  actionHandler,
  type,
  buttonType,
}: {
  styles?: SxProps;
  name: string;
  icon?: JSX.Element;
  typeVariant?: "text" | "outlined" | "contained" | undefined;
  actionHandler?: (event: React.MouseEvent<HTMLButtonElement | null>,data?:any) => void;
  type?: "submit";
  buttonType?: string;
}) => {
  const buttonStyles: SxProps = {
    backgroundColor : buttonType === 'add' ? "#FF800F" : buttonType==='cancel' || buttonType==='edit' || 'header' ? 'transparent' :'',
    color : buttonType === 'add' ? "#FFFFFF" : buttonType === "cancel" ? "#FF6A31" : buttonType==='edit' || buttonType==='header' ? "#252525" : '',
    fontWeight:
    buttonType === "add" || "edit" || "header" ? "600" : "400",
    border : buttonType === 'add' ? "1px solid #EC7C00" : buttonType === "cancel" ? "1px solid #FF800F" : buttonType==='edit' ? "1px solid #252525" : buttonType === "header" ? 'none' : '',
    textTransform:
      buttonType === "add" || "publish" || "cancel"
        ? "capitalize"
        : "uppercase",
        fontSize: { sm: "14px", md: "16px" },
        "&:active, &:hover": {
          opacity: "0.9",
          border: buttonType === "add" || buttonType === "cancel" ? "1px solid #FF6A31" : buttonType==="edit" ? "1px solid #252525" : buttonType === "header" ? 'none' : '',
          backgroundColor: buttonType === "add" ? "#FF6A31" :   buttonType==="edit" ? "transparent" : buttonType === "header" ? 'transparent' : '',
        },
    ...styles,
  };

  return (
    <>
      <Button
        variant={typeVariant || "outlined"}
        sx={buttonStyles}
        disableRipple
        startIcon={icon}
        //@ts-ignore
        onClick={(e)=>actionHandler(e,data)}
        type={type || "button"}
      >
        {name}
      </Button>
    </>
  );
};
