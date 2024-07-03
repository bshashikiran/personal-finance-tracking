import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css"
import NavigationBar from "./layout/NavigationBar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Dashboard/>
    </div>
  );
}

export default App;
