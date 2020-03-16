import React from 'react';
import App1 from './App1';
import rootReducer from './reducers'

class Root extends React.Component{
    constructor(props) {
        super(props);
    }
    componentWillMount(){
        this.props.store.addNamespacedReducer('app1', rootReducer);
        this.store = this.props.store.getNameSpacedStore('app1');
    }
    render() {
        const isReady = !!this.props.store.getState().app1;

        return isReady && <div> <App1 store={this.store}/> </div>;
    }
}

export default Root;
