import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    setXCoordinate as setXCoordinateWrap,
    setYCoordinate as setYCoordinateWrap,
    setWidth as setWidthWrap,
    setHeight as setHeightWrap,
    clearCache as clearCacheWrap, selectorXCoordinate, selectorYCoordinate, selectorWidth, selectorHeight
} from '../../../../redux/engineSlice';

export const useLogic = () => {
    const dispatch = useDispatch();
    const setXCoordinate = useCallback((xCoordinate) => dispatch(setXCoordinateWrap(xCoordinate)), [dispatch]);
    const setYCoordinate = useCallback((yCoordinate) => dispatch(setYCoordinateWrap(yCoordinate)), [dispatch]);
    const setWidth = useCallback((width) => dispatch(setWidthWrap(width)), [dispatch]);
    const setHeight = useCallback((height) => dispatch(setHeightWrap(height)), [dispatch]);
    const clearCache = useCallback(() => dispatch(clearCacheWrap()), [dispatch]);
    const xCoordinate = useSelector(selectorXCoordinate);
    const yCoordinate = useSelector(selectorYCoordinate);
    const width = useSelector(selectorWidth);
    const height = useSelector(selectorHeight);
    return {
        setXCoordinate,
        setYCoordinate,
        setWidth,
        setHeight,
        clearCache,
        xCoordinate,
        yCoordinate,
        width,
        height
    };
};
