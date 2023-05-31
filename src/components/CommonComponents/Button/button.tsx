
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
  actionHandler?: (event: React.MouseEvent<HTMLButtonElement | null>) => void;
  type?: "submit";
  buttonType?: string;
}) => {
  const buttonStyles: SxProps = {
    border:
      buttonType === "cancel"
        ? "1px solid #EC7C00"
        : buttonType === "edit" || buttonType ==="preview"
        ? "1px solid #0E0E0E"
        : "",
    color:
      buttonType === "cancel"
        ? "#FF6A31"
        : buttonType === "edit" || buttonType === "preview"
        ? "#0E0E0E"
        : "",
    backgroundColor:
      buttonType === "cancel" || "edit" || "preview"
        ? "transparent"
        : buttonType === "add" || "publish"
        ? "#FF800F"
        : "",
    fontSize: { sm: "14px", md: "16px" },
    "&:active, &:hover": {
      opacity: "0.9",
      border: buttonType === "cancel" ? "1px solid #FF6A31" : "",
      backgroundColor: buttonType === "add" || buttonType === "publish" ? "#FF6A31" :    buttonType === "cancel" || "edit" || "preview"
      ? "transparent" : "",
    },
    fontWeight:
      buttonType === "save" || buttonType === "cancel" ? "600" : "400",
    textTransform:
      buttonType === "add" || "publish" || "cancel"
        ? "capitalize"
        : "uppercase",
    ...styles,
  };

  return (
    <>
      <Button
        variant={typeVariant || "outlined"}
        sx={buttonStyles}
        disableRipple
        startIcon={icon}
        onClick={actionHandler}
        type={type || "button"}
      >
        {name}
      </Button>
    </>
  );
};
