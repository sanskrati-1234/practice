import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Task from "./Task";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Task />}></Route>
        <Route
          path="/aaa"
          element={<Navigate to="https://google.com" />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
