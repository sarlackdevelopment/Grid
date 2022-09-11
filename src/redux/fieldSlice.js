import { createSlice } from '@reduxjs/toolkit';

export const fieldSlice = createSlice({
    name: 'field',
    initialState: {
        field: []
    },
    reducers: {
        setField: (state, action) => ({ ...state, field: action.payload })
    }
});

export const selectorField = (state) => state.field;

export const { setField } = fieldSlice.actions;
