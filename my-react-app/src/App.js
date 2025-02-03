import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import LoginForm from "./components/LoginForm";
import TodoList from "./components/Dashboard";
import SignUpForm from "./components/SignUpForm";
import "./App.css"
import PrivateRoute from "./components/PrivateRoute";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm/>} />
        <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<TodoList />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
