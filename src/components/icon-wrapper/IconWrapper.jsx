import { styled } from "@mui/material"; // CUSTOM COMPONENT

import { FlexRowAlign } from "../flexbox"; // STYLED COMPONENT

const Wrapper = styled(FlexRowAlign)(({
  theme
}) => ({
  width: 40,
  height: 40,
  borderRadius: "5px",
  marginRight: "0.5rem",
  backgroundColor: theme.palette.primary[100]
}));

const IconWrapper = ({
  children,
  ...props
}) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

export default IconWrapper;