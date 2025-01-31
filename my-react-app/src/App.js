import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import SignUpForm from "./components/SignUpForm";
import "./App.css"
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router> {}
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm/>} />

        <Route element={<PrivateRoute />}/>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
