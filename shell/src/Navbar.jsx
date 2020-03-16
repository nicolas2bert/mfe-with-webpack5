import React from 'react';
import { connect } from 'react-redux';

class Navbar extends React.Component{
    // console.log('this.props.shellVersion!!!', this.props.shellVersion);
    render() {
        return <div>
            <div> Shell Version: {this.props.version} </div>
            <div> <button onClick={e => this.props.init()}> Init Shell Version </button> </div>
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
        init: () => dispatch({
            type: 'SHELL_INIT',
            info: { version: 1 },
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
