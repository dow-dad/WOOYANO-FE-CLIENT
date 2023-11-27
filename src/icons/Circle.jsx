import { SvgIcon } from "@mui/material";

const Circle = props => {
  return <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M22,12A10,10,0,1,1,12,2,10,10,0,0,1,22,12Z" />
    </SvgIcon>;
};

export default Circle;