import { Box, Card, Chip, Stack, Table, alpha, styled, Avatar, TableRow, useTheme, TableBody, TableCell, AvatarGroup } from "@mui/material"; // CUSTOM COMPONENTS

import { Scrollbar } from "components/scrollbar";
import { H6, Paragraph } from "components/typography";
import FlexRowAlign from "components/flexbox/FlexRowAlign"; // CUSTOM ICON COMPONENTS

import InvertColors from "icons/InvertColors";
import PaletteOutlined from "icons/PaletteOutlined";
import KeyframeBezierIn from "icons/KeyframeBezierIn"; // STYLED COMPONENTS

const StyledAvatarGroup = styled(AvatarGroup)({
  "& .MuiAvatarGroup-avatar": {
    width: 25,
    height: 25
  }
});
const IconWrapper = styled(FlexRowAlign)(({
  color
}) => ({
  width: 35,
  height: 30,
  borderRadius: "4px",
  backgroundColor: alpha(color, 0.2)
}));

const Teams = () => {
  const theme = useTheme(); // CUSTOM DUMMY DATA

  const TEAM_LIST = [{
    id: 1,
    Icon: KeyframeBezierIn,
    company: "Ui Lib",
    position: "Software Engineers",
    date: "Jan 12, 2021",
    color: theme.palette.primary.main
  }, {
    id: 2,
    Icon: PaletteOutlined,
    company: "Team Uko",
    position: "Visual Designers",
    date: "Jan 22, 2021",
    color: theme.palette.info.main
  }, {
    id: 3,
    Icon: InvertColors,
    company: "Team Olly",
    position: "Web Developers",
    date: "Jan 12, 2021",
    color: theme.palette.warning.main
  }];
  return <Card sx={{
    padding: 3
  }}>
      <H6 fontSize={16} mb={2}>
        Teams
      </H6>

      <Scrollbar autoHide={false}>
        <Table sx={{
        minWidth: 600
      }}>
          <TableBody>
            {TEAM_LIST.map(({
            Icon,
            color,
            company,
            date,
            id,
            position
          }) => <TableRow key={id}>
                <TableCell>
                  <Stack mb={1} alignItems="center" direction="row" spacing={2}>
                    <IconWrapper color={color}>
                      <Icon sx={{
                    color: color
                  }} />
                    </IconWrapper>

                    <Box>
                      <H6 color="text.primary" fontSize={14}>
                        {company}
                      </H6>

                      <Paragraph color="text.secondary">{position}</Paragraph>
                    </Box>
                  </Stack>
                </TableCell>

                <TableCell>Formed {date}</TableCell>

                <TableCell>
                  <Stack direction="row" justifyContent="flex-end" spacing={2}>
                    <StyledAvatarGroup max={3}>
                      <Avatar src="/static/user/user-11.png" />
                      <Avatar src="/static/user/user-11.png" />
                      <Avatar src="/static/user/user-11.png" />
                      <Avatar src="/static/user/user-11.png" />
                      <Avatar src="/static/user/user-11.png" />
                    </StyledAvatarGroup>

                    <Chip size="small" color="secondary" label="30 members" />
                  </Stack>
                </TableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </Scrollbar>
    </Card>;
};

export default Teams;