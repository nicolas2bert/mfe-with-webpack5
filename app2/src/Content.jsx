import React from 'react';
import { connect } from 'react-redux';

class Content extends React.Component{
    render() {
        return <div>
            <br/>
            <div> <button onClick={e => this.props.updateVersion(this.props.appVersion + 1)}> Increase App2 version </button></div>
            <div> <button onClick={e => this.props.updateVersionThunk(this.props.appVersion + 1)}> Increase THUNK App2 version </button></div>
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
      updateVersion: version => dispatch({
          type: 'UPDATE_VERSION',
          version,
      }),
      updateVersionThunk: version => dispatch((dispatch) => {
        return setTimeout(() => {
            dispatch({
              type: 'UPDATE_VERSION',
              version,
            });
        }, 3000);
      }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
