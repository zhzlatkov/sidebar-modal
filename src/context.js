import React, { useState, useContext } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openCloseSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const openCloseModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <AppContext.Provider
      value={{ isSidebarOpen, isModalOpen, openCloseSidebar, openCloseModal }}
    >
      {children}
    </AppContext.Provider>
  );
};
// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
