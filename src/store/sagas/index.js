import { put, takeEvery, call } from "redux-saga/effects";
import Creators from "../actions/actionCreators";
import Types from "../actions/actionTypes";
import api from "../../apisauce";

function* searchRequest({ value }) {
  try {
    const response = yield call(api.get, "/search", {
      term: value,
    });
    if (response.ok) {
      yield put(Creators.searchSuccess(response.data.results));
    } else {
      throw new Error(response.problem);
    }
  } catch (err) {
    yield put(Creators.searchFailure(err.message.split("_").join(" ")));
  }
}
export default function* rootSaga() {
  yield takeEvery(Types.SEARCH_REQUESTS, searchRequest);
}
