import { SvgIcon } from "@mui/material";

const CheckDoneIcon = props => {
  return <SvgIcon viewBox="0 0 18 18" {...props}>
      <circle cx="9" cy="9" r="8.5" stroke="currentColor" />
      <path d="M6.33538 8.79547L8.23312 10.6932L12.0286 6.89774" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </SvgIcon>;
};

export default CheckDoneIcon;