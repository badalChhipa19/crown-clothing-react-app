import { createAction } from "../../utils/reducer/reducer.util";
import { CATEGORIES_ACTION_TYPE } from "./categories.types";

export const setCategories = (categoryArrar) =>
  createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES, categoryArrar);
