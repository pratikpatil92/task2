import React, { useEffect, useContext } from "react";
import { taskContext } from "./../context/taskContext";
import TaskItem from "./TaskItem";

const TaskList = (props) => {
  const { task, fetchTask } = useContext(taskContext);
  // const ct = useContext(todoContext);

  useEffect(() => {
    fetchTask();
  }, []);

  return (
    <div>
      {task.map((task) => {
        return <TodoItem key={task.id} task={task} />;
      })}
    </div>
  );
};

export default TaskList;
