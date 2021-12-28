import React from "react";
import Navbar from "./components/Header/Header"
import AllBanks from "./components/AllBanks/AllBanks";
import BankDetails from "./components/BankDetails/BankDetails";
import Favourites from "./components/Favourites/Favourites";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/all-banks">
              <AllBanks />
            </Route>
            <Route exact path="/bank-details/:id">
              <BankDetails />
            </Route>
            <Route exact path="/favourites">
              <Favourites />
            </Route>
            <Route exact path="/"
              render={() => {
                return <Redirect to="/all-banks" />;
              }}
            />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
