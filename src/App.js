
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Search from './Search';
import Recommendations from './Recommendations';
function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route exact path="/" element={<Search />} />
            <Route exact path="/recommendations" element={<Recommendations />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
