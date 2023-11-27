import { Chip } from "@mui/material"; // CUSTOM COMPONENTS

import { Paragraph } from "components/typography";
import { FlexBetween, FlexBox } from "components/flexbox"; // ==============================================================

// ==============================================================
const ListItem = props => {
  const {
    title,
    value,
    Icon,
    active,
    handleChange
  } = props;
  return <FlexBetween onClick={handleChange} sx={{
    lineHeight: 1,
    cursor: "pointer",
    paddingBlock: 1.5,
    color: "grey.400",
    alignItems: "center",
    "& .title": {
      color: "inherit"
    },
    "& .badge": {
      color: "inherit"
    },
    "& .MuiSvgIcon-root": {
      color: "inherit"
    },
    ...(active && {
      color: "primary.main"
    })
  }}>
      <FlexBox gap={1.5} alignItems="center">
        {Icon}

        <Paragraph className="title" fontWeight={400} fontSize={16}>
          {title}
        </Paragraph>
      </FlexBox>

      {value > 0 && <Chip className="badge" size="small" label={`(${value})`} color="secondary" />}
    </FlexBetween>;
};

export default ListItem;