import "./App.css";
import ClassComp from "./components/ClassComp";
import FuncComp from "./components/FuncComp";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ClassComp />
        <FuncComp />
      </header>
    </div>
  );
}
export default App;
