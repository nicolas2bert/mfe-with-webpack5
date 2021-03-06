import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux'
import Navbar from './Navbar';
// import Root from 'app1/Root';
const Root1 = lazy(() => import('app1/Root'));
const Root2 = lazy(() => import('app2/Root'));

class Shell extends React.Component{
    render() {
        return <Provider store={this.props.store}>
            <div>
                <Navbar/>
                <Suspense fallback={'fallback'}>
                    <Root1 store={this.props.store}/>
                    <Root2 store={this.props.store}/>
                </Suspense>
            </div>
        </Provider>;
    }
}





export default Shell;
