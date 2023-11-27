import { Box, Radio, styled } from "@mui/material"; // STYLED COMPONENTS

const OuterBox = styled(Box)(({
  color
}) => ({
  width: 25,
  height: 25,
  padding: "1px",
  borderRadius: "50%",
  border: `1.8px solid ${color || "transparent"}`
}));
const InnerBox = styled(Box)(({
  color,
  theme
}) => ({
  width: "100%",
  height: "100%",
  borderRadius: "50%",
  backgroundColor: color || theme.palette.primary.main
}));

const ColorRadio = ({
  icon_color,
  ...props
}) => <Radio icon={<OuterBox>
        <InnerBox color={icon_color} />
      </OuterBox>} checkedIcon={<OuterBox color={icon_color}>
        <InnerBox color={icon_color} />
      </OuterBox>} sx={{
  padding: 0
}} {...props} />;

export default ColorRadio;