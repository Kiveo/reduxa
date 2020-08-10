import React from 'react';
import CounterContainer from './containers/CounterContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/">
              <CounterContainer />
            </Route>
          </Switch>
        </div >
      </Router>
    </Provider>
  );
}

export default App;
