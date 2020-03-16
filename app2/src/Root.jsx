import React from 'react';
import App2 from './App2';
import rootReducer from './reducers'

class Root extends React.Component{
    constructor(props) {
        super(props);
    }
    componentWillMount(){
        this.props.store.addNamespacedReducer('app2', rootReducer);
        this.store = this.props.store.getNameSpacedStore('app2');
    }
    render() {
        const isReady = !!this.props.store.getState().app2;

        return isReady && <div> <App2 store={this.store}/> </div>;
    }
}

export default Root;
