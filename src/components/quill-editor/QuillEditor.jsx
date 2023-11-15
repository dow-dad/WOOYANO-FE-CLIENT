import { alpha, Box, styled } from "@mui/material";
import ReactQuill from "react-quill"; // STYLED COMPONENT

const EditorWrapper = styled(Box)(({
  theme
}) => {
  return {
    "& .ql-toolbar.ql-snow": {
      borderRadius: "8px 8px 0px 0px",
      border: `1px solid ${theme.palette.divider}`
    },
    "& .ql-container.ql-snow": {
      borderRadius: "0px 0px 8px 8px",
      border: `1px solid ${theme.palette.divider}`
    },
    "& .ql-editor": {
      fontSize: 14,
      minHeight: 200,
      fontWeight: 400,
      lineHeight: 1.5,
      color: theme.palette.text.secondary,
      fontFamily: theme.typography.fontFamily
    },
    ".ql-editor.ql-blank::before": {
      color: alpha(theme.palette.text.secondary, 0.5),
      fontStyle: "normal",
      lineHeight: 1.5,
      fontWeight: 400
    }
  };
}); // ===============================================================

// ===============================================================
const QuillEditor = ({
  value,
  onChange
}) => {
  return <EditorWrapper>
      <ReactQuill theme="snow" value={value || ""} onChange={onChange} placeholder="The new iPad combines the power and capability of a computer with the ease of use and versatility you’d never expect from one. And now it’s even more versatile, with a larger 10.2‑inch Retina display, support" />
    </EditorWrapper>;
};

export default QuillEditor;