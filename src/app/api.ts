import { Itask } from "./types/task";

const baseUrl = "http://localhost:3001";
export const getAllTodos = async (): Promise<Itask[]> => {
  const res = await fetch(`${baseUrl}/task`);
  const todos = await res.json();
  return todos;
};
