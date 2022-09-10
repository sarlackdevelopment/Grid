import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useLogic as useModalEditorLogic } from './ModalEditor/useLogic';
import { useLogic as useColorPickerLogic } from './ColorPicker/useLogic';
import { useLogic as useCacheLogic } from './Dashboard/useLogic';
import { selectorFigures } from '../../../redux/engineSlice';

export const useLogic = () => {
    const dispatch = useDispatch();
    const { openEditor } = useModalEditorLogic();
    const { indicatorRef } = useColorPickerLogic();
    const { clearCache } = useCacheLogic();
    const figures = useSelector(selectorFigures);
    const addFigure = useCallback(() => {
        dispatch(openEditor);
        dispatch(clearCache);
    }, [clearCache, dispatch, openEditor]);
    return {
        openEditor,
        indicatorRef,
        figures,
        addFigure
    };
};
