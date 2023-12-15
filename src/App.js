import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import "./api/axiosDefaults";
import TaskList from "./components/TaskList";
import EditTaskModal from "./pages/tasks/EditTaskModal";

function App() {
  return (
    <div className={styles.App}>
    <NavBar />
    <Container className={styles.Main}>
      <Switch>
        <Route exact path="/" render={() => <h1>Home Page</h1> } />
        <Route exact path="/signin" render={() => <SignInForm />} />
        <Route exact path="/signup" render={() => <SignUpForm />} />
        <Route exact path="/tasklist" render={() => <TaskList/>} />
        <Route exact path="/tasks/create" render={() => <EditTaskModal/>} />
        <Route render={() => <p>Page not found!</p>} />
      </Switch>
    </Container>
  </div>
  );
}

export default App;