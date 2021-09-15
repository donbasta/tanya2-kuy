import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HostPage from '../views/HostPage';
import AskPage from '../views/AskPage';
import ManagePage from '../views/ManagePage';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/host' component={HostPage}/>
        <Route path='/ask' component={AskPage}/>
        <Route path="/manage" component={ManagePage}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;