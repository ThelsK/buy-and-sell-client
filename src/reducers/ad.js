import { SET_DETAILS } from '../actions/ads'

export default (state = { id: -1 }, action = {}) => {
  switch (action.type) {
    case SET_DETAILS:
      return { ...action.payload }
    default:
      return state
  }
}