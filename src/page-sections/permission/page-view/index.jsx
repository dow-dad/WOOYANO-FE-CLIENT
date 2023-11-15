"use client";

import { Container } from "@mui/material";
import { RoleBasedGuard } from "components/auth";
import { Paragraph } from "components/typography";

const PermissionPageView = () => {
  return <Container>
      <RoleBasedGuard roles={["editor", "administrator", "admin"]}>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit praesentium facere enim
          quaerat fuga vel commodi voluptatibus, est quam? Vitae atque, suscipit deleniti
          consequuntur, natus cum facere vero accusantium praesentium rerum autem adipisci libero
          itaque ipsum esse repellat dicta, provident dolorum error id! Quas, eaque eius expedita
          officiis praesentium minima iure quis cum animi voluptas repudiandae nobis reiciendis
          facere, distinctio voluptatem iusto sequi odit at quia illo veniam totam ipsum
          consequuntur? Nostrum necessitatibus mollitia, nam eveniet pariatur, eius non saepe minus
          laudantium blanditiis sed voluptate aut placeat recusandae distinctio? Nisi suscipit
          dolorum itaque nostrum dolorem fugiat repellat ea ut necessitatibus!
        </Paragraph>
      </RoleBasedGuard>
    </Container>;
};

export default PermissionPageView;