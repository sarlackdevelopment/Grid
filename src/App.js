import React from 'react';
import { Provider } from 'react-redux';
import Grid from './components/grid';
import { store } from './redux/store';

function App() {
    return (
        <div>
            <Provider store={store} >
                <Grid />
            </Provider>
        </div>
    );
}

export default App;
