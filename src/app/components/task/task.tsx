"use client";
import React from "react";
import { Itask } from "@/app/types/task";
import styles from "../toDoList/toDOList.module.css";

interface TaskProps {
  task: Itask;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  return (
    <tr key={task.id}>
      <td className={styles.td}>{task.text}</td>
    </tr>
  );
};

export default Task;
