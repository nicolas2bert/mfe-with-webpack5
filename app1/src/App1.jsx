import React from 'react';
import rootReducer from './reducers'
import Content from './Content';
import { Provider } from 'react-redux'

class App1 extends React.Component{
    render() {
        return <Provider store={this.props.store}> <Content/> </Provider>;
    }
}

export default App1;
