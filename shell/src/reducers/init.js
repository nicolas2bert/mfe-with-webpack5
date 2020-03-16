
function init(state = { info: { version: '0' }}, action) {
  switch (action.type) {
    case 'INIT':
      return {
        ...state,
        info: action.info
      }
    default:
      return state
  }
}

export default init;
