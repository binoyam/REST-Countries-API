import Countries from "./components/Countries";
import Nav from "./components/Nav";
import Search from "./components/Search";
function App() {
  return (
    <div className="app">
      <Nav />
      <Search />
     <Countries />
    </div>
  );
}

export default App;
