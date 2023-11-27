import { Card } from "@mui/material"; // CUSTOM COMPONENTS

import { H6, Paragraph } from "components/typography"; // =====================================================================

// =====================================================================
const DocumentCard = ({
  file,
  img,
  title,
  Icon
}) => {
  return <Card sx={{
    padding: 3,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center"
  }}>
      {Icon && <Icon sx={{
      fontSize: 74,
      color: "text.secondary"
    }} />}
      {img && <img src={img} alt={title} width={74} style={{
      marginBottom: 8
    }} />}

      <H6 fontSize={14}>{title}</H6>
      <Paragraph color="text.secondary">{file} files</Paragraph>
    </Card>;
};

export default DocumentCard;