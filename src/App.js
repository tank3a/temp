import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return <Router>
    <Switch>
      <Route path="/movie/:id">
        <Detail />
      </Route>
      <Route path={`${process.env.PUBLIC_URL}/`} element={Home} >
        <Home />
      </Route>
    </Switch>
  </Router>;
}

export default App;
