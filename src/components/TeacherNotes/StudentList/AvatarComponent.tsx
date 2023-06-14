import { Box } from "@mui/material";
import { AvatarIcon } from "../../CommonComponents/AvatarIcon";

export const AvatarComponent = ({
    name,
    img,
    color,
  }: {
    name: string;
    img?: string;
    color?: string;
  }) => {
    return (
      <Box className="list__left">
        <AvatarIcon
          img={img || "/icons/user.svg"}
          styles={
            img
              ? {
                  border: "2px solid",
                  borderColor: color,
                }
              : null
          }
        />
        <h4 className="list__text">{name}</h4>
      </Box>
    );
  };