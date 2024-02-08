import "./App.css";
import Header from "./components/Header/Header";
import Herosection from "./components/Home/Herosection";
import Home from "./components/Home/Home";

function App() {
  return (
    <div >
      <div className="App">
        <Header></Header>
        <Herosection></Herosection>
      </div>
      <Home></Home>
    </div>
  );
}

export default App;
