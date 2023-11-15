import Image from "next/image";
import { Fragment, useRef, useState } from "react";
import { enUS, esES } from "@mui/material/locale";
import { Box, IconButton, MenuItem, Popover, styled } from "@mui/material";
import { useTranslation } from "react-i18next"; // ==============================================================

// ==============================================================
// LANGUAGE OPTIONS
const languageOptions = {
  en: {
    icon: "/static/flags/usa-round.png",
    label: "English",
    value: enUS
  },
  es: {
    icon: "/static/flags/spain-round.png",
    label: "Spanish",
    value: esES
  }
}; // STYLED COMPONENTS

const IconWrapper = styled(Box)({
  width: 24,
  height: 24,
  padding: "2px",
  display: "flex",
  "& img": {
    width: "100%",
    borderRadius: "50%",
    objectFit: "cover"
  }
});

const LanguagePopover = () => {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const {
    i18n
  } = useTranslation();

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleChangeLanguage = language => {
    i18n.changeLanguage(language);
    setOpen(false);
  };

  const selectedLanguage = languageOptions[i18n.language];
  return <Fragment>
      <IconButton onClick={handleOpen} ref={anchorRef}>
        <IconWrapper>
          <Image width={54} height={54} alt={selectedLanguage.label} src={selectedLanguage.icon || "/static/flags/usa-round.png"} style={{
          width: "100%",
          height: "auto"
        }} />
        </IconWrapper>
      </IconButton>

      <Popover keepMounted open={open} onClose={handleClose} anchorEl={anchorRef.current} anchorOrigin={{
      horizontal: "center",
      vertical: "bottom"
    }} slotProps={{
      paper: {
        sx: {
          width: 110,
          py: 1
        }
      }
    }}>
        {Object.keys(languageOptions).map(language => <MenuItem key={languageOptions[language].label} onClick={() => handleChangeLanguage(language)}>
            {languageOptions[language].label}
          </MenuItem>)}
      </Popover>
    </Fragment>;
};

export default LanguagePopover;