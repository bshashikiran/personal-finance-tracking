import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="App">
      {
        isAuthenticated ? (<Dashboard />) : (<LoginPage setIsAuthenticated={setIsAuthenticated} />)
      }
    </div>
  );
}

export default App;
