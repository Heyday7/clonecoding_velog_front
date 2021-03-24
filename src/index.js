import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rootSaga from './sagas'
import { Provider } from 'react-redux'
import { configureStore } from './store'
import axios from 'axios'
import { BrowserRouter } from 'react-router-dom';


axios.defaults.baseURL='http://127.0.0.1:8000'
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';


const store = configureStore();
store.runSaga(rootSaga)

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

store.subscribe(render);
render()
