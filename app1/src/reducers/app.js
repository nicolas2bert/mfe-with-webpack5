
function app(state = { info: { version: 0 }}, action) {
  switch (action.type) {
    case 'INIT_APP':
      return {
        ...state,
        info: action.info
      }
    case 'INCREMENT_VERSION':
      return {
        ...state,
        info: { ...state.info, version: state.info.version + 1 }
      }
    default:
      return state
  }
}

export default app;
