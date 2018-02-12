import * as types from '../constants/ActionTypes'
import * as actions from './index'

describe('todo actions', () => {
  it('addTodo should create ADD_BOARD action', () => {
    expect(actions.addBoard('Use Redux')).toEqual({
      type: types.ADD_BOARD,
      text: 'Use Redux'
    })
  })


})