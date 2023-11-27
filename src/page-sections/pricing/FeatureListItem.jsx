// CUSTOM COMPONENTS
import { FlexBox } from "components/flexbox";
import { Paragraph } from "components/typography";
import CheckCircleOutline from "icons/CheckCircleOutline"; // ==============================================================

// ==============================================================
const FeatureListItem = ({
  title
}) => {
  return <FlexBox alignItems="center" gap={1}>
      <CheckCircleOutline color="success" />
      <Paragraph fontSize={16}>{title}</Paragraph>
    </FlexBox>;
};

export default FeatureListItem;