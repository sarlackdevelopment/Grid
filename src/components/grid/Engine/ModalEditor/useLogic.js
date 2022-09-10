import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectorShowEditor, setFigures, setShowEditor } from '../../../../redux/engineSlice';

export const useLogic = () => {
    const dispatch = useDispatch();
    const isEditorShown = useSelector(selectorShowEditor);
    const closeEditor = useCallback(() => dispatch(setShowEditor(false)), [dispatch]);
    const openEditor = useCallback(() => dispatch(setShowEditor(true)), [dispatch]);
    const saveChanges = useCallback((updates) => dispatch(setFigures(updates)), [dispatch]);
    return {
        isEditorShown,
        closeEditor,
        openEditor,
        saveChanges
    };
};
