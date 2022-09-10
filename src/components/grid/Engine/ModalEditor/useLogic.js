import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectorShowEditor, setShowEditor } from '../../../../redux/modalEditorSlice';

export const useLogic = () => {
    const dispatch = useDispatch();
    const isEditorShown = useSelector(selectorShowEditor);
    const closeEditor = useCallback(() => dispatch(setShowEditor(false)), [dispatch]);
    const openEditor = useCallback(() => dispatch(setShowEditor(true)), [dispatch]);
    return {
        isEditorShown,
        closeEditor,
        openEditor
    };
};
