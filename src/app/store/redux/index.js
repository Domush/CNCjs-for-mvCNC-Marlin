
import { createStore, applyMiddleware, compose } from 'redux';
import { END } from 'redux-saga';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import mainReducer from 'app/reducers';
import sagaMiddleware from './saga';

const env = process.env.NODE_ENV;

let enhancer;

const configureStore = (preloadedState) => {
    if (env === 'production') {
        enhancer = applyMiddleware(thunk, sagaMiddleware);
    } else {
        const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        enhancer = composeEnhancers(
            applyMiddleware(thunk, sagaMiddleware, createLogger({ collapsed: true })),
        );
    }

    const store = createStore(mainReducer, preloadedState, enhancer);
    store.close = () => store.dispatch(END);
    store.runSaga = sagaMiddleware.run;
    return store;
};

const store = configureStore();

export default store;
