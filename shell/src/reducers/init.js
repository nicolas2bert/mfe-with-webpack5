
function init(state = { info: { version: 0 }}, action) {
  switch (action.type) {
    case 'SHELL_INIT':
      return {
        ...state,
        info: action.info
      }
    case 'SHELL_INCREMENT_VERSION':
      return {
        ...state,
        info: { ...state.info, version: state.info.version + 1 }
      }
    default:
      return state
  }
}

export default init;
