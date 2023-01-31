import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";
const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};
function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "please enter value");
    } else if (name && isEditing) {
      //deal wirh edit
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditId(null);
      setIsEditing(false);
      showAlert(true, "success", "item changed");
    } else {
      showAlert(true, "success", "item added to the list");
      const newItems = { id: new Date().getTime().toString(), title: name };
      console.log(newItems);
      setList([...list, newItems]);
      setName("");
    }
  }
  function showAlert(show = false, type = "", msg = "") {
    setAlert({ show, type, msg });
  }
  function clearListHandler() {
    showAlert(true, "danger", "empty list");
    setList("");
  }
  function removeItem(id) {
    showAlert(true, "danger", "items added");
    setList(list.filter((item) => item.id !== id));
  }
  function editItem(id) {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(specificItem.title);
  }
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  });
  return (
    <section className="section-center">
      <form onSubmit={handleSubmit} className="grocery-form">
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "Submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List
            editItem={editItem}
            list={list}
            items={list}
            removeItem={removeItem}
          />
          <button className="clear-btn" onClick={clearListHandler}>
            clear Items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
