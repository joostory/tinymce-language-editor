import update from 'immutability-helper'

// constant
const CHANGE_VALUE = 'CHANGE_VALUE'

// action
export const changeValue = (key, value) => ({
  type: CHANGE_VALUE,
  key,
  value
})

// reducer
const initialState = window.tinymceLanguage
export default (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_VALUE:
      return update(state, {
        [action.key]: {
          $set: action.value
        }
      })
    default:
      return state
  }
}
