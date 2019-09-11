import { SET_ADS, ADD_ADS } from '../actions/ads'

export default (state = [], action = {}) => {
  switch (action.type) {
    case SET_ADS:
      return [...action.payload]
    case ADD_ADS:
      return [...state, ...action.payload]
    default:
      return state
  }
}