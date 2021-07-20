import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import HomePage from "./pages/home/home.page";

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
