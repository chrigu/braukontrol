// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import AlertPage from './containers/AlertPage';
import SettingsPage from './containers/SettingsPage';
import RecipesPage from './containers/RecipesPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="alerts" component={AlertPage} />
    <Route path="recipes" component={RecipesPage} />
    <Route path="settings" component={SettingsPage} />
  </Route>
);
