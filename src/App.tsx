import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./layouts/Header";
import LivrePage from "./pages/LivrePage";
import ChoixLivre from "./pages/ChoixLivre";
import Home from "./containers/Home";
import Lecture from "./pages/Lecture sur place";
import Emprunts from "./pages/Emprunts";

const App = () => {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route path="/livres">
            <LivrePage />
          </Route>
          <Route path="/decouvrir">
            <ChoixLivre />
          </Route>
          <Route path="/lecture">
            <Lecture />
          </Route>
          <Route path="/emprunts">
            <Emprunts />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
