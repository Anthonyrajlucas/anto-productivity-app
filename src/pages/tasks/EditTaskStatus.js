import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  TextField,
  Modal,
  Select,
  MenuItem,
  InputLabel,
  FormControl
} from '@mui/material';

const EditTaskStatus = ({ open, onClose, editTask, onSaveEdit, setEditTask,states }) => {

  const handleSaveClick = () => {
    onSaveEdit(editTask); 
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <Card>
          <CardContent>
            <Typography variant="h6">Edit Task Status</Typography>
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
              <FormControl fullWidth>
                <InputLabel id="state-label">State</InputLabel>
              <Select
              labelId="state-label"
              id="state"
              value={editTask?.state || ''}
              onChange={(e) => setEditTask({ ...editTask, state: e.target.value })}
            >
              {states.map((state) => (
                <MenuItem key={state.id} value={state.id}>
                  {state.name}
                </MenuItem>
              ))}
            </Select>
            </FormControl>
            </form>
          </CardContent>
          <CardActions>
            <Button onClick={handleSaveClick} style={{ backgroundColor: 'green', color: 'white' }}>
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

export default EditTaskStatus;
