import { Provider } from "react-redux";
import "./App.css"; // Assuming you have an App.css file for styles
import Grid from "./Grid";
import { store } from "./store";
import NavBar from "./NavBar";

function App() {


  return (
    <>
      <NavBar />
      <Grid />
    </>

  );
}

export default App;
