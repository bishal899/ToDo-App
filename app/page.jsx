"use client";
import Input from "@components/Input";
import List from "@components/List";
import { useState } from "react";

const Home = () => {
  const [items, setItems] = useState([]);

  function onAdd(inputText) {
    setItems((prev) => {
      return [...prev, inputText];
    });
  }

  function onDelete(id) {
    setItems((prev) => {
      return prev.filter((item, index) => {
        return index !== id;
      })
    });
  }

  return (
    <section>
      <div className="heading">
        <h1 className="bg-[#fdcb6e] text-2xl my-4">ToDo List</h1>
      </div>
      <div>
        <Input addItem={onAdd} />
        <ul>
          {items.map((item, index) => (
            <List key={index} id={index} text={item} deleteItem={onDelete} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Home;
