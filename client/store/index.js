import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { routerMiddleware as router } from 'react-router-redux';
import reducer from './reducers';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();
const createStoreWithMiddleware = applyMiddleware(thunk, promise, router(history))(createStore);

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
export default createStoreWithMiddleware(reducer, devTools);
