"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card"; // CUSTOM PAGE SECTION COMPONENTS

import MailSidebar from "./MailSidebar";
import TopbarActions from "./TopbarActions";

const Layout = ({
  children
}) => {
  const pathname = usePathname();
  const [openSidebar, setOpenSidebar] = useState(false);
  return <Box py={3} height="100%">
      <Card sx={{
      display: "flex",
      minHeight: 800
    }}>
        {
        /* SIDEBAR */
      }
        <MailSidebar openSidebar={openSidebar} onClose={() => setOpenSidebar(false)} />

        <Box flexGrow={1}>
          {
          /* TOP ACTIONS */
        }
          {pathname !== "/dashboard/email/compose" && <TopbarActions handleOpenSidebar={() => setOpenSidebar(true)} />}

          {children}
        </Box>
      </Card>
    </Box>;
};

export default Layout;