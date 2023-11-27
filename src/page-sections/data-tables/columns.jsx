import { Avatar, Box, Checkbox } from "@mui/material";
// CUSTOM COMPONENTS
import FlexBox from "components/flexbox/FlexBox";
import { Paragraph, Small } from "components/typography"; // common cell component

const CommonCell = ({
  title,
  body
}) => <Box>
    <Paragraph fontWeight={500} color="text.primary">
      {title}
    </Paragraph>

    <Small color="text.secondary">{body}</Small>
  </Box>; // ===============================


// ===============================
export const columns = [{
  id: "select",
  maxSize: 50,
  header: ({
    table
  }) => <Checkbox {...{
    checked: table.getIsAllRowsSelected(),
    indeterminate: table.getIsSomeRowsSelected(),
    onChange: table.getToggleAllRowsSelectedHandler()
  }} />,
  cell: ({
    row
  }) => <Checkbox {...{
    checked: row.getIsSelected(),
    disabled: !row.getCanSelect(),
    indeterminate: row.getIsSomeSelected(),
    onChange: row.getToggleSelectedHandler()
  }} />
}, {
  header: "Name",
  minSize: 200,
  accessorKey: "name",
  cell: ({
    row
  }) => {
    const {
      avatar,
      name,
      id
    } = row.original;
    return <FlexBox alignItems="center" gap={1.5}>
          <Avatar alt={name} src={avatar} variant="rounded" sx={{
        backgroundColor: "action.selected",
        p: 0.5,
        pb: 0
      }} />

          <CommonCell title={name} body={id} />
        </FlexBox>;
  }
}, {
  header: "Position",
  accessorKey: "position",
  cell: ({
    row
  }) => <CommonCell title={row.original.position} body={row.original.experience} />
}, {
  maxSize: 80,
  header: "Team",
  accessorKey: "team"
}, {
  header: "Birth Date",
  accessorKey: "dateOfBirth"
}, {
  header: "Email",
  accessorKey: "email",
  cell: ({
    row
  }) => <CommonCell title={row.original.email} body={row.original.phone} />
}, {
  header: "Address",
  accessorKey: "address"
}, {
  header: "Status",
  accessorKey: "status"
}];