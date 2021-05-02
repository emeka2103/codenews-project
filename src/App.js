import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

//Pages Importing

import TopHeadlines from "./Pages/TopHeadline";
import AllNews from "./Pages/AllNews";
import Search from "./Pages/Search";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route path="/" exact>
            <TopHeadlines />
          </Route>
          <Route path="/all">
            <AllNews />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
