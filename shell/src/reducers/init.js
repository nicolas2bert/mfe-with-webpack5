
function init(state = { info: { version: '0' }}, action) {
  switch (action.type) {
    case 'SHELL_INIT':
      return {
        ...state,
        info: action.info
      }
    case 'SHELL_UPDATE_VERSION':
      return {
        ...state,
        info: { ...state.info, version: action.version }
      }
    default:
      return state
  }
}

export default init;
