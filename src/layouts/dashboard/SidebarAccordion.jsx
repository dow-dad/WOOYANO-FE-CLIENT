import { Fragment, useEffect, useState } from "react";
import { Box, Collapse } from "@mui/material";

import useLocation from "hooks/useLocation"; // CUSTOM STYLED COMPONENTS

import { ItemText, BulletIcon, ICON_STYLE, AccordionButton, ChevronRightStyled, AccordionExpandPanel } from "../layout-parts/styles/sidebar"; // NAVIGATION ITEM TYPE

// ==============================================================
const SidebarAccordion = props => {
  const {
    item,
    children,
    sidebarCompact
  } = props;

  const {
    pathname
  } = useLocation();
  const [hasActive, setHasActive] = useState(0);
  const [collapsed, setCollapsed] = useState(false);

  const handleClick = () => setCollapsed(state => !state);

  const find = item?.children?.find(li => li.path === pathname);
  useEffect(() => {
    if (find) {
      setCollapsed(true);
      setHasActive(1);
    }

    return () => {
      setCollapsed(false);
      setHasActive(0);
    };
  }, [find]);
  return <Fragment>
      <AccordionButton onClick={handleClick} active={hasActive}>
        <Box pl="7px" display="flex" alignItems="center">
          {
          /* ICON SHOW IF EXIST */
        }
          {item.icon ? <item.icon sx={ICON_STYLE(hasActive)} /> : null}

          {
          /* BULLET ICON SHOW IF ANY TEXT EXIST  */
        }
          {item.iconText ? <BulletIcon active={hasActive} /> : null}

          <ItemText compact={sidebarCompact} active={hasActive}>
            {item.name}
          </ItemText>
        </Box>

        <ChevronRightStyled active={hasActive} compact={sidebarCompact} className="accordionArrow" collapsed={collapsed ? 1 : 0} />
      </AccordionButton>

      <Collapse in={collapsed} unmountOnExit>
        <AccordionExpandPanel className="expand">{children}</AccordionExpandPanel>
      </Collapse>
    </Fragment>;
};

export default SidebarAccordion;