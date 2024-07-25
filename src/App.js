import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import { useState, useEffect } from "react";

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    console.log("inside app.js useeffect");
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      console.log("Inside App.js making setIsAuthenticated as true");
      setIsAuthenticated(true);
    }
  }, []);
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route 
            path="/"
            element={isAuthenticated ? <Navigate to="/dashboard"/> : <LoginPage isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>}
          />
          <Route
            path="/dashboard"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;