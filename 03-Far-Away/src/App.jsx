import { useState } from "react";
import Form from "./Form";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";

/* eslint-disable no-unused-vars */
export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id){
    setItems(items => items.filter(item=> item.id !== id))
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems}  />
      <PackingList items={items} onDeleteItems={handleDeleteItem}/>
      <Stats />
    </div>
  );
}
