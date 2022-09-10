import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_COUNT } from '../components/grid/settings/constants';

export const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        rowsCount: DEFAULT_COUNT,
        colsCount: DEFAULT_COUNT
    },
    reducers: {
        setRowsCount: (state, action) => ({ ...state, rowsCount: action.payload }),
        setColsCount: (state, action) => ({ ...state, colsCount: action.payload })
    }
});

export const selectorRowsCount = (state) => state.settings.rowsCount;
export const selectorColsCount = (state) => state.settings.colsCount;

export const { setRowsCount, setColsCount } = settingsSlice.actions;
