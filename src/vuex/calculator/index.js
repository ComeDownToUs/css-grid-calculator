import * as getters from './getters'
import * as actions from './actions'
import uuid from 'uuid'

import {
  SAVE_RESULT,
  DELETE_RESULT,
  UPDATE_CURRENT,
  CANCEL_RESULT
} from './constants'


const resetCurrent = () => {
  return {
    portions: [],
    currentvalue: '',
    previous: 'numeric'
  }
}

const initialState = {
  results: [
    {
      id: '6840a660-4036-11e7-a919-92ebcb67fe33',
      calculation: [2, '+', 15, 'X', 2],
      date: Date()
    },
    {
      id: '6840a9da-4036-11e7-a919-92ebcb67fe33',
      calculation: [2, '+', 15, 'X', 2],
      date: Date()
    },

    {
      id: '6840a9da-4036-11e7-a919-92ebcb67fe33',
      calculation: [2, '+', 15, '/', 2],
      date: Date()
    }
  ],
  currentResult: resetCurrent()
}


const mutations = {
  [SAVE_RESULT](state, result){
    if(state.currentResult.previous === 'numeric'){
      state.currentResult.portions.pop()
    }
    state.results.push({
      calculation: state.currentResult.portions,
      date: Date(),
      id: uuid.v4()
    })
    state.currentResult = resetCurrent()
  },
  [DELETE_RESULT](state, result){
    state.results = state.results.filter(r => r.id !== result.id)
  },
  [UPDATE_CURRENT](state, current){
      if (typeof current === 'number' ||
      (current === '.' && state.currentResult.currentvalue.indexOf('.')===-1)){

        if(state.currentResult.previous === 'numeric'){
          state.currentResult.currentvalue = state.currentResult.currentvalue + current
        }else{
          state.currentResult.portions.push(state.currentResult.currentvalue)
          state.currentResult.currentvalue = ''+current
        }
        state.currentResult.previous = 'numeric'
      }else if(typeof current === 'string' && current !== '.'){
        if(state.currentResult.previous === 'numeric'){
          state.currentResult.portions.push(state.currentResult.currentvalue)
        }
        state.currentResult.currentvalue = current
        //emit past entry
        state.currentResult.previous = 'operation'
      }
  },
  [CANCEL_RESULT](state){
    state.currentResult = resetCurrent()
  }
}

export default{
  state: {...initialState},
  actions,
  getters,
  mutations
}
