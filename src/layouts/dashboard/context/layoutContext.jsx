import { useState, createContext } from "react"; // ==============================================================

// ==============================================================
export const LayoutContext = createContext({});

const LayoutProvider = ({
  children
}) => {
  const [sidebarCompact, setSidebarCompact] = useState(false);
  const [showMobileSideBar, setShowMobileSideBar] = useState(false); // HANDLE SIDE BAR TOGGLE FOR LARGE DEVICE

  const handleSidebarCompactToggle = () => setSidebarCompact(!sidebarCompact); // HANDLE SIDE BAR OPEN FOR SMALL DEVICE


  const handleOpenMobileSidebar = () => setShowMobileSideBar(true); // HANDLE SIDE BAR CLOSE FOR SMALL DEVICE


  const handleCloseMobileSidebar = () => setShowMobileSideBar(false);

  return <LayoutContext.Provider value={{
    sidebarCompact,
    showMobileSideBar,
    handleSidebarCompactToggle,
    handleCloseMobileSidebar,
    handleOpenMobileSidebar
  }}>
      {children}
    </LayoutContext.Provider>;
};

export default LayoutProvider;