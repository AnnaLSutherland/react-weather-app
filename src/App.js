import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather city="Aberdeen" />
      </header>
    </div>
  );
}
