import { all, call, put, takeLatest } from "redux-saga/effects";

import { CATEGORIES_ACTION_TYPE } from "./categories.types";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.util";
import {
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
} from "./categories.action";

export function* fetchCategoriesStartAsync() {
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments, "categories");
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriesFailure(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START,
    fetchCategoriesStartAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
