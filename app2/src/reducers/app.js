
function app(state = { info: { version: 0 }}, action) {
  switch (action.type) {
    case 'INIT_APP':
      return {
        ...state,
        info: action.info
      }
    case 'UPDATE_VERSION':
      return {
        ...state,
        info: { ...state.info, version: action.version }
      }
    default:
      return state
  }
}

export default app;
