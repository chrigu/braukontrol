import type { settingsStateType } from '../reducers/recipes';

export const SAVE_RECIPE = 'SAVE_RECIPE';
export const SAVE_RECIPE_SUCCESS = 'SAVE_RECIPE_SUCCESS';
export const SAVE_RECIPE_FAIL = 'SAVE_RECIPE_FAIL';

export function saveRecipe(formData) {
  return {
    type: SAVE_RECIPE,
    payload: formData
  };
}

export function saveRecipeSuccess() {
  return {
    type: SAVE_RECIPE_SUCCESS
  };
}

export function saveRecipeFail() {
  return {
    type: SAVE_RECIPE_FAIL
  };
}


