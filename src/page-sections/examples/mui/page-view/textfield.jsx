import { useState } from "react";
import Tab from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@mui/lab"; // CUSTOM COMPONENTS

import Filled from "../text-fields/Filled";
import Outlined from "../text-fields/Outlined";
import Standard from "../text-fields/Standard";
import ComponentPageLayout from "../../ComponentPageLayout";

const MuiTextFieldPageView = () => {
  const [value, setValue] = useState("1");

  const handleChange = (_, newValue) => setValue(newValue);

  return <ComponentPageLayout title="Textfield" fullLink="https://mui.com/components/text-fields">
      <TabContext value={value}>
        <TabList onChange={handleChange}>
          <Tab value="1" label="Outlined" />
          <Tab value="2" label="Filled" />
          <Tab value="3" label="Standard" />
        </TabList>

        <TabPanel value="1">
          <Outlined />
        </TabPanel>

        <TabPanel value="2">
          <Filled />
        </TabPanel>

        <TabPanel value="3">
          <Standard />
        </TabPanel>
      </TabContext>
    </ComponentPageLayout>;
};

export default MuiTextFieldPageView;