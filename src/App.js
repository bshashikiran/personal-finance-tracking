import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";


function App() {

  return (
    <div className="App">
      {
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
          </Routes>
        </Router>
      }

    </div>
  );
}

export default App;