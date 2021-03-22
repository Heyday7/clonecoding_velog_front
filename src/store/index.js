import CreateSagaMiddleWare, { END } from 'redux-saga';
import {applyMiddleware, compose, createStore} from 'redux';
import reducer from '../reducers'

const saga = CreateSagaMiddleWare();

export function configureStore(initialState) {
  const store = createStore(
    reducer,
    initialState,
    compose(applyMiddleware(saga),
    )
  );

  store.runSaga = saga.run;
  store.close = () => store.dispatch(END);

  return store;
}