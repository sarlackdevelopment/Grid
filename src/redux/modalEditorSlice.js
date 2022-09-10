import { createSlice } from '@reduxjs/toolkit';

export const modalEditorSlice = createSlice({
    name: 'modalEditor',
    initialState: {
        isEditorShown: false
    },
    reducers: {
        setShowEditor: (state, action) => ({ ...state, isEditorShown: action.payload })
    }
});

export const selectorShowEditor = (state) => state.modalEditor.isEditorShown;

export const { setShowEditor } = modalEditorSlice.actions;
