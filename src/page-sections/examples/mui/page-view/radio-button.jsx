import { useState } from "react";
import { Grid, Radio, Stack, Tooltip, RadioGroup, FormControlLabel } from "@mui/material"; // CUSTOM COMPONENTS

import ComponentPageLayout from "../../ComponentPageLayout";
import { Block } from "components/block";

const MuiRadioButtonPageView = () => {
  const [colors, setColors] = useState("a");

  const handleColorChange = e => setColors(e.target.value);

  return <ComponentPageLayout title="Radio Button" fullLink="https://mui.com/components/radio-button">
      <Grid container spacing={3}>
        <Grid item lg={6} xs={12}>
          <Block title="Colors">
            <Stack direction="row" justifyContent="center" spacing={1}>
              <Tooltip title="Primary">
                <Radio value="a" name="radio" color="primary" checked={colors === "a"} onChange={handleColorChange} />
              </Tooltip>
              {
              /* <Radio
                 value="b"
                 name="radio"
                 color="secondary"
                 checked={colors === "b"}
                 onChange={handleColorChange}
               /> */
            }
              <Tooltip title="Success">
                <Radio value="c" name="radio" color="success" checked={colors === "c"} onChange={handleColorChange} />
              </Tooltip>

              <Tooltip title="Warning">
                <Radio value="d" name="radio" color="warning" checked={colors === "d"} onChange={handleColorChange} />
              </Tooltip>

              <Tooltip title="Error">
                <Radio value="e" name="radio" color="error" checked={colors === "e"} onChange={handleColorChange} />
              </Tooltip>

              <Tooltip title="Info">
                <Radio value="f" name="radio" color="info" checked={colors === "f"} onChange={handleColorChange} />
              </Tooltip>

              <Tooltip title="Default">
                <Radio value="g" name="radio" color="default" checked={colors === "g"} onChange={handleColorChange} />
              </Tooltip>
            </Stack>
          </Block>
        </Grid>

        <Grid item lg={6} xs={12}>
          <Block title="Sizes">
            <Stack direction="row" justifyContent="center" spacing={1}>
              <Tooltip title="Large">
                <Radio value="a" name="radio" size="large" color="primary" checked={colors === "a"} onChange={handleColorChange} />
              </Tooltip>

              <Tooltip title="Medium">
                <Radio value="c" name="radio" size="medium" color="primary" checked={colors === "c"} onChange={handleColorChange} />
              </Tooltip>

              <Tooltip title="Small">
                <Radio value="c" name="radio" size="small" color="primary" checked={colors === "d"} onChange={handleColorChange} />
              </Tooltip>
            </Stack>
          </Block>
        </Grid>

        <Grid item lg={6} xs={12}>
          <Block title="Label">
            <RadioGroup row defaultValue="female" name="radio-buttons-group" sx={{
            justifyContent: "center"
          }}>
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </Block>
        </Grid>

        <Grid item lg={6} xs={12}>
          <Block title="Label placement">
            <RadioGroup row name="position" defaultValue="top" sx={{
            gap: 4,
            justifyContent: "center"
          }}>
              <FormControlLabel value="top" label="Top" control={<Radio />} labelPlacement="top" />

              <FormControlLabel value="start" label="Start" control={<Radio />} labelPlacement="start" />

              <FormControlLabel value="bottom" label="Bottom" control={<Radio />} labelPlacement="bottom" />

              <FormControlLabel value="end" control={<Radio />} label="End" />
            </RadioGroup>
          </Block>
        </Grid>
      </Grid>
    </ComponentPageLayout>;
};

export default MuiRadioButtonPageView;