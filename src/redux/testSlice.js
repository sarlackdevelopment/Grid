import { createSlice } from '@reduxjs/toolkit';

export const testSlice = createSlice({
    name: 'test',
    initialState: {
        testNumber: ''
    },
    reducers: {
        setTestNumber: (state, action) => ({ ...state, testNumber: action.payload })
    }
});

export const selectorForPhoneNumber = (state) => state.test.testNumber;

export const { setTestNumber } = testSlice.actions;
