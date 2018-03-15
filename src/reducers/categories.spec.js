import categories from './categories'
import * as types from '../constants/ActionTypes'

describe('categories reducer', () => {
  it('should handle initial state', () => {
    expect(
      categories(undefined, {})
    ).toEqual([
      {
        text: 'Add a Category',
        completed: false,
        id: 0
      }
    ])
  })

  it('should handle ADD_CATEGORY', () => {
    expect(
      categories([], {
        type: types.ADD_CATEGORY,
        text: 'Run the tests'
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0
      }
    ])

    expect(
      categories([
        {
          text: 'Add a Category',
          completed: false,
          id: 0
        }
      ], {
        type: types.ADD_CATEGORY,
        text: 'Run the tests'
      })
    ).toEqual([
      {
        text: 'Add a Category',
        completed: false,
        id: 0
      },
      {
        text: 'Run the tests',
        completed: false,
        id: 1
      }
    ])

    expect(
      categories([
        {
          text: 'Add a Category',
          completed: false,
          id: 0
        }, {
          text: 'Run the tests',
          completed: false,
          id: 1
        }
      ], {
        type: types.ADD_CATEGORY,
        text: 'Fix the tests'
      })
    ).toEqual([
      {
        text: 'Add a Category',
        completed: false,
        id: 0
      },
      {
        text: 'Run the tests',
        completed: false,
        id: 1
      },
      {
        text: 'Fix the tests',
        completed: false,
        id: 2
      }
    ])
  })

  it('should handle DELETE_CATEGORY', () => {
    expect(
      categories([
        {
          text: 'Add a Category',
          completed: false,
          id: 0
        },
        {
          text: 'Run the tests',
          completed: false,
          id: 1
        }
      ], {
        type: types.DELETE_CATEGORY,
        id: 1
      })
    ).toEqual([
      {
        text: 'Add a Category',
        completed: false,
        id: 0
      }
    ])
  })

  it('should handle EDIT_CATEGORY', () => {
    expect(
      categories([
        {
          text: 'Run the tests',
          completed: false,
          id: 1
        }, {
          text: 'Add a Category',
          completed: false,
          id: 0
        }
      ], {
        type: types.EDIT_CATEGORY,
        text: 'Fix the tests',
        id: 1
      })
    ).toEqual([
      {
        text: 'Fix the tests',
        completed: false,
        id: 1
      }, {
        text: 'Add a Category',
        completed: false,
        id: 0
      }
    ])
  })

  it('should handle COMPLETE_CATEGORY', () => {
    expect(
      categories([
        {
          text: 'Run the tests',
          completed: false,
          id: 1
        }, {
          text: 'Add a Category',
          completed: false,
          id: 0
        }
      ], {
        type: types.COMPLETE_CATEGORY,
        id: 1
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: true,
        id: 1
      }, {
        text: 'Add a Category',
        completed: false,
        id: 0
      }
    ])
  })

  it('should handle COMPLETE_ALL', () => {
    expect(
      categories([
        {
          text: 'Run the tests',
          completed: true,
          id: 1
        }, {
          text: 'Add a Category',
          completed: false,
          id: 0
        }
      ], {
        type: types.COMPLETE_ALL
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: true,
        id: 1
      }, {
        text: 'Add a Category',
        completed: true,
        id: 0
      }
    ])

    // Unmark if all categories are currently completed
    expect(
      categories([
        {
          text: 'Run the tests',
          completed: true,
          id: 1
        }, {
          text: 'Add a Category',
          completed: true,
          id: 0
        }
      ], {
        type: types.COMPLETE_ALL
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 1
      }, {
        text: 'Add a Category',
        completed: false,
        id: 0
      }
    ])
  })

  it('should handle CLEAR_COMPLETED', () => {
    expect(
      categories([
        {
          text: 'Run the tests',
          completed: true,
          id: 1
        }, {
          text: 'Add a Category',
          completed: false,
          id: 0
        }
      ], {
        type: types.CLEAR_COMPLETED
      })
    ).toEqual([
      {
        text: 'Add a Category',
        completed: false,
        id: 0
      }
    ])
  })

  it('should not generate duplicate ids after CLEAR_COMPLETED', () => {
    expect(
      [
        {
          type: types.COMPLETE_CATEGORY,
          id: 0
        }, {
          type: types.CLEAR_COMPLETED
        }, {
          type: types.ADD_CATEGORY,
          text: 'Write more tests'
        }
      ].reduce(categories, [
        {
          id: 0,
          completed: false,
          text: 'Add a Category'
        }, {
          id: 1,
          completed: false,
          text: 'Write tests'
        }
      ])
    ).toEqual([
      {
        text: 'Write tests',
        completed: false,
        id: 1
      }, {
        text: 'Write more tests',
        completed: false,
        id: 2
      }
    ])
  })
})
