import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useRef } from 'react';
import { useLogic as useModalEditorLogic } from './ModalEditor/useLogic';
import { selectorFigures } from '../../../redux/engineSlice';

export const useLogic = () => {
    const indicatorRef = useRef();
    const dispatch = useDispatch();
    const { openEditor } = useModalEditorLogic();
    const figures = useSelector(selectorFigures);
    const addFigure = useCallback(() => dispatch(openEditor), [dispatch, openEditor]);
    // if (indicatorRef.current) {
    //     const { key } = indicatorRef.current.dataset;
    //     const currentIndex = Number(key.slice(0, Number(key.length / 2)));
    //     console.log(key, currentIndex);
    //     return figures[currentIndex].color;
    // }
    return {
        openEditor,
        indicatorRef,
        figures,
        addFigure
    };
};
