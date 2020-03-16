import React from 'react';
import { connect } from 'react-redux';

class Navbar extends React.Component{
    // console.log('this.props.shellVersion!!!', this.props.shellVersion);
    render() {
        console.log('this.props!!!', this.props);
        return <div>
            <div> version: {this.props.version} </div>
            <div> <button onClick={e => this.props.init()}> New Info </button> </div>
        </div>;
    }
}

function mapStateToProps(state) {
    console.log('state!!!', state);
    return {
      version: state.shell.init.info.version,
    };
}

function mapDispatchToProps(dispatch){
    return {
        init: () => dispatch({
            type: 'INIT',
            info: { version: 1 },
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
