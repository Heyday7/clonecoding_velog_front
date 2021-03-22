import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import rootSaga from './sagas'
import { Provider } from 'react-redux'
import { configureStore } from './store'


const store = configureStore();
store.runSaga(rootSaga)

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

store.subscribe(render);
render()


reportWebVitals();
