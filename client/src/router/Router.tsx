import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HostPage from '../views/HostPage';
import AskPage from '../views/AskPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/host' component={HostPage}/>
        <Route path='/ask' component={AskPage}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;