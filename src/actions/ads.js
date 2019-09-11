import request from "superagent"

export const SET_ADS = "SET_ADS"
export const ADD_ADS = "ADD_ADS"
export const SET_DETAILS = "SET_DETAILS"

export const loadAds = () => async dispatch => {
  const res = await request("http://localhost:4000/ads/")
  const action = {
    type: SET_ADS,
    payload: res.body
  }
  dispatch(action)
}

export const loadAdDetails = id => async dispatch => {
  const res = await request(`http://localhost:4000/ads/${id}`)
  const action = {
    type: SET_DETAILS,
    payload: res.body
  }
  dispatch(action)
}

export const createAd = ad => dispatch => {
  const action = {
    type: ADD_ADS,
    payload: [ad]
  }
  dispatch(action)
}