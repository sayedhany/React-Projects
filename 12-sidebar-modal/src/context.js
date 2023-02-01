import React, { useState, useContext } from "react";

const initContext = {
  isModalOpen: false,
  isSidebarOpen: false,
  closeModal: () => {},
  closeSidebar: () => {},
  openModal: () => {},
  openSidebar: () => {},
};
const AppContext = React.createContext(initContext);
const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  function openSidebar() {
    setIsSidebarOpen(true);
  }
  function closeSidebar() {
    setIsSidebarOpen(false);
  }
  function openModal() {
    setIsModalOpen(true);
  }
  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        isSidebarOpen,
        closeModal,
        closeSidebar,
        openModal,
        openSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
