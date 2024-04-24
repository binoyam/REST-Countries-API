import './index.css';
import Header from './components/Header';
import SearchFilter from './components/SearchFilter';
import AllCountries from './components/AllCountries';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchFilter />
      <Routes>
        <Route path="/" element={<AllCountries />} />
        <Route path="/country/:name" element={<Country />} />
      </Routes>
    </div>
  );
}

export default App;
