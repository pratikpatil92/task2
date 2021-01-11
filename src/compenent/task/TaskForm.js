import React, { useContext, useState, useEffect } from "react";
import { taskContext } from "./../context/taskContext";

const TaskForm = (props) => {
  const { addTask } = useContext(taskContext);
  const [input, setInput] = useState("");

  const onSubmit = (e) => {
    
      addTask(input);
    
  };

  useEffect(() => {
    
      setInput(input);
    
  }, []);



  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          id="standard-required"
          label="What needs to be done?"
          className="formControl"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </div>
  );
};

export default TaskForm;
