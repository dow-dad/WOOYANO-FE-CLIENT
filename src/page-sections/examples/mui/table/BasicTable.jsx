import { Paper, Table, styled, TableRow, TableBody, TableCell, TableHead, TableContainer } from "@mui/material";
import { Scrollbar } from "components/scrollbar";
import { isDark } from "utils/constants"; // data

const rows = [{
  name: "Eclair",
  calories: 262,
  fat: 16.0,
  carbs: 24,
  protein: 6.0
}, {
  name: "Cupcake",
  calories: 305,
  fat: 3.7,
  carbs: 67,
  protein: 4.3
}, {
  name: "Gingerbread",
  calories: 356,
  fat: 16.0,
  carbs: 49,
  protein: 3.9
}, {
  name: "Frozen yoghurt",
  calories: 159,
  fat: 6.0,
  carbs: 24,
  protein: 4.0
}, {
  name: "Ice cream sandwich",
  calories: 237,
  fat: 9.0,
  carbs: 37,
  protein: 4.3
}]; // styled components

const HeadTableCell = styled(props => <TableCell {...props} padding="normal" />)(({
  theme
}) => ({
  fontWeight: 600,
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.grey[isDark(theme) ? 700 : 100]
}));

const BasicTable = () => {
  return <TableContainer component={Paper} sx={{
    borderRadius: 2,
    boxShadow: 2
  }}>
      <Scrollbar>
        <Table sx={{
        minWidth: 650
      }}>
          <TableHead>
            <TableRow>
              <HeadTableCell>Dessert (100g serving)</HeadTableCell>
              <HeadTableCell align="right">Calories</HeadTableCell>
              <HeadTableCell align="right">Fat&nbsp;(g)</HeadTableCell>
              <HeadTableCell align="right">Carbs&nbsp;(g)</HeadTableCell>
              <HeadTableCell align="right">Protein&nbsp;(g)</HeadTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map(row => <TableRow key={row.name}>
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
              </TableRow>)}
          </TableBody>
        </Table>
      </Scrollbar>
    </TableContainer>;
};

export default BasicTable;