import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Countries from "./components/Countries";
import CountryInfo from "./components/CountryInfo";

function App() {
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/country/:countryName" element={<CountryInfo />} />
      </Routes>
    </div>
  );
}

export default App;
