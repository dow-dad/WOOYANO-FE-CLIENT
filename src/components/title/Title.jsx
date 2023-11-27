import { Fragment } from "react"; // CUSTOM COMPONENTS

import { FlexBox } from "../flexbox";
import { Percentage } from "../percentage";
import { H6, Paragraph, Span } from "../typography"; // CUSTOM UTILS METHOD

import { numberFormat } from "utils/numberFormat"; // ==============================================================

// ==============================================================
const Title = ({
  title,
  subtitle,
  percentage,
  titlePrefix,
  percentageType = "success"
}) => {
  return <Fragment>
      <FlexBox alignItems="center" gap={1}>
        <H6>
          {titlePrefix && <Span fontWeight={500} fontSize={18} color="grey.400">
              {titlePrefix}
            </Span>}

          {typeof title === "number" ? numberFormat(title) : title}
        </H6>

        <Percentage type={percentageType}>{percentage}</Percentage>
      </FlexBox>

      <Paragraph color="text.secondary">{subtitle}</Paragraph>
    </Fragment>;
};

export default Title;