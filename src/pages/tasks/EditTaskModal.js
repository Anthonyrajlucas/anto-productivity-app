import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  TextField,
  Modal,
  Input,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Chip,
} from '@mui/material';

const EditTaskModal = ({ open, onClose, editTask, onSaveEdit, setEditTask, priorities, categories,states }) => {

  const handleSaveClick = () => {
    onSaveEdit(editTask); 
  };

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
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => setEditTask({ ...editTask, due_date: e.target.value })}
              />
              <FormControl fullWidth>
                <InputLabel id="priority-label">Priority</InputLabel>
               <Select
                  labelId="priority-label"
                  id="priority"
                  value={editTask?.priority || ''}
                  onChange={(e) => setEditTask({ ...editTask, priority: e.target.value })}
                >
                  {priorities.map((priority) => (
                    <MenuItem key={priority.id} value={priority.id}>
                      {priority.name}
                    </MenuItem>
                  ))}
                </Select>
                </FormControl>
                <FormControl fullWidth>
                <InputLabel id="category-label">Category</InputLabel>
                <Select
                label="Category"
                labelId="category-label"
                id="category"
                value={editTask?.category || ''}
                onChange={(e) => setEditTask({ ...editTask, category: e.target.value })}
              >
                {categories.map((category) => (
                  <MenuItem key={category.id} value={category.id}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
              </FormControl>
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
              <FormControl fullWidth>
                <InputLabel id="assigned-to-label">Assigned To</InputLabel>
                <Select
                  labelId="assigned-to-label"
                  id="assigned-to"
                  multiple
                  value={editTask?.assigned.map(user => user) || []}
                  onChange={(e) => setEditTask({ ...editTask, assigned: e.target.value.map(user => user) })}
                  renderValue={(selected) => (
                    <div>
                      {selected.map((value) => (
                        <Chip key={value} label={`User ${value}`} style={{ margin: '2px' }} />
                      ))}
                    </div>
                  )}
                >
               {editTask?.assigned && editTask?.assigned.map((user) => (
               <MenuItem key={user} value={user}>
               {user}
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

export default EditTaskModal;
