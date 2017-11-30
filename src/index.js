import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import promise from 'redux-promise';
import './index.css';
import AppIndex from './components/app_index';
import ShowDetails from './components/details_show';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
  <div>
    <Switch>
      <Route path="/results/:id" component={ShowDetails}/>
      <Route exact path="/" component={AppIndex}/>
    </Switch>
  </div>
</BrowserRouter>
  </Provider>
  , document.querySelector('#root'));
