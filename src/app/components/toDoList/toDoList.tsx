import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { MdOutlineDoneOutline } from "react-icons/md";
import styles from "./toDoList.module.css";

interface ToDoListProps {
  items: string[];
  onDelete: (index: number) => void;
  onDone: (index: number) => void;
}

const ToDoList: React.FC<ToDoListProps> = ({ items, onDelete, onDone }) => {
  return (
    <table className={styles.table}>
      <tbody>
        {items.map((item: string, index: number) => (
          <tr key={index}>
            <td className={styles.td}>
              {item}
              <div className={styles.icons}>
                <button
                  className={styles.button}
                  aria-label={`Edit item ${index}`}
                >
                  <FaEdit />
                </button>
                <button
                  className={styles.button}
                  aria-label={`Delete item ${index}`}
                  onClick={() => onDelete(index)}
                >
                  <FaTrash />
                </button>
                <button
                  className={styles.button}
                  aria-label={`Done item ${index}`}
                  onClick={() => onDone(index)}
                >
                  <MdOutlineDoneOutline />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default ToDoList;
