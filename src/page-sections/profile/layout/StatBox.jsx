import Stack from "@mui/material/Stack";
import { H6, Paragraph } from "components/typography";

// ==============================================================
const StatBox = ({
  amount,
  title,
  color
}) => {
  return <Stack spacing={0.5} alignItems="center" sx={{
    borderRadius: "8px",
    border: "1px solid",
    padding: "1rem .5rem",
    borderColor: "divider",
    width: {
      sm: 120,
      xs: "100%"
    },
    marginBottom: {
      sm: 0,
      xs: 1
    }
  }}>
      <H6 fontSize={16} color={color}>
        {amount}
      </H6>

      <Paragraph color="text.secondary">{title}</Paragraph>
    </Stack>;
};

export default StatBox;