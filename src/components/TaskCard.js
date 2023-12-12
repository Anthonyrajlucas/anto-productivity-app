import React, { } from 'react';
import { Card, CardContent, CardActions, Button, Typography } from '@mui/material';

const TaskCard = ({ task, onEditClick, onDeleteClick }) => {

  return (
    <Card key={task.id}>
      <CardContent>
        <Typography variant="h6">{task.title}</Typography>
      </CardContent>
      <CardActions style={{ justifyContent: 'center' }}>
        <Button onClick={() => onEditClick(task)} style={{ backgroundColor: 'green', color: 'white' }}>
          Edit
        </Button>
        <Button onClick={() => onDeleteClick(task)} style={{ backgroundColor: 'red', color: 'white' }}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default TaskCard;