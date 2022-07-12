import { combineReducers } from 'redux';


import counterReducer from '../reducer/index';


const rootReducer = combineReducers({

    counter: counterReducer,

});

export default rootReducer;