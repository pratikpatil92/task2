import React, { useEffect, useContext } from "react";
import { taskContext } from "./../context/taskContext";
import TaskItem from "./TaskItem";

const TaskList = (props) => {
  const { tasks, fetchTasks } = useContext(taskContext);

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      {tasks.map((task) => {
        return <TaskItem key={task.id} task={task} />;
      })}
    </div>
  );
};

export default TaskList;
