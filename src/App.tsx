import SearchBar from "./components/SearchBar/SearchBar";
import City from "./components/City/City";
import AdditionalDays from "./components/AdditionalDays/AdditionalDays";

import "./App.css";

function App() {
  return (
    <div className="app">
      <SearchBar />
      <City />
      <AdditionalDays />
    </div>
  );
}

export default App;
