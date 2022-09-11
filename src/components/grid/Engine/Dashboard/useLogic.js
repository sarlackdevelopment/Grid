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
import { selectorRowsCount } from '../../../../redux/settingsSlice';

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
    const skipCoordinates = () => {
        dispatch(setXCoordinate(1));
        dispatch(setYCoordinate(1));
    };
    const calculatePosition = () => {
        if (figures.length === 0) {
            skipCoordinates();
        } else {
            // 0. Скипаем координаты если поменялась размерность
            // 1. Ищем первую строку с хотя бы одной незаполненной ячейкой.
            // 2. Считаем от этой ячейки вправо width раз, до тех пор, пока позволяет ширина основного поля
            // 3. Если новая фигура не помещается, то повторяем пункт 1 со следующей строкой.
            // for (let i = 0; i <= figures.length - 1; i++) {
            //     const figure = figures[i];
            // }
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
