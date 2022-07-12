import {
  takeEvery,
  takeLatest,
  takeLeading,
  select,
  put,
  call, // выполняет блокирующий эффект - выполняет переданную в нее функцию
} from '@redux-saga/core/effects';
import { INCREMENT, GET_LATEST_NEWS } from '../constants';
import { getLatestNews } from '../../api';
import { setLatestNews } from '../actions/actionCreator';

// init delay to see the difference between takeEvery & takeLatest & takeLeading
const delay = (time) =>
  new Promise((resolve, request) => {
    setTimeout(resolve, time * 1000);
  });

//all bisnes-logic will be in the worker - requests logic,work with browser API, async actions
export function* handleLatestNews() {
  //workerSaga
  //   const count = yield select(({ counter }) => counter.count);
  //   yield delay(2);
  //   console.log(`Request ${count}`);
  // if in watchClickSaga we have takeEvery after several clicks we will have several logs (3 ckick = 3 logs after 2 seconds)
  // if in watchClickSaga we have takeLatest after several clicks we will have one log (3 ckick = 1 log after 2 seconds)
  const data = yield call(getLatestNews); // + сюда можно передавать аргументы (допустим для query, чтоб искать по ключевому слову)
  yield put(setLatestNews(data.hits));
}

//watching after all actions in the app
export function* watchClickSaga() {
  //   yield takeLatest(INCREMENT, workerSaga);
  //   yield takeLeading(INCREMENT, workerSaga);
  // yield takeEvery(INCREMENT, workerSaga);
  yield takeEvery(GET_LATEST_NEWS, handleLatestNews);
}

// + effects  - function-helpers which create objects which contain the instructions for some actions
// this actions will be executed directly inside the saga

export default function* rootSaga() {
  yield watchClickSaga();
}

//  - выполняется один раз, после первого
//takeEvery(action, callback)  - выполнять каждый раз когда отлавливается click
//takeLatest - осуществляет вызов полько последней переданной функции
//takeLeading - вызывает лишь первую сагу, автоматически отменив вызов всех последующих, если первая находится ещё в процессе выполнения

//select - эффект который позволяет удобно взаимодействовать со стором непостредственно в саге; select принимает функцию, в которую передается state
