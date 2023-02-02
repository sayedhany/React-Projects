import React, { useState, useContext } from "react";
import sublinks from "./data";
const initContext = {
  isSubmenuOpen: false,
  isSidebarOpen: false,
  location: {},
  page: {},
  closeSubmenu: () => {},
  closeSidebar: () => {},
  openSubmenu: () => {},
  openSidebar: () => {},
};
const AppContext = React.createContext(initContext);
export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: "", links: [] });
  function openSidebar() {
    setIsSidebarOpen(true);
  }
  function closeSidebar() {
    setIsSidebarOpen(false);
  }
  function openSubmenu(text, coordinates) {
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  }
  function closeSubmenu() {
    setIsSubmenuOpen(false);
  }

  return (
    <AppContext.Provider
      value={{
        isSubmenuOpen,
        isSidebarOpen,
        closeSubmenu,
        closeSidebar,
        openSubmenu,
        openSidebar,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext };
