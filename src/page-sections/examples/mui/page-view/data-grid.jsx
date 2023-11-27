import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// CUSTOM COMPONENTS
import ComponentPageLayout from "../../ComponentPageLayout";
import { Block } from "components/block";
const columns = [{
  flex: 1,
  field: "id",
  headerName: "ID"
}, {
  flex: 1,
  field: "firstName",
  headerName: "First name"
}, {
  flex: 1,
  field: "lastName",
  headerName: "Last name"
}, {
  flex: 1,
  field: "age",
  headerName: "Age"
}, {
  flex: 1,
  field: "fullName",
  headerName: "Full name",
  valueGetter: ({
    row
  }) => `${row.firstName || ""} ${row.lastName || ""}`
}];
const rows = [{
  id: 1,
  lastName: "Snow",
  firstName: "Jon",
  age: 35
}, {
  id: 2,
  lastName: "Lannister",
  firstName: "Cersei",
  age: 42
}, {
  id: 3,
  lastName: "Lannister",
  firstName: "Jaime",
  age: 45
}, {
  id: 4,
  lastName: "Stark",
  firstName: "Arya",
  age: 16
}, {
  id: 5,
  lastName: "Targaryen",
  firstName: "Daenerys",
  age: null
}, {
  id: 6,
  lastName: "Melisandre",
  firstName: null,
  age: 150
}, {
  id: 7,
  lastName: "Clifford",
  firstName: "Ferrara",
  age: 44
}, {
  id: 8,
  lastName: "Frances",
  firstName: "Rossini",
  age: 36
}, {
  id: 9,
  lastName: "Roxie",
  firstName: "Harvey",
  age: 65
}, {
  id: 10,
  lastName: "Snow",
  firstName: "Jon",
  age: 35
}, {
  id: 11,
  lastName: "Lannister",
  firstName: "Cersei",
  age: 42
}, {
  id: 13,
  lastName: "Roxie",
  firstName: "Harvey",
  age: 65
}, {
  id: 12,
  lastName: "Lannister",
  firstName: "Jaime",
  age: 45
}, {
  id: 14,
  lastName: "Stark",
  firstName: "Arya",
  age: 16
}, {
  id: 15,
  lastName: "Targaryen",
  firstName: "Daenerys",
  age: null
}, {
  id: 16,
  lastName: "Melisandre",
  firstName: null,
  age: 150
}, {
  id: 17,
  lastName: "Clifford",
  firstName: "Ferrara",
  age: 44
}, {
  id: 18,
  lastName: "Frances",
  firstName: "Rossini",
  age: 36
}, {
  id: 19,
  lastName: "Roxie",
  firstName: "Harvey",
  age: 65
}];

const MuiDataGridPageView = () => {
  const initialState = {
    pagination: {
      paginationModel: {
        page: 0,
        pageSize: 10
      }
    }
  };
  return <ComponentPageLayout title="Data Grid" fullLink="https://mui.com/x/react-data-grid">
      <Block title="Basic">
        <Box height={600} width="100%">
          <DataGrid rows={rows} columns={columns} checkboxSelection initialState={initialState} pageSizeOptions={[10, 25, 50]} />
        </Box>
      </Block>

      <Block title="Controlled">
        <Box height={600} width="100%">
          <DataGrid rows={rows} columns={columns} checkboxSelection initialState={initialState} pageSizeOptions={[10, 25, 50]} slots={{
          toolbar: GridToolbar
        }} />
        </Box>
      </Block>
    </ComponentPageLayout>;
};

export default MuiDataGridPageView;