import { configureStore } from '@reduxjs/toolkit';
import { settingsSlice } from './settingsSlice';
import { engineSlice } from './engineSlice';
import { fieldSlice } from './fieldSlice';

const reducer = {
    settings: settingsSlice.reducer,
    engine: engineSlice.reducer,
    fieldSlice: fieldSlice.reducer
};

export const store = configureStore({
    reducer,
    devTools: true
});
