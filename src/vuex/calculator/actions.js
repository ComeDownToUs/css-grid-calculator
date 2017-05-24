import uuid from 'uuid'

import {
  FETCH_RESULTS,
  UPDATE_CURRENT,
  SAVE_RESULT,
  DELETE_RESULT,
  GET_RESULT,
  CALC_ERROR,
  CANCEL_RESULT
} from './constants'


export function fetchResults({commit}){
  commit(FETCH_RESULTS);
}

export function updateCurrent({commit}, current){
  commit(UPDATE_CURRENT, current)
}

//currently assuming duplicates are allowed
export function saveResult({commit}, result){
  commit(SAVE_RESULT, result);
}

export function cancelResult({commit}){
  commit(CANCEL_RESULT);
}

export function deleteResult({commit}, result){
  commit(DELETE_RESULT, result);
}

//may not implement for this challenge
export function getResult({commit}, resultID){
  commit(GET_RESULT, resultID);
}
