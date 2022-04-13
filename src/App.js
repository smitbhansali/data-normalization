import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Zscore from './components/Zscore';
import Minmax from './components/Minmax';
import Decimal from './components/Decimal';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/zscore" element={<Zscore />} />
          <Route exact path="/minmax" element={<Minmax />} />
          <Route exact path='/decimal' element={<Decimal />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
