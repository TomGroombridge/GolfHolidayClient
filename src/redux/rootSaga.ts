import {
  all,
} from 'redux-saga/effects';

// import { gameListeners } from '../App/Game/sagas';


export default function* rootSaga() {
  yield all([
    // gameListeners(),
  ]);
}
