import Search from "./components/Search";
import "./App.css";
import CurrentWeather from "./components/current-weather/current-weather";

function App() {

  const handleSearchChange = (searchData) => {
    console.log(searchData);
  }
  return (
    <div className="container">
        <Search onChange={handleSearchChange}/>
        <CurrentWeather/>
        <p>You are a doggo</p>
    </div>
  );
}

export default App;
