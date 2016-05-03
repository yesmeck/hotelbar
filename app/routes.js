import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import ListPage from './containers/ListPage';
import OutputPage from './containers/OutputPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ListPage} />
    <Route path="/output/:id" component={OutputPage} />
  </Route>
);
