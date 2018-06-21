import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// import gameOverview from '../App/Game/reducer';

export default combineReducers({
  // gameOverview,
  router: routerReducer,
});

