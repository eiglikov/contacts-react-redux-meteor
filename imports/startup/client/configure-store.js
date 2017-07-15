import { createStore, applyMiddleware, compose } from 'redux'
import createLogger from 'redux-logger'
import reducers from './reducers/'
import thunk from 'redux-thunk'
import asteroid from './configure-asteroid'
import initializeListeners from './actions/asteroid'
import {persistStore, autoRehydrate} from 'redux-persist'
import DevTools from './components/DevTools';

let persistor;
const configureStore = () => {
  const middlewares = [thunk.withExtraArgument(asteroid)]

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger())
  }

  const enhancers = [
    applyMiddleware(...middlewares),
    autoRehydrate(),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ];

  const store = createStore(
    reducers,
    compose(...enhancers)
  )
  persistor = persistStore(store, {}, (a, b) => {
    console.log('Redux-Persist loaded state');
  })
  initializeListeners(store.dispatch, asteroid)

  return store;
}



export default configureStore;

export const getPersistor = () => {
  // console.log(persistor);

  return persistor;
}
