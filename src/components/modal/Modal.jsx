import { Box, Modal as MuiModal, styled } from "@mui/material"; // ===========================================================================

// ===========================================================================
// STYLED COMPONENT
const Wrapper = styled(Box)(({
  theme
}) => ({
  top: "50%",
  left: "50%",
  padding: 24,
  maxWidth: 680,
  width: "100%",
  borderRadius: 16,
  position: "absolute",
  transform: "translate(-50%, -50%)",
  backgroundColor: theme.palette.background.paper
}));

const Modal = ({
  children,
  open,
  handleClose,
  ...props
}) => {
  return <MuiModal open={open} onClose={handleClose}>
      <Wrapper {...props}>{children}</Wrapper>
    </MuiModal>;
};

export default Modal;