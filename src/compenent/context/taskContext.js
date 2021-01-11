import React, { createContext, useState } from "react";
// import axios from 'axios';

export const taskContext = createContext();

export const TaskContextProvider = ({ children }) => {
  const [task, setTask] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  // const [] = useState("");
  const url = "https://jsonplaceholder.typicode.com/todos";
  const fetchTask = () => {
    fetch(url)
      .then((res) => res.json())
      .then((out) => {
        const task = out;
        setTask(task);
        console.log("Checkout this JSON! ", task);
      })
      .catch((err) => {
        throw err;
      });
  };

  const addTodo = (title) => {
    console.log("addTask");
    const d = new Date();
    const newTask = {
      id: task.length+1,
      title: title,
      complete: false
    };
    setTask([newTask, ...task]);
  };

  const deleteTask = (id) => {
    console.log("deleteTask");
    const newTask = task.filter((task) => {
      return task.id !== id;
    });
    setTodos(newTask);
  };

  const store = {
    task,
    fetchTask,
    addTask,
    deleteTask,
  };

  return <todoContext.Provider value={store}>{children}</todoContext.Provider>;
};
