import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmailList from "./components/EmailList";
import EmailView from "./components/EmailView";
import ComposeEmail from "./components/ComposeEmail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmailList />} />
        <Route path="/email/:id" element={<EmailView />} />
        <Route path="/compose" element={<ComposeEmail />} />
      </Routes>
    </Router>
  );
}

export default App;
