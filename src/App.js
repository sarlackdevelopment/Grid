import React from 'react';
import { Provider } from 'react-redux';
import Grid from './components/grid';
import { store } from './redux/store';

function App() {
    return (
        <Provider store={store} >
            <Grid />
        </Provider>
    );
}

export default App;
