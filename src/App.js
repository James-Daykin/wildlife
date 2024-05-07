import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import WorldMap from './WorldMap';

ReactDOM.render(
  <Provider store={store}>
    <h2>heyy</h2><WorldMap></WorldMap>
    <App />
  </Provider>,
  document.getElementById('root')
);


export default App;
