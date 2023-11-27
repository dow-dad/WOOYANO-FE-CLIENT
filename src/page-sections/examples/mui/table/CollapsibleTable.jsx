import { useState } from "react";
import { Box, Paper, Table, styled, TableRow, Collapse, TableBody, TableHead, TableCell, IconButton, TableContainer } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { Paragraph } from "components/typography";
import { Scrollbar } from "components/scrollbar";
import { isDark } from "utils/constants"; // styled components

const HeadTableCell = styled(props => <TableCell {...props} padding="normal" />)(({
  theme
}) => ({
  fontWeight: 600,
  color: theme.palette.text.primary
}));

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [{
      date: "2020-01-05",
      customerId: "11091700",
      amount: 3
    }, {
      date: "2020-01-02",
      customerId: "Anonymous",
      amount: 1
    }]
  };
}

const rows = [createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 3.99), createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 4.99), createData("Eclair", 262, 16.0, 24, 6.0, 3.79), createData("Cupcake", 305, 3.7, 67, 4.3, 2.5), createData("Gingerbread", 356, 16.0, 49, 3.9, 1.5)];

function Row({
  row
}) {
  const [open, setOpen] = useState(false);
  return <>
      <TableRow>
        <TableCell padding="normal">
          <IconButton size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>

        <TableCell padding="normal" component="th" scope="row">
          {row.name}
        </TableCell>

        <TableCell padding="normal" align="right">
          {row.calories}
        </TableCell>
        <TableCell padding="normal" align="right">
          {row.fat}
        </TableCell>
        <TableCell padding="normal" align="right">
          {row.carbs}
        </TableCell>
        <TableCell padding="normal" align="right">
          {row.protein}
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell padding="normal" colSpan={6} style={{
        paddingBottom: 0,
        paddingTop: 0
      }}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box>
              <Paragraph fontWeight={600} mx={2} mb={1}>
                History
              </Paragraph>

              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell padding="normal">Date</TableCell>
                    <TableCell padding="normal">Customer</TableCell>
                    <TableCell padding="normal" align="right">
                      Amount
                    </TableCell>
                    <TableCell padding="normal" align="right">
                      Total price ($)
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {row.history.map(historyRow => <TableRow key={historyRow.date}>
                      <TableCell padding="normal" component="th" scope="row">
                        {historyRow.date}
                      </TableCell>

                      <TableCell padding="normal">{historyRow.customerId}</TableCell>

                      <TableCell padding="normal" align="right">
                        {historyRow.amount}
                      </TableCell>

                      <TableCell padding="normal" align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>)}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>;
}

const CollapsibleTable = () => {
  return <TableContainer component={Paper} sx={{
    borderRadius: 2,
    boxShadow: 2
  }}>
      <Scrollbar>
        <Table>
          <TableHead sx={{
          backgroundColor: theme => isDark(theme) ? "grey.700" : "grey.100"
        }}>
            <TableRow>
              <HeadTableCell />
              <HeadTableCell>Dessert (100g serving)</HeadTableCell>
              <HeadTableCell align="right">Calories</HeadTableCell>
              <HeadTableCell align="right">Fat&nbsp;(g)</HeadTableCell>
              <HeadTableCell align="right">Carbs&nbsp;(g)</HeadTableCell>
              <HeadTableCell align="right">Protein&nbsp;(g)</HeadTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map(row => <Row key={row.name} row={row} />)}
          </TableBody>
        </Table>
      </Scrollbar>
    </TableContainer>;
};

export default CollapsibleTable;