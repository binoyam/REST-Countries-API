import Nav from "./components/Nav";
import countryData from "./data.json";
import ArrowDown from "./images/angle-down-solid.svg";
function App() {
  return (
    <div className="app">
      <Nav />
      <form>
        <input type="text" placeholder="Search for a country..." />
        <div className="select-options-div">
          <div className="select-region">
            Filter by Region
            <button>
              <img className="arrow" src={ArrowDown} alt="arrowdown" />
            </button>
          </div>
          <ul className="options">
            <li>Africa</li>
            <li>America</li>
            <li>Asia</li>
            <li>Europe</li>
            <li>Ocenia</li>
          </ul>
        </div>
      </form>
    </div>
  );
}

export default App;
