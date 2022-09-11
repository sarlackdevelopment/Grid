import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLogic as useModalEditorLogic } from './ModalEditor/useLogic';
import { clearFigures as clearFiguresWrap, selectorFigures } from '../../../redux/engineSlice';

export const useLogic = () => {
    const dispatch = useDispatch();
    const { openEditor } = useModalEditorLogic();
    const figures = useSelector(selectorFigures);
    const addFigure = useCallback(() => dispatch(openEditor), [dispatch, openEditor]);
    const clearFigures = useCallback(() => dispatch(clearFiguresWrap()), [dispatch]);

    return {
        openEditor,
        figures,
        addFigure,
        clearFigures
    };
};
