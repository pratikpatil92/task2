import React, { useContext, useState } from "react";
import { taskContext } from "./../context/taskContext";
import { List, Checkbox, IconButton } from "@material-ui/core";
import {
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText
} from "@material-ui/core";

import { Delete, Edit } from "@material-ui/icons";

const TaskItem = (props) => {
  const { task, deleteTask } = useContext(taskContext);

  const {
    task: { id, title, complete },
    task,
  } = props;


  const onDelete = () => {
    deleteTask(id);
  };

  return (
    <List key={id}>
      <ListItem dense>
        <ListItemIcon></ListItemIcon>
        <ListItemText primary={title} />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={onEdit}
          ></IconButton>
          <IconButton edge="end" aria-label="delete" onClick={onDelete}>
            <Delete />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
};

export default TaskItem;
