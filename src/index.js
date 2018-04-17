import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Cards from './components/Cards';
import rootReducer from './reducers';
import './styles/base.scss';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <App>
          <Route path="*" component={Cards} />
        </App>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);

module.hot.accept();
