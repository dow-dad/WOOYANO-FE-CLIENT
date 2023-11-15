import { Button, Grid, Box, useMediaQuery } from "@mui/material";
import Folder from "icons/Folder"; // CUSTOM COMPONENTS

import DocumentCard from "./DocumentCard";
import { H6, Span } from "components/typography";
import { SearchInput } from "components/search-input";
import { FlexBox, FlexBetween } from "components/flexbox"; // CUSTOM DUMMY DATA

const DOCUMENT_LIST = [{
  id: 1,
  title: "Customer",
  file: 7,
  Icon: Folder
}, {
  id: 2,
  title: "Buyer",
  file: 25,
  Icon: Folder
}, {
  id: 3,
  title: "Documents",
  file: 18,
  Icon: Folder
}, {
  id: 4,
  title: "File Manager",
  file: 27,
  Icon: Folder
}, {
  id: 5,
  title: "Apps",
  file: 13,
  Icon: Folder
}, {
  id: 6,
  title: "Apk File",
  file: 6,
  Icon: Folder
}, {
  id: 7,
  title: "Finance",
  file: 25,
  Icon: Folder
}, {
  id: 8,
  title: "CRM Project",
  file: 15,
  Icon: Folder
}, {
  id: 9,
  file: 7,
  title: "Project HTML",
  img: "/static/files-icon/html.svg"
}, {
  id: 10,
  file: 7,
  title: "Project CSS",
  img: "/static/files-icon/css.svg"
}, {
  id: 11,
  file: 12,
  title: "Project JPG",
  img: "/static/files-icon/jpg.svg"
}, {
  id: 12,
  file: 12,
  title: "Project PDF",
  img: "/static/files-icon/pdf.svg"
}];

const Documents = () => {
  const downMD = useMediaQuery(theme => theme.breakpoints.down("sm"));
  return <Box py={3}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FlexBetween flexWrap="wrap">
            <H6 fontSize={16} mb={1}>
              My Documents{" "}
              <Span fontSize={14} fontWeight={500} color="text.secondary">
                (100+ Resources)
              </Span>
            </H6>

            <FlexBox gap={2} flexGrow={1} justifyContent="end" flexWrap="wrap">
              <SearchInput placeholder="Search...." sx={{
              maxWidth: downMD ? "100%" : 250
            }} />

              <Button fullWidth={downMD} variant="contained">
                File Manager
              </Button>
            </FlexBox>
          </FlexBetween>
        </Grid>

        {DOCUMENT_LIST.map(item => <Grid item md={3} sm={4} xs={12} key={item.id}>
            <DocumentCard file={item.file} title={item.title} Icon={item.Icon} img={item.img} />
          </Grid>)}
      </Grid>
    </Box>;
};

export default Documents;