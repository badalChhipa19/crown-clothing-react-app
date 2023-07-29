import { takeLatest, put, all, call } from "redux-saga/effects";

import USER_ACTION_TYPES from "./user.type";
import {
  signInSuccess,
  signInFailed,
  signUpSuccess,
  signUpFailed,
  signOutFailed,
  signOutSuccess,
} from "./user.action";
import {
  getCurrentUser,
  CreateUserDocumentFromAuth,
  signInwithGooglePopup,
  signInUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  SignOutUser,
} from "../../utils/firebase/firebase.util";

//! Sign In handlers
export function* getSnapShotFromUserAuth(userAuth, additionalDetails) {
  try {
    console.log(userAuth, additionalDetails);
    const userSnapshot = yield call(
      CreateUserDocumentFromAuth,
      userAuth,
      additionalDetails
    );
    yield put(signInSuccess({ ...userSnapshot.data(), id: userSnapshot.id }));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapShotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

//! Sign Up Functions
export function* signInAfterSignUp({
  payload: { userAuth, additionalDetails },
}) {
  try {
    console.log("🚫🚫🚫🚫🚫🚫🚫 In signInAfterSignUp");
    console.log(userAuth, additionalDetails);
    yield call(getSnapShotFromUserAuth, userAuth, additionalDetails);
  } catch (error) {
    yield put(signUpFailed(error));
  }
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    console.log("🚫🚫🚫🚫🚫🚫🚫 In signUp");
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );

    console.log("🚫🚫🚫 ===>", user, password, email, displayName);
    yield put(signUpSuccess(user, { displayName }));
  } catch (error) {
    yield put(signUpFailed(error));
  }
}
export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

//! Sign In Functions
export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield call(
      signInUserWithEmailAndPassword,
      email,
      password
    );
    if (!user) return;
    yield call(isUserAuthenticated, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* signInWithGoogle() {
  try {
    const { user } = yield call(signInwithGooglePopup);
    if (!user) return;
    yield call(isUserAuthenticated, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

//! Sign Out Functions

export function* signOut() {
  try {
    yield call(SignOutUser);
    yield put(signOutSuccess());
  } catch (err) {
    put(signOutFailed(err));
  }
}

export function* onSignOutStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ]);
}
