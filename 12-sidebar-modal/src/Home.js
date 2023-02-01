import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
const Home = () => {
  const data = useGlobalContext();
  // console.log(data);
  return (
    <main>
      <button className={`sidebar-toggle `} onClick={() => data.openSidebar()}>
        <FaBars />
      </button>
      <button className="btn" onClick={() => data.openModal()}>
        Show Modal
      </button>
    </main>
  );
};

export default Home;
