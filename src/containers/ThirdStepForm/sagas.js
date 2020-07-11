import { takeLatest, call, put, select } from 'redux-saga/effects';
import { checkIt } from 'api';

import { COMPOSE_NEXT_STEP } from 'containers/ComposeAllForms/constants';
import {
  THIRD_STEP_CHECK_TEXT,
  THIRD_STEP_SHOW_ERROR,
  THIRD_STEP_NEXT_STEP,
  THIRD_STEP_SHOW_PROGRESSSBAR,
  THIRD_STEP_HIDE_PROGRESSSBAR,
} from './constants';

function* fetchCheckBox(action) {
  yield put({ type: THIRD_STEP_SHOW_PROGRESSSBAR });
  try {
    yield call(checkIt, action.payload.value);
    yield put({ type: THIRD_STEP_NEXT_STEP });

    const completed = yield select(({ thirdStepForm }) => thirdStepForm.completed);

    if (completed) {
      yield put({ type: COMPOSE_NEXT_STEP });
    }
  } catch (e) {
    yield put({ type: THIRD_STEP_SHOW_ERROR, message: e.message });
    yield put({ type: THIRD_STEP_HIDE_PROGRESSSBAR });
  }
}

const thirdStepSaga = [
  takeLatest(THIRD_STEP_CHECK_TEXT, fetchCheckBox),
];

export default thirdStepSaga;
