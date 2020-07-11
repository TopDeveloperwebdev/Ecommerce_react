import {
  THIRD_STEP_SHOW_ERROR,
  THIRD_STEP_NEXT_STEP,
  THIRD_STEP_CHANGE_INPUT,
  THIRD_STEP_SHOW_PROGRESSSBAR,
  THIRD_STEP_HIDE_PROGRESSSBAR,
} from './constants';

export const thirdStepFormInitialState = {
  text: '',
  errorMessage: '',
  completed: false,
  showProgressBar: false,
};

const thirdStepFormReducer = (state = thirdStepFormInitialState, action) => {
  switch (action.type) {
    case THIRD_STEP_SHOW_ERROR:
      return {
        ...state,
        errorMessage: action.message,
      };
    case THIRD_STEP_NEXT_STEP:
      return {
        ...state,
        completed: true,
      };
    case THIRD_STEP_CHANGE_INPUT:
      return {
        ...state,
        text: action.payload.value,
      };
    case THIRD_STEP_SHOW_PROGRESSSBAR:
      return {
        ...state,
        showProgressBar: true,
      };
    case THIRD_STEP_HIDE_PROGRESSSBAR:
      return {
        ...state,
        showProgressBar: false,
      };
    default:
      return state;
  }
};

export default thirdStepFormReducer;
