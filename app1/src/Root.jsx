import React from 'react';
import App1 from './App1';
import rootReducer from './reducers'

class Root extends React.Component{
    componentWillMount(){
        this.props.store.addReducer('app1', rootReducer);
        // const getState = this.props.store.getState;
        // this.props.store.getState = () => getState().app1;
    }
    render() {
        console.log('this.props!!!', this.props);

        return <div> <App1 store={this.props.store}/> </div>;
    }
}

export default Root;
