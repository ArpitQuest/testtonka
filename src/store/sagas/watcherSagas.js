import { all, takeLatest } from "redux-saga/effects";

// uncomment when actions grow largee
// import * as action from "../reducers/actionLabels/reducerActionLabels";

import {  adminLoginSaga } from "./auth/authSaga";

export function* watchAuthentication() {
  yield all([takeLatest("auth/adminLoginSaga", adminLoginSaga)]);
}
