import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  TextField,
  Modal,
} from '@mui/material';

const EditTaskModal = ({ open, onClose, editTask, onSaveEdit, setEditTask }) => {

  return (
    <Modal open={open} onClose={onClose}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <Card>
          <CardContent>
            <Typography variant="h6">Edit Task</Typography>
            <form>
              <TextField
                label="Title"
                variant="outlined"
                value={editTask?.title || ''}
                fullWidth
                onChange={(e) => setEditTask({ ...editTask, title: e.target.value })}
              />
              <TextField
                label="Description"
                variant="outlined"
                value={editTask?.description || ''}
                fullWidth
                onChange={(e) => setEditTask({ ...editTask, description: e.target.value })}
              />
              <TextField
                label="Due Date"
                variant="outlined"
                value={editTask?.due_date || ''}
                fullWidth
                onChange={(e) => setEditTask({ ...editTask, due_date: e.target.value })}
              />
              <TextField
                label="Priority"
                variant="outlined"
                value={editTask?.priority || ''}
                fullWidth
                onChange={(e) => setEditTask({ ...editTask, priority: e.target.value })}
              />
              <TextField
                label="Category"
                variant="outlined"
                value={editTask?.category || ''}
                fullWidth
                onChange={(e) => setEditTask({ ...editTask, category: e.target.value })}
              />
              <TextField
                label="State"
                variant="outlined"
                value={editTask?.state || ''}
                fullWidth
                onChange={(e) => setEditTask({ ...editTask, state: e.target.value })}
              />
            </form>
          </CardContent>
          <CardActions>
            <Button onClick={onSaveEdit} style={{ backgroundColor: 'green', color: 'white' }}>
              Save
            </Button>
            <Button onClick={onClose} style={{ backgroundColor: 'red', color: 'white' }}>
              Cancel
            </Button>
          </CardActions>
        </Card>
      </div>
    </Modal>
  );
};

export default EditTaskModal;
