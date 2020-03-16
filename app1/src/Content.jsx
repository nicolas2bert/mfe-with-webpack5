import React from 'react';
import { connect } from 'react-redux';

class Content extends React.Component{
    render() {
        return <div>
            <div> <button onClick={e => this.props.updateVersion(this.props.appVersion + 1)}> Increase version </button></div>
            <div>App1 version: {this.props.appVersion}</div>
        </div>;
    }
}

function mapStateToProps(state) {
    console.log('app1 state!!!', state);
    return {
      appVersion: state.app1.app.info.version,
    };
}

function mapDispatchToProps(dispatch) {
    return {
      updateVersion: version => dispatch({
          type: 'UPDATE_APP_VERSION',
          version,
      })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
