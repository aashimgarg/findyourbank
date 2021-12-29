import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainContainer from "./components/MainContainer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
return (
  <BrowserRouter>
    <div className="App">
      <MainContainer />
    </div>
  </BrowserRouter>
);
}

export default App;