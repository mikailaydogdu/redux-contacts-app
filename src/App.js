import Home from './components/Home';
import Edit from './components/Edit'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Edit />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
