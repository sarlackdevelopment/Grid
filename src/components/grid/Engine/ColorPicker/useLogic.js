import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { selectorColor, setColor as setColorWrap } from '../../../../redux/engineSlice';

export const useLogic = () => {
    const dispatch = useDispatch();
    const setColor = useCallback((color) => dispatch(setColorWrap(color)), [dispatch]);
    const figureColor = useSelector(selectorColor);
    return {
        setColor,
        figureColor
    };
};
