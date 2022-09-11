import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectorColor,
    selectorHeight,
    selectorShowEditor, selectorWidth,
    selectorXCoordinate,
    selectorYCoordinate,
    setFigures,
    setShowEditor
} from '../../../../redux/engineSlice';
import { useLogic as useCacheLogic } from '../Dashboard/useLogic';

export const useLogic = () => {
    const dispatch = useDispatch();
    const isEditorShown = useSelector(selectorShowEditor);
    const closeEditor = useCallback(() => dispatch(setShowEditor(false)), [dispatch]);
    const openEditor = useCallback(() => dispatch(setShowEditor(true)), [dispatch]);
    const xCoordinate = useSelector(selectorXCoordinate);
    const yCoordinate = useSelector(selectorYCoordinate);
    const width = useSelector(selectorWidth);
    const height = useSelector(selectorHeight);
    const color = useSelector(selectorColor);
    const { clearCache } = useCacheLogic();
    const saveChanges = useCallback(() => {
        dispatch(setFigures({
            xCoordinate,
            yCoordinate,
            width,
            height,
            color
        }));
        dispatch(clearCache);
        dispatch(closeEditor);
    }, [clearCache, closeEditor, color, dispatch, height, width, xCoordinate, yCoordinate]);
    return {
        isEditorShown,
        closeEditor,
        openEditor,
        saveChanges,
        xCoordinate,
        yCoordinate,
        width,
        height
    };
};
