import "./App.css";
import NavBar from "./components/NavBar";
import TextBox from "./components/TextBox";

function App() {
  return (
    <>
      <NavBar name="Text utility" />
      <div className="container">
        <TextBox />
      </div>
    </>
  );
}

export default App;
