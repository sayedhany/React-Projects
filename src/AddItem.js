import React, { useRef } from "react";

const AddItem = ({ getNewItem }) => {
  const name = useRef();
  const image = useRef();
  const age = useRef();
  const newItem = {};
  function addItemHandler() {
    let nameValue = name.current.value;
    let imageValue = image.current.value;
    let ageValue = age.current.value;
    if (nameValue && imageValue && ageValue) {
      newItem.name = nameValue;
      newItem.image = imageValue;
      newItem.age = ageValue;
    }
    newItem.id = new Date().getMilliseconds().toString();
    getNewItem(newItem);
    nameValue = imageValue = ageValue = "";
  }
  return (
    <div className="addlist">
      <div>
        <label htmlFor="name">name: </label>
        <input
          type="text"
          name="name"
          id="name"
          ref={name}
          placeholder="name"
        />
      </div>
      <div>
        <label htmlFor="age">age: </label>
        <input type="number" name="age" id="age" ref={age} placeholder="age" />
      </div>
      <div>
        <label htmlFor="image">image: </label>
        <input
          type="text"
          name="image"
          id="image"
          ref={image}
          placeholder="age url"
        />
      </div>
      <button type="button" onClick={addItemHandler}>
        Add Item
      </button>
    </div>
  );
};

export default AddItem;
