import { useState } from "react";
import { Grid, List, Paper, Stack, Button, ListItem, Checkbox, ListItemIcon, ListItemText } from "@mui/material"; // CUSTOM COMPONENTS

import { Block } from "components/block";
import { Scrollbar } from "components/scrollbar";
import ComponentPageLayout from "../../ComponentPageLayout";

function not(a, b) {
  return a.filter(value => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter(value => b.indexOf(value) !== -1);
}

const MuiTransferListPageView = () => {
  const [checked, setChecked] = useState([]);
  const [left, setLeft] = useState([0, 1, 2, 3]);
  const [right, setRight] = useState([4, 5, 6, 7]);
  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) newChecked.push(value);else newChecked.splice(currentIndex, 1);
    setChecked(newChecked);
  };

  const handleAllRight = () => {
    setRight(right.concat(left));
    setLeft([]);
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const handleAllLeft = () => {
    setLeft(left.concat(right));
    setRight([]);
  };

  const customList = items => <Paper autoHide={false} component={Scrollbar} sx={{
    width: 200,
    height: 230,
    overflow: "auto",
    borderRadius: 3
  }}>
      <List dense component="div" role="list">
        {items.map(value => {
        const labelId = `transfer-list-item-${value}-label`;
        return <ListItem key={value} role="listitem" onClick={handleToggle(value)}>
              <ListItemIcon>
                <Checkbox tabIndex={-1} disableRipple checked={checked.indexOf(value) !== -1} />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`List item ${value + 1}`} />
            </ListItem>;
      })}
      </List>
    </Paper>;

  return <ComponentPageLayout title="Transfer List" fullLink="https://mui.com/components/transfer-list">
      <Block title="Basic">
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item>{customList(left)}</Grid>

          <Grid item>
            <Stack spacing={2}>
              <Button size="small" variant="outlined" onClick={handleAllRight} disabled={left.length === 0} aria-label="move all right">
                ≫
              </Button>

              <Button size="small" variant="outlined" onClick={handleCheckedRight} disabled={leftChecked.length === 0} aria-label="move selected right">
                &gt;
              </Button>
              <Button size="small" variant="outlined" onClick={handleCheckedLeft} disabled={rightChecked.length === 0} aria-label="move selected left">
                &lt;
              </Button>
              <Button size="small" variant="outlined" onClick={handleAllLeft} disabled={right.length === 0} aria-label="move all left">
                ≪
              </Button>
            </Stack>
          </Grid>

          <Grid item>{customList(right)}</Grid>
        </Grid>
      </Block>
    </ComponentPageLayout>;
};

export default MuiTransferListPageView;