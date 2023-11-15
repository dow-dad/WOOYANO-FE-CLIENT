import { useContext } from "react";
import { LayoutContext } from "./layoutContext";

const useLayout = () => useContext(LayoutContext);

export default useLayout;