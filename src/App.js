import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather />

        <p classname="githubLink">
          <a
            href="https://github.com/AnnaLSutherland/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            OpenSource code
          </a>
          by Anna Sutherland
        </p>
      </header>
    </div>
  );
}
