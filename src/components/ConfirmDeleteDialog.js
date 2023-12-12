import React, { } from 'react';
import { 
  Button,
  Dialog, 
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';

const ConfirmDeleteDialog = ({ open, onClose, onConfirmDelete, task }) => {
    return (
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this task?
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} style={{ backgroundColor: 'red', color: 'white' }}>
            Cancel
          </Button>
          <Button onClick={() => onConfirmDelete(task)} style={{ backgroundColor: 'green', color: 'white' }}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  export default ConfirmDeleteDialog;