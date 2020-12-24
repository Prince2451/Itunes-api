import { createReducer } from "reduxsauce";
import Types from "../actions/actionTypes";

const INITIAL_STATE = {
  error: {
    hasErr: false,
    errMsg: "",
  },
  searchResult: [],
  isFetchingData: false,
};

const success = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.SEARCH_SUCCESS:
      return {
        ...state,
        searchResult: [...action.data],
        isFetchingData: false,
      };
    default:
      return {
        ...state,
      };
  }
};
const failure = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.SEARCH_FAILURE:
      return {
        ...state,
        error: {
          hasErr: true,
          errMsg: action.errMsg,
        },
        isFetchingData: false,
      };
    default:
      return {
        ...state,
        isFetchingData: false,
      };
  }
};
const loading = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.SEARCH_REQUESTS:
      return {
        ...state,
        isFetchingData: true,
      };
    default:
      return {
        ...state,
      };
  }
};

const error = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.REMOVE_ERROR:
      return {
        ...state,
        error: {
          hasErr: false,
          errMsg: "",
        },
      };
    default:
      return {
        ...state,
      };
  }
};

const HANDLERS = {
  [Types.SEARCH_SUCCESS]: success,
  [Types.SEARCH_FAILURE]: failure,
  [Types.SEARCH_REQUESTS]: loading,
  [Types.REMOVE_ERROR]: error,
};

export default createReducer(INITIAL_STATE, HANDLERS);
