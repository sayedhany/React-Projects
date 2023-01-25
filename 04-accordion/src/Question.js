import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info, closeHandler }) => {
  const [toggle, setToggle] = useState(false);
  function toggleHandler() {
    setToggle((prev) => !prev);
  }
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={toggleHandler}>
          {!toggle ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>
      {toggle && <p>{info}</p>}
    </article>
  );
};

export default Question;
