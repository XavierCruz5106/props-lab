import logo from "./logo.svg";
import "./App.css";
import Greeting from "./components/Greeting";
import Book from "./components/Book";

const App = () => {
  return (
    <div className="App">
      <Book title="The Black Mamba" author="Jim" year="3302" />
    </div>
  );
};

export default App;
