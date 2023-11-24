import Grid from "@mui/material/Grid";
import { TreeItem, TreeView } from '@mui/x-tree-view';
import { ChevronRight, ExpandMore } from "@mui/icons-material"; // CUSTOM COMPONENTS

import ComponentPageLayout from "../../ComponentPageLayout";
import { Block } from "components/block";

const MuiTreeViewPageView = () => {
  return <ComponentPageLayout title="Tree View" fullLink="https://mui.com/components/tree-view">
      <Grid container spacing={3}>
        <Grid item md={6} xs={12}>
          <Block title="Basic">
            <TreeView aria-label="file system navigator" defaultCollapseIcon={<ExpandMore />} defaultExpandIcon={<ChevronRight />} sx={{
            height: 200,
            flexGrow: 1,
            maxWidth: 400,
            overflowY: "auto"
          }}>
              <TreeItem nodeId="1" label="Components">
                <TreeItem nodeId="2" label="Mui">
                  <TreeItem nodeId="3" label="Alert" />
                  <TreeItem nodeId="4" label="Avatar" />
                  <TreeItem nodeId="5" label="Button" />
                </TreeItem>

                <TreeItem nodeId="6" label="Flexbox">
                  <TreeItem nodeId="7" label="Flex Between" />
                  <TreeItem nodeId="8" label="Flex Center" />
                </TreeItem>
              </TreeItem>

              <TreeItem nodeId="9" label="Documents">
                <TreeItem nodeId="10" label="OSS" />

                <TreeItem nodeId="11" label="MUI">
                  <TreeItem nodeId="12" label="index.js" />
                </TreeItem>
              </TreeItem>
            </TreeView>
          </Block>
        </Grid>

        <Grid item md={6} xs={12}>
          <Block title="Multi Select">
            <TreeView multiSelect aria-label="multi-select" defaultCollapseIcon={<ExpandMore />} defaultExpandIcon={<ChevronRight />} sx={{
            height: 200,
            flexGrow: 1,
            maxWidth: 400,
            overflowY: "auto"
          }}>
              <TreeItem nodeId="1" label="Components">
                <TreeItem nodeId="2" label="Mui">
                  <TreeItem nodeId="3" label="Alert" />
                  <TreeItem nodeId="4" label="Avatar" />
                  <TreeItem nodeId="5" label="Button" />
                </TreeItem>

                <TreeItem nodeId="6" label="Flexbox">
                  <TreeItem nodeId="7" label="Flex Between" />
                  <TreeItem nodeId="8" label="Flex Center" />
                </TreeItem>
              </TreeItem>

              <TreeItem nodeId="9" label="Documents">
                <TreeItem nodeId="10" label="OSS" />

                <TreeItem nodeId="11" label="MUI">
                  <TreeItem nodeId="12" label="index.js" />
                </TreeItem>
              </TreeItem>
            </TreeView>
          </Block>
        </Grid>
      </Grid>
    </ComponentPageLayout>;
};

export default MuiTreeViewPageView;