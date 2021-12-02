import { Route, Switch } from "react-router";
import Wedding from "../pages/Wedding";
import Confraternization from "../pages/Confraternization";
import Graduation from "../pages/Graduation";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/wedding">
        <Wedding/>
      </Route>
      <Route path="/confraternization">
        <Confraternization/>
      </Route>
      <Route path="/graduation">
        <Graduation/>
      </Route>
    </Switch>
  );
};

export default Routes;