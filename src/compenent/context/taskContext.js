import React, { createContext, useState } from "react";
// import axios from 'axios';

export const taskContext = createContext();

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  // const [] = useState("");
  const url = "https://jsonplaceholder.typicode.com/todos";
  const fetchTask = () => {
    fetch(url)
      .then((res) => res.json())
      .then((out) => {
        const tasks = out;
        setTasks(tasks);
        console.log("Checkout this JSON! ", tasks);
      })
      .catch((err) => {
        throw err;
      });
  };

  const addTask = (title) => {
    console.log("addTask");
    const newTask = {
      id: tasks.length+1,
      title: title,
      complete: false
    };
    setTasks([newTask, ...tasks]);
  };

  const deleteTask = (id) => {
    console.log("deleteTask");
    const newTask = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(newTask);
  };

  const store = {
    tasks,
    fetchTask,
    addTask,
    deleteTask,
  };

  return <taskContext.Provider value={store}>{children}</taskContext.Provider>;
};
