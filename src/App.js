import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import { useState, useEffect } from "react";
import * as FormAxiosService from '../src/api/FormAxiosService';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authenticateToken = async () => {
    const authToken = localStorage.getItem("authToken");
    try {
      const response = await FormAxiosService.authenticateUserToken(authToken);
      console.log("Validating Token...", response);
      if (response && response === true) {
        console.log("Inside true");
        setIsAuthenticated(true);
      } else {
        console.log("Inside false");
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error("Error occured while authenticating auth token : ", error);
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    authenticateToken();
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
            element={isAuthenticated ? <Dashboard setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/" />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;