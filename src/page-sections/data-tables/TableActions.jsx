import { useState } from "react";
import Button from "@mui/material/Button";
import Add from "@mui/icons-material/Add"; // CUSTOM COMPONENTS

import { H6 } from "components/typography";
import { SearchInput } from "components/search-input";
import { FlexBetween, FlexBox } from "components/flexbox"; // CUSTOM STYLED COMPONENTS

import { ButtonWrapper } from "./styles";
import CreateForm from "./CreateForm"; // ==============================================================

// ==============================================================
const TableActions = ({
  rowSelected,
  hasColumnFilter,
  handleSearch,
  handleDeleteRow,
  handleResetColumnFilter
}) => {
  const [openForm, setOpenForm] = useState(false);
  return <FlexBetween flexWrap="wrap">
      {
      /* SEARCH INPUT BOX */
    }
      <SearchInput placeholder="Find Friends" onChange={e => handleSearch(e.target.value.trim())} />

      <ButtonWrapper alignItems="center" gap={2}>
        {
        /* SELECTED ITEM AND DELETE BUTTON */
      }
        {rowSelected ? <FlexBox alignItems="center" gap={1}>
            <H6 fontSize={14}>{rowSelected} Selected</H6>

            <Button size="small" color="error" variant="contained" onClick={handleDeleteRow}>
              Delete
            </Button>
          </FlexBox> : null}

        {
        /* CLEAR FILTER BUTTON */
      }
        {hasColumnFilter ? <Button size="small" color="error" variant="contained" onClick={handleResetColumnFilter}>
            Clear filter
          </Button> : null}

        {
        /* ADD EMPLOYEE BUTTON  */
      }
        <Button endIcon={<Add />} variant="contained" onClick={() => setOpenForm(true)}>
          Add Employee
        </Button>

        {
        /* ADD USER FORM MODAL */
      }
        <CreateForm open={openForm} onClose={() => setOpenForm(false)} />
      </ButtonWrapper>
    </FlexBetween>;
};

export default TableActions;