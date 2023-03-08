import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Weather Search Engine</h1>
        <Weather />
        <br />
        <small className="footer">
          <a
            href="https://https://github.com/ogeoginni/My-React-Weather-App"
            target="_blank"
            rel="noreferrer"
          >
            Open-sourced
          </a>
          | by Ogechukwu Oginni
        </small>
      </header>
    </div>
  );
}

export default App;
