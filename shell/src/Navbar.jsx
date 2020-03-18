import React from 'react';
import { connect } from 'react-redux';

class Navbar extends React.Component{
    // console.log('this.props.shellVersion!!!', this.props.shellVersion);
    render() {
        return <div>
            <button onClick={e => this.props.incrementVersion()}> Increment Shell version </button>
            <div> Shell version: {this.props.version} </div>
            <br/>
            <br/>
            </div>;
    }
}

function mapStateToProps(state) {
    return {
      version: state.shell.init.info.version,
    };
}

function mapDispatchToProps(dispatch){
    return {
        incrementVersion: () => dispatch({
            type: 'SHELL_INCREMENT_VERSION',
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
