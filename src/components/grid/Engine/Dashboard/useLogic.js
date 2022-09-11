import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    setXCoordinate as setXCoordinateWrap,
    setYCoordinate as setYCoordinateWrap,
    setWidth as setWidthWrap,
    setHeight as setHeightWrap,
    clearCache as clearCacheWrap,
    selectorWidth,
    selectorHeight,
    selectorFigures,
    selectorXCoordinate,
    selectorYCoordinate
} from '../../../../redux/engineSlice';
import { selectorRowsCount, setColsCount as setColsCountWrap } from '../../../../redux/settingsSlice';
import { selectorField } from '../../../../redux/fieldSlice';
import { placeAlgorithm } from '../../utils';

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
    const rowsCount = useSelector(selectorRowsCount);
    const figures = useSelector(selectorFigures);
    const field = useSelector(selectorField);
    const skipCoordinates = () => {
        dispatch(setXCoordinate(0));
        dispatch(setYCoordinate(0));
    };
    const setColsCount = useCallback((value) => dispatch(setColsCountWrap(value)), [dispatch]);

    const calculatePosition = () => {
        if (figures.length === 0) {
            dispatch(setXCoordinate(1));
            dispatch(setYCoordinate(1));
        } else {
            const { newXCoordinate, newYCoordinate, resizeVertical } = placeAlgorithm(field, width, height);
            if (resizeVertical) {
                setColsCount(rowsCount + height);
            }
            setXCoordinate(newXCoordinate);
            setYCoordinate(newYCoordinate);
        }
    };
    return {
        setWidth,
        setHeight,
        clearCache,
        xCoordinate,
        yCoordinate,
        width,
        height,
        rowsCount,
        calculatePosition,
        skipCoordinates
    };
};
