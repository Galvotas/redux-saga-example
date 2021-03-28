export const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'INCREMENT_IF_ODD':
      return (state % 2 !== 0) ? state + 1 : state
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const initialUsersState = {
  users: []
}

export const usersReducer = (state = initialUsersState, action) => {
  switch(action.type) {
case 'LOG_USERS':
return {users: action.payload}
    default: return state;
  }
}
