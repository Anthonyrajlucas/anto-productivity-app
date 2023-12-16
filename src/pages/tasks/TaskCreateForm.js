import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import styles from "../../styles/EditTaskModal.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import axios from 'axios';

function TaskCreateForm() {

  const [task, setTask] = useState({
    title: "",
    description: "",
    due_date: "",
    priority: "",
    category: "",
    state: "",
  });

  const [dropdownData, setDropdownData] = useState({
    priorities: [],
    categories: [],
    states: [],
  });

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

  const {  title,
           description,
           due_date,
           priority,
           category,
           state } = task;

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
  try {
    // Make a POST request to create a new task
    const response = await axios.post("/tasks", task);
    console.log("New Task Created:", response.data);
    setTask((prevTasks) => [...prevTasks, response.data]); 
    setTask({
      title: "",
      description: "",
      due_date: "",
      priority: "",
      category: "",
      state: "",
    });
  } catch (error) {
    console.error("Error creating task:", error);
  }
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
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => {}}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        create
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
          {textFields}
          </Container>
        </Col>

      </Row>
    </Form>
  );
}

export default TaskCreateForm;