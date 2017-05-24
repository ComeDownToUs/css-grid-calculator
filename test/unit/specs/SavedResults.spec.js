import Vue from 'vue'
import SavedResults from '@/components/SavedResults'

describe('SavedResults.vue', () => {

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
    currentResult: {
      portions: [],
      currentvalue: '',
      previous: 'numeric'
    }
  }

  it('should fetch the correct initial state', () => {
    expect(typeof SavedResults.data).to.equal('function')
  })
})



