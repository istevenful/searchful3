
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Search from './Search';
function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route exact path="/" element={<Search />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
