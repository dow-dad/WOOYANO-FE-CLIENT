import { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore"; // CUSTOM COMPONENT

import { Block } from "components/block";
import ComponentPageLayout from "../../ComponentPageLayout";

const MuiAccordionPageView = () => {
  const [expand, setExpand] = useState("panel1");

  const handleChange = panel => (_, isExpanded) => {
    setExpand(isExpanded ? panel : "");
  };

  return <ComponentPageLayout title="Accordion">
      <Block title="Basic">
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>What admin theme does?</AccordionSummary>

          <AccordionDetails>
            By Uko to save tons and more to time money projects are listed and outstanding.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>What admin theme does?</AccordionSummary>

          <AccordionDetails>
            By Uko to save tons and more to time money projects are listed and outstanding.
          </AccordionDetails>
        </Accordion>
      </Block>

      <Block title="Controlled">
        <Accordion expanded={expand === "panel1"} onChange={handleChange("panel1")}>
          <AccordionSummary expandIcon={<ExpandMore />}>What admin theme does?</AccordionSummary>

          <AccordionDetails>
            By Uko to save tons and more to time money projects are listed and outstanding.
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expand === "panel2"} onChange={handleChange("panel2")}>
          <AccordionSummary expandIcon={<ExpandMore />}>What admin theme does?</AccordionSummary>

          <AccordionDetails>
            By Uko to save tons and more to time money projects are listed and outstanding.
          </AccordionDetails>
        </Accordion>
      </Block>

      <Block title="Outlined Variant">
        <Accordion variant="outlined" expanded>
          <AccordionSummary expandIcon={<ExpandMore />}>What admin theme does?</AccordionSummary>

          <AccordionDetails>
            The vows and named is he seven his origin myself any is decision-making. The interface
            of Jeni’s is simple and clean, with the section includes questions that are very
            specific to their customer group. First thing first, you need to sort out what explicit.
            The advice is to see mails and phone call data, then make a rundown of the top questions
            that show up continually.
          </AccordionDetails>
        </Accordion>

        <Accordion variant="outlined">
          <AccordionSummary expandIcon={<ExpandMore />}>What admin theme does?</AccordionSummary>

          <AccordionDetails>
            The vows and named is he seven his origin myself any is decision-making. The interface
            of Jeni’s is simple and clean, with the section includes questions that are very
            specific to their customer group. First thing first, you need to sort out what explicit.
            The advice is to see mails and phone call data, then make a rundown of the top questions
            that show up continually.
          </AccordionDetails>
        </Accordion>
      </Block>
    </ComponentPageLayout>;
};

export default MuiAccordionPageView;