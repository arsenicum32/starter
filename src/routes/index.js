import React from 'react';
import { Route , Router, IndexRoute } from 'react-router';
import Main from '../containers/main';
import Test from '../components/test';
import notFound from '../components/notFound';

export default () => (
  <Router>
    <Route path="/" >
      <IndexRoute component={Main} />
      <Route path="route" component={()=>(<div><h1>route</h1></div>)} />
      <Route path="test" component={()=>(<div><Main/><Test /></div>)} />
    </Route>
    <Route path="*" component={notFound} />
  </Router>
)
