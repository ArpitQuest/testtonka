import { put, call } from "redux-saga/effects";
import { catchHandler } from "../helperSaga";
import {
  adminLoginStart,
  adminloginSuccess,
  adminLoginFail,
} from "../../reducers/authReducer";
import axiosMain from "../../../http/axios/axios_main";

function* setItemToLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

//===============================adminLoginSaga============================//
export function* adminLoginSaga(action) {
  yield put(adminLoginStart());
  const { payload, toast, navigate, setDisable, setError } = action.payload;
  try {
    const response = yield axiosMain.post(`/admin-login`, payload);

    if (response?.data.status) {
      yield call(setItemToLocalStorage, "isAdminAuthenticated", true);
      yield call(
        setItemToLocalStorage,
        "admintoken",
        JSON.stringify(response?.data?.data?.token)
      );

      yield call(
        setItemToLocalStorage,
        "admindata",
        JSON.stringify(response?.data?.data)
      );

      yield put(adminloginSuccess(response.data.data));

      sessionStorage.setItem("jwt", "enable");
      toast.success(response.data.message);
      setTimeout(() => {
        window.location.href ="/admin-dashboard"
      }, 3000);
    } else {
      setDisable(false);
      setError(response.data.message);
      yield put(adminLoginFail(response.data.message));
    }
  } catch (error) {
    setDisable(false);
    setError(error.response.data.message);
    yield call(catchHandler, error, adminLoginFail);
  }
}
//===============================End Of adminLoginSaga============================//
