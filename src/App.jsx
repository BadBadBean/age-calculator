import "./style/main.scss";
import Form from "./components/Form";
import Toggle from "./components/Toggle";

function App() {
  return (
    <>
    <Toggle />
    <div className="container">
      <div className="card">
        <Form />
      </div>
    </div>
    </>
  );
}

export default App;
