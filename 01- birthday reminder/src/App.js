import React, { useRef, useState } from "react";
import data from "./data";
import List from "./List";
import AddItem from "./AddItem";
function App() {
  const [people, setPeople] = useState(data);
  function getNewItem(newItem){
    setPeople((prev)=>{
      return [...prev, newItem]
    })
    
  }
  return (
    <main>
      <div className="container">
        <h3>{people.length ? people.length : 0} birthdays today</h3>
        <AddItem getNewItem={getNewItem} />
        <List people={people} />
        <button onClick={() => setPeople(0)}>Remove All</button>
      </div>
    </main>
  );
}

export default App;
