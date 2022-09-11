import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useLogic as useModalEditorLogic } from './ModalEditor/useLogic';
import { selectorFigures } from '../../../redux/engineSlice';

export const useLogic = () => {
    const dispatch = useDispatch();
    const { openEditor } = useModalEditorLogic();
    const figures = useSelector(selectorFigures);
    const addFigure = useCallback(() => dispatch(openEditor), [dispatch, openEditor]);
    return {
        openEditor,
        figures,
        addFigure
    };
};
