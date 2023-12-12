import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskCard from './TaskCard';
import { 
  Box
} from '@mui/material';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [errors, setErrors] = useState({});
  const [editTask, setEditTask] = useState(null); 
  const [isModalOpen, setIsModalOpen] = useState(false);   
  const [deleteTask, setDeleteTask] = useState(null);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);  

  useEffect(() =>{
    // Fetch tasks using axios
    const fetchData = async () => {
      try {
        const response = await axios.get("/tasks");
        setTasks(response.data);
      } catch (err) {
        console.error("Axios Error", err);
        console.error("Response Data", err.response?.data);
        setErrors(err.response?.data || {});
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

  const handleDeleteClick = (task) => {
    setDeleteTask(task);
    setDeleteConfirmation(true);
  };

  return (
    <Box textAlign="center" bgcolor="lightblue" p={5} borderRadius={2}>
      <h2>Task List</h2>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          Title={task.title}
          Task={task}
          onEditClick={() => handleEditClick(task)}
          onDeleteClick={handleDeleteClick}
        />
      ))}
    </Box>
);
};
export default TaskList;
