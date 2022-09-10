import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useRef } from 'react';
import { selectorColor, setColor as setColorWrap } from '../../../../redux/engineSlice';

export const useLogic = () => {
    const dispatch = useDispatch();
    const setColor = useCallback((color) => dispatch(setColorWrap(color)), [dispatch]);
    const figureColor = useSelector(selectorColor);
    const indicatorRef = useRef();
    if (indicatorRef.current) {
        indicatorRef.current.style.backgroundColor = figureColor;
    }
    return {
        setColor,
        figureColor,
        indicatorRef
    };
};
