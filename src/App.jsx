import "./style/main.scss";
import Form from "./components/Form";

function App() {
  return (
    <div className="container">
      {/* <ToggleButton onChange={toggleTheme} checked={theme === "dark"} /> */}
      <div className="card">
        <Form />
      </div>
    </div>
  );
}

export default App;
