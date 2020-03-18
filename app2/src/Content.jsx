import React from 'react';
import { connect } from 'react-redux';

class Content extends React.Component{
    render() {
        return <div>
            <br/>
            <div> <button onClick={e => this.props.incrementVersion()}> Increment App2 version </button></div>
            <div> <button onClick={e => this.props.incrementVersionThunk()}> Increment THUNK App2 version </button></div>
            <div>App2 version: {this.props.appVersion}</div>
            <br/>
            <br/>
        </div>;
    }
}

function mapStateToProps(state) {
    return {
      appVersion: state.app.info.version,
    };
}

function mapDispatchToProps(dispatch) {
    return {
      incrementVersion: () => dispatch({
          type: 'INCREMENT_VERSION',
      }),
      incrementVersionThunk: () => dispatch((dispatch) => {
        return setTimeout(() => {
            dispatch({
              type: 'INCREMENT_VERSION',
            });
        }, 3000);
      }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
