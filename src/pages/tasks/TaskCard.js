import React, { } from 'react';
import { Card, CardContent, Button, Typography,  Chip } from '@mui/material';

const TaskCard = ({ task, onEditClick, onDeleteClick , onAssignedToMeClick , priorities,categories, states, profiles}) => {
  const getDropdownItemName = (id, dropdownItems) => {
    const item = dropdownItems.find((item) => item.id === id);
    return item ? item.name : '';
  };
  const getDropdownUserName = (id, dropdownItems) => {
    const item = dropdownItems.find((item) => item.id === id);
    return item ? item.owner : '';
  };

  return (
    <Card>
      <CardContent>
       <Typography variant="h6">{task.title}</Typography>
        <Typography variant="body1">Description: {task.description}</Typography>
        <Typography variant="body2">Due Date: {task.due_date}</Typography>
        <Typography variant="body2">Priority: {getDropdownItemName(task.priority, priorities)}</Typography>
        <Typography variant="body2">Category: {getDropdownItemName(task.category, categories)}</Typography>
        <Typography variant="body2">State: {getDropdownItemName(task.state, states)}</Typography>
        {/*       
// <Typography variant="body2">Created At: {task.created_at}</Typography>
// <Typography variant="body2">Updated At: {task.updated_at}</Typography>
// <Typography variant="body2">Is Overdue: {task.is_overdue.toString()}</Typography>
         */}

        <Typography variant="body2">Assigned To:
          {task.assigned.map(user => (
            <Chip key={getDropdownUserName(user, profiles)}label={user} style={{ margin: '2px' }} />
          ))}
        </Typography>
        <Button onClick={() => onEditClick(task)} style={{ backgroundColor: 'green', color: 'white' }}>
          Edit</Button>
        <Button onClick={() => onDeleteClick(task)} style={{ backgroundColor: 'red', color: 'white' }}>
          Delete</Button>
          <Button onClick={() => onAssignedToMeClick(task)} style={{ backgroundColor: 'blue', color: 'white' }}>
          Assigned to Me
        </Button>
      </CardContent>
    </Card>
  );
};

export default TaskCard;