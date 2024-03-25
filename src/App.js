import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Cartoon from './Cartoon';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cartoon/:cartoon_id" element={<Cartoon />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
