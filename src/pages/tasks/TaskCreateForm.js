import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import {  Form, Button, Col, Modal } from "react-bootstrap";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import axios from 'axios';


function TaskCreateForm() {
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);  

  const history = useHistory();
  const [task, setTask] = useState({
    title: "",
    description: "",
    due_date: "",
    priority: "",
    category: "",
    state: "",
  });

  const {  title,
    description,
    due_date,
    priority,
    category,
    state } = task;

  const [dropdownData, setDropdownData] = useState({
    priorities: [],
    categories: [],
    states: [],
  });

 
  useEffect(() => {
    axios
      .get("/profiles/")
      .then((response) => setUsers(response.data))
      .catch((error) => console.log(error));
  }, []);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [prioritiesResponse, categoriesResponse, statesResponse] = await Promise.all([
          axios.get("/priorities"),
          axios.get("/categories"),
          axios.get("/states"),
        ]);

        setDropdownData({
          priorities: prioritiesResponse.data || [],
          categories: categoriesResponse.data || [],
          states: statesResponse.data || [],
        });
      } catch (err) {
        console.error("Axios Error", err);
        console.error("Response Data", err.response?.data);
      }
    };
    fetchData();
  }, []);

  const handleChange = (event) => {
    setTask({
        ...task,
        [event.target.name]: event.target.value,
      });
  };

  const handleDropdownChange = (event, dropdownType) => {
    const selectedId = event.target.value;
    setTask({
      ...task,
      [dropdownType]: selectedId,
    });
  };
  

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("due_date", due_date);
    formData.append("priority", priority);
    formData.append("category", category);
    formData.append("state", state);
  try {
    const { data } = await axios.post("/tasks/", formData);
    history.push(`/tasks/${data.id}`);
    setShowModal(true);
    console.log("New Task Created:", data);
  } catch (error) {
    console.log(error);
      if (error.response?.status !== 401) {
        setErrors(error.response?.data);
      }
  } 
  };

  const handleCloseModal = () => {
    setShowModal(false);
    history.push(`/tasks/`);  
  };

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          name="description"
          value={description}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Due Date</Form.Label>
        <Form.Control
          type="date"
          name="due_date"
          value={due_date}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Priority</Form.Label>
        <Form.Control
          as="select"
          name="priority"
          value={priority}
          onChange={(event) => handleDropdownChange(event, 'priority')}
        >
          <option value="">Select Priority</option>
          {dropdownData.priorities.map((priorityOption) => (
            <option key={priorityOption.id} value={priorityOption.id}>
              {priorityOption.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Category</Form.Label>
        <Form.Control
          as="select"
          name="category"
          value={category}
          onChange={(event) => handleDropdownChange(event, 'category')}
        >
          <option value="">Select Category</option>
          {dropdownData.categories.map((categoryOption) => (
            <option key={categoryOption.id} value={categoryOption.id}>
              {categoryOption.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>State</Form.Label>
        <Form.Control
          as="select"
          name="state"
          value={state}
          onChange={(event) => handleDropdownChange(event, 'state')}
        >
          <option value="">Select State</option>
          {dropdownData.states.map((stateOption) => (
            <option key={stateOption.id} value={stateOption.id}>
              {stateOption.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        create
      </Button>
      <Button
        className={`${btnStyles.Button}`}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
    </div>
  );

  return (
<Form onSubmit={handleSubmit}>
      {showModal && (
        <Modal show={showModal} onHide={handleCloseModal} centered={true}>
          <Modal.Header closeButton>
            <Modal.Title>Success</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Task created successfully!
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
      <div className={appStyles.CenterAlignForm}>
        <Col md={7} lg={8}>
          <div
            className={`${appStyles.Content} ${appStyles.TextAlignCenter} d-flex flex-column justify-content-center`}
          >
            <h3>Create Task</h3>
            <div className={appStyles.Content}>
              {textFields}
            </div>
          </div>
        </Col>
      </div>
    </Form>
     );
}

export default TaskCreateForm;