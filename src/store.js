import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { searchReducer } from './reducers/searchReducer';

export const store = createStore(searchReducer, composeWithDevTools(applyMiddleware(thunk)));
