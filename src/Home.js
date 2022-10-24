import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AppContext, useGlobalContext } from "./context";

const Home = () => {
  const { openCloseSidebar, openCloseModal } = useGlobalContext();
  return (
    <main>
      <button className="sidebar-toggle" onClick={() => openCloseSidebar()}>
        <FaBars></FaBars>
      </button>
      <button className="btn" onClick={() => openCloseModal()}>
        show modal
      </button>
    </main>
  );
};

export default Home;
