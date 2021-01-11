import React, { useEffect, useContext } from "react";
import { taskContext } from "./../context/taskContext";
import TaskItem from "./TaskItem";

const TaskList = (props) => {
  const { task, fetchTask } = useContext(taskContext);

  useEffect(() => {
    fetchTask();
  }, []);

  return (
    <div>
      {task.map((task) => {
        return <TaskItem key={task.id} task={task} />;
      })}
    </div>
  );
};

export default TaskList;
