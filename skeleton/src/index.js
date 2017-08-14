import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
import { reducer as form } from 'redux-form'
import {
  syncHistoryWithStore,
  routerReducer as routing,
} from 'react-router-redux'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import registerServiceWorker from './registerServiceWorker';
import book from './reducers/book/';
import review from './reducers/review/';
import bookRoutes from './routes/book';
import reviewRoutes from './routes/review';
import HomePage from './HomePage';
import TopBar from './TopBar';
import NotFound from './NotFound';


const store = createStore(
  combineReducers({form, routing, book, review}),
  compose(applyMiddleware(thunk)),
)

const history = syncHistoryWithStore(createBrowserHistory(), store);

ReactDOM.render(
  <Provider store={store}>
      <Router history={history}>
        <div>
          <TopBar/>
          <Switch>
            <Route path="/" component={HomePage} exact={true} strict={true}/>

            {bookRoutes}
            {reviewRoutes}

            { // routing for electron start page
              window.location.pathname.includes('index.html') &&
              <Redirect to="/"/> }

            <Route component={NotFound}/>
          </Switch>
        </div>
      </Router>
  </Provider>,
  document.getElementById('root'),
)
;


registerServiceWorker()
