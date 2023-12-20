import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskCard from './TaskCard';
import EditTaskModal from "./EditTaskModal";
import ConfirmDeleteDialog from './ConfirmDeleteDialog';
import { Box, Button, FormControl, Input, InputAdornment, Typography, Snackbar, Alert ,InputLabel , 
         Select, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import TaskListStyle from "../../styles/TaskList.module.css";
import {
  useCurrentUser,
} from "../../contexts/CurrentUserContext";

function TaskList( { message, filter = "" }) {
  const currentUser = useCurrentUser();
  const [tasks, setTasks] = useState([]);
  const [dropdownData, setDropdownData] = useState({
    priorities: [],
    categories: [],
    states: [],
    profiles: [],
  });

  const [editTask, setEditTask] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteTask, setDeleteTask] = useState(null);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [query, setQuery] = useState("");
  const [notification, setNotification] = useState({ open: false, message: '', type: '' });
  const [selectedCategory, setSelectedCategory] = useState('');


  useEffect(() => {
    const fetchTasks = async () => {
      try {
        let queryURL = `/tasks/?${filter}search=${query}`;
        if (selectedCategory) {
          queryURL += `&category=${selectedCategory}`; 
        }
        const { data } = await axios.get(queryURL);
        setTasks(data.results || []);
      } catch (err) {
       console.error("Axios Error", err);
       console.error("Response Data", err.response?.data);
      }
    };
    const timer = setTimeout(() => {
      fetchTasks();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [filter, query , selectedCategory ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [prioritiesResponse, categoriesResponse, statesResponse, profilesResponse] = await Promise.all([
          axios.get("/priorities"),
          axios.get("/categories"),
          axios.get("/states"),
          axios.get("/profiles"),
        ]);

        setDropdownData({
          priorities: prioritiesResponse.data || [],
          categories: categoriesResponse.data || [],
          states: statesResponse.data || [],
          profiles: profilesResponse.data || [],
        });
      } catch (err) {
        console.error("Axios Error", err);
        console.error("Response Data", err.response?.data);
      }
    };
    fetchData();
  }, []);

  const handleEditClick = (task) => {
    if (task) {
      setEditTask({ ...task });
      setIsModalOpen(true);
    } else {
      console.error('Task data is not available.');
    }
  };

  const handleAssignToMe = async (task)  => {
    try {
      const updatedTask = {  ...task, assigned_to: currentUser.profile_id };
      const response = await axios.put(`/tasks/${task.id}/`, updatedTask);
      setTasks((prevTasks) =>
        prevTasks.map((t) => (t.id === task.id ? response.data : t))
      );
    } catch (error) {
      console.error("Error assigning task:", error);
    }
  };

  const handleDeleteClick = (task) => {
    setDeleteTask(task);
    setDeleteConfirmation(true);
  };

  const handleSaveEdit = async (editedTask) => {
    try {
      console.log("Editing task:", editedTask);

      const response = await axios.put(`/tasks/${editedTask.id}/`, editedTask);
      console.log("Task Updated:", response.data);
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === editedTask.id ? response.data : task
        )
      );
      setIsModalOpen(false);
      setNotification({ open: true, message: 'Task updated successfully!', type: 'success' });
    } catch (error) {
      console.error("Error updating task:", error);
      setNotification({ open: true, message: 'Error updating task!', type: 'error' });
    }
  };

  const handleCloseNotification = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setNotification({ ...notification, open: false });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmDelete = async (deleteTask) => {
    try {
      console.log("Deleting task:", deleteTask);
      const response = await axios.delete(`/tasks/${deleteTask.id}`, deleteTask);
      console.log("Task Deleted:", response.data);
  
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === deleteTask.id ? response.data : task
        )
      );
      setDeleteConfirmation(false);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleCancelDelete = () => {
    setDeleteConfirmation(false);
  };

  return (
    <Box className={TaskListStyle.taskListRoot}>
    <Typography variant="h4" className={TaskListStyle.taskListTitle}>
      Task List
    </Typography>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
      <FormControl variant="outlined" className={TaskListStyle.searchFormControl}>
        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className={TaskListStyle.searchInput}
          type="text"
          placeholder="Search tasks"
          aria-label="Search bar"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </FormControl>

      <Link to="/tasksCreate" style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="secondary">
          Create Task
        </Button>
      </Link>
    </div>
    <div>
    <FormControl variant="outlined" className={TaskListStyle.dropdownFormControl}>
        <InputLabel>Category</InputLabel>
        <Select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          label="Category"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {dropdownData.categories.map((category) => (
            <MenuItem key={category.id} value={category.id}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      </div>
      {Array.isArray(tasks) && tasks.map((task) => (
        task && task.id ? (
          <TaskCard
            key={task.id}
            task={task}
            isOwner={currentUser && currentUser.profile_id === task.profile_id}
            priorities={dropdownData.priorities}
            categories={dropdownData.categories}
            states={dropdownData.states}
            profiles={dropdownData.profiles}
            onEditClick={() => handleEditClick(task)}
            onDeleteClick={() => handleDeleteClick(task)}
            onAssignedToMeClick={() => handleAssignToMe(task)}
          />
        ) : null
      ))}
      <EditTaskModal
        open={isModalOpen}
        onClose={handleCloseModal}
        editTask={editTask}
        priorities={dropdownData.priorities}
        categories={dropdownData.categories}
        states={dropdownData.states}
        onSaveEdit={handleSaveEdit}
        setEditTask={setEditTask}
      />
      <ConfirmDeleteDialog
        open={deleteConfirmation}
        onClose={handleCancelDelete}
        onConfirmDelete={handleConfirmDelete}
        task={deleteTask}
      />
      <Snackbar open={notification.open} autoHideDuration={6000} onClose={handleCloseNotification}>
  <Alert onClose={handleCloseNotification} severity={notification.type} sx={{ width: '100%' }}>
    {notification.message}
  </Alert>
</Snackbar>
    </Box>
  );
};

export default TaskList;
