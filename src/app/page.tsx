"use client";
import React, { useState } from "react";
import styles from "./HomePage.module.css";
import Paragraph from "../app/components/paragraph/paragraph";
import Button from "./components/button/button";
import ToDoList from "./components/toDoList/toDoList";
import Heading from "./components/heading/heading";

export default function Home() {
  const [toDoItems, setToDoItems] = useState<string[]>([]);
  const [newToDo, setNewToDo] = useState("");

  const handleAddToDo = () => {
    if (newToDo.trim() !== "") {
      setToDoItems([...toDoItems, newToDo]);
      setNewToDo("");
    }
  };
  const handleDeleteToDo = (index: number) => {
    setToDoItems(toDoItems.filter((_, i) => i !== index));
  };
  const handleDoneToDo = (index: number) => {
    const newToDoItems = [...toDoItems];
    newToDoItems[index] = newToDoItems[index].strike();
    setToDoItems(newToDoItems);
  };
  return (
    <main className={styles.body}>
      <div className={styles.toDoBox}>
        <Heading
          variant={"primaryHeading"}
          fontSize={30}
          fontcolor={"white"}
          alignment={"right"}
          className={"heading"}
        >
          Todo List
        </Heading>
        <Paragraph
          variant={"primaryParagraph"}
          fontSize={10}
          fontcolor="white"
          className="Paragraph"
        >
          A simple React Todo List App
        </Paragraph>

        <hr className={styles.hr} />
        <ToDoList
          items={toDoItems}
          onDelete={handleDeleteToDo}
          onDone={handleDoneToDo}
        />
        <Heading
          variant={"primaryHeading"}
          fontSize={20}
          fontcolor={"white"}
          alignment={"right"}
          className={"heading"}
        >
          New todo
        </Heading>
        <div className="input">
          <input
            type="text"
            placeholder="New ToDo"
            className={styles.textBox}
            value={newToDo}
            onChange={(e) => setNewToDo(e.target.value)}
          />
          <Button
            variant={"primaryButton"}
            fontcolor={"#fff"}
            backgroundColor={"#ff6666"}
            onClick={handleAddToDo}
          >
            Add ToDo
          </Button>
        </div>
      </div>
    </main>
  );
}
