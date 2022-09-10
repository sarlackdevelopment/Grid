import { configureStore } from '@reduxjs/toolkit';
import { settingsSlice } from './settingsSlice';
import { modalEditorSlice } from './modalEditorSlice';

const reducer = {
    settings: settingsSlice.reducer,
    modalEditor: modalEditorSlice.reducer
};

export const store = configureStore({
    reducer,
    devTools: true
});
