import { FlexBox } from "components/flexbox";
import { Paragraph } from "components/typography"; // ==============================================================

// ==============================================================
const ListItem = ({
  title,
  Icon
}) => {
  return <FlexBox gap={1} alignItems="center">
      <Icon sx={{
      fontSize: 14,
      color: "text.secondary"
    }} />
      <Paragraph color="text.secondary">{title}</Paragraph>
    </FlexBox>;
};

export default ListItem;