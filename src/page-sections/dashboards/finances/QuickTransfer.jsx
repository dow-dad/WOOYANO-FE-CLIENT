import { Fragment, useState } from "react";
import { Box, Button, Card, Fade, Menu, MenuItem, Stack, TextField, useTheme } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material"; // CUSTOM COMPONENTS

import { Paragraph, Span } from "components/typography";
import { FlexBox } from "components/flexbox";

const QuickTransfer = () => {
  const theme = useTheme();
  const [selectCard, setSelectCard] = useState("Visa");
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = value => () => {
    if (value) setSelectCard(value);
    setAnchorEl(null);
  };

  const END_ADORNMENT = <Fragment>
      <Stack direction="row" alignItems="center" onClick={handleClick} sx={{
      pl: 1.5,
      cursor: "pointer",
      borderLeft: `2px solid ${theme.palette.divider}`
    }}>
        <Span>{selectCard}</Span> <KeyboardArrowDown />
      </Stack>

      <Menu id="fade-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose(null)} TransitionComponent={Fade}>
        <MenuItem onClick={handleClose("Visa")}>Visa</MenuItem>
        <MenuItem onClick={handleClose("Master")}>Master</MenuItem>
        <MenuItem onClick={handleClose("Credit")}>Credit</MenuItem>
      </Menu>
    </Fragment>;
  return <Card sx={{
    p: 3
  }}>
      <Paragraph fontSize={18} fontWeight={500}>
        Quick Transfer
      </Paragraph>

      <Box mt={3} mb={2}>
        <TextField fullWidth placeholder="4436  2548  2654  236" InputProps={{
        endAdornment: END_ADORNMENT
      }} />
      </Box>

      <FlexBox gap={2} alignItems="center">
        <Button>Send Money</Button>

        <Button variant="outlined" color="secondary">
          Save Draft
        </Button>
      </FlexBox>
    </Card>;
};

export default QuickTransfer;