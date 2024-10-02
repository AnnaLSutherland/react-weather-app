import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Aberdeen" />
        <footer className="githubLink">
          This project was coded by Anna Sutherland, and is{" "}
          <a
            href="https://github.com/AnnaLSutherland/react-weather-app"
            target="_blank"
            rel="noreferrer"
            className="github-link"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
