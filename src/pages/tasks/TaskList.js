import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskCard from './TaskCard';
import EditTaskModal from "./EditTaskModal";
import ConfirmDeleteDialog from './ConfirmDeleteDialog';
import { Box } from '@mui/material';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [dropdownData, setDropdownData] = useState({
    priorities: [],
    categories: [],
    states: [],
    profiles: [],
  });
  const [errors, setErrors] = useState({});
  const [editTask, setEditTask] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteTask, setDeleteTask] = useState(null);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/tasks");
        setTasks(response.data.results || []);
      } catch (err) {
        console.error("Axios Error", err);
        console.error("Response Data", err.response?.data);
        setErrors(err.response?.data || {});
      }
    };
    fetchData();
  }, []);

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

  const handleAssignToMe = (task) => {
   
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
    } catch (error) {
      console.error("Error updating task:", error);
    }
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
    <Box textAlign="center" bgcolor="lightblue" p={5} borderRadius={2}>
      <h2>Task List</h2>
      {Array.isArray(tasks) && tasks.map((task) => (
        task && task.id ? (
          <TaskCard
            key={task.id}
            task={task}
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
    </Box>
  );
};

export default TaskList;
