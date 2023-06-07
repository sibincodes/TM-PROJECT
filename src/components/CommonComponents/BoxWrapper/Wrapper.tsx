import { Box } from "@mui/material";
import { ChildrenProps } from "../../../@types/react-children-type";
import { WrapperComponent } from "../../../styles/wrapperStyles";

const Wrapper = ({
  wrapperHead,
  wrapperBody,
}: {
  wrapperHead: JSX.Element;
  wrapperBody: JSX.Element[];
}) => {
  console.log(wrapperHead);
  return (
    <WrapperComponent>
      <div className="wrapper">
        <Box className="wrapper__head">{wrapperHead}</Box>

        {wrapperBody.map((elem) => (
          <Box className="wrapper__body">{elem}</Box>
        ))}
      </div>
    </WrapperComponent>
  );
};

export default Wrapper;
