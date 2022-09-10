import { configureStore } from '@reduxjs/toolkit';
import { settingsSlice } from './settingsSlice';
import { engineSlice } from './engineSlice';

const reducer = {
    settings: settingsSlice.reducer,
    engine: engineSlice.reducer
};

export const store = configureStore({
    reducer,
    devTools: true
});
