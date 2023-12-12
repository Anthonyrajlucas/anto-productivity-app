import React, { } from 'react';
import { Card, CardContent, CardActions, Button, Typography } from '@mui/material';

const TaskCard = ({ task, onEditClick, onDeleteClick }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{task.title}</Typography>
        <Typography variant="body1">Description: {task.description}</Typography>
        <Typography variant="body2">Due Date: {task.due_date}</Typography>
        <Typography variant="body2">Priority: {task.priority}</Typography>
        <Typography variant="body2">Category: {task.category}</Typography>
        <Typography variant="body2">State: {task.state}</Typography>
        <Typography variant="body2">Created At: {task.created_at}</Typography>
        <Typography variant="body2">Updated At: {task.updated_at}</Typography>
        <Typography variant="body2">Is Overdue: {task.is_overdue.toString()}</Typography>
        <Button onClick={() => onEditClick(task)} style={{ backgroundColor: 'green', color: 'white' }}>
          Edit</Button>
        <Button onClick={() => onDeleteClick(task)} style={{ backgroundColor: 'red', color: 'white' }}>
          Delete</Button>
      </CardContent>
    </Card>
  );
};

export default TaskCard;