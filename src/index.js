import React from 'react';
import ReactDOM from 'react-dom';


import App from './App';

// _________________________________________________________
import { Provider } from 'react-redux' ;
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
//___________________________________________________________

import rootReducers from './reducers/root' ;

const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(thunk)
  )
)

ReactDOM.render(
    <>
      <Provider store={store}>
        <App />
      </Provider>
    </>,
  document.getElementById('root')
);