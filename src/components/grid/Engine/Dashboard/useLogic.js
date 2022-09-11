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

    const star = () => {
        // for (let i = 0; i <= field.length - 1; i++) {
        //     const row = field[i];
        //     for (let j = 0; j <= row.length - 1; j++) {
        //         if (row[j] === 0) {
        //             if (width > row.length - j - 1) {
        //                 break;
        //             } else {
        //                 setXCoordinate(j + 1);
        //                 setYCoordinate(i + 1);
        //                 return;
        //             }
        //         }
        //     }
        // }

        // const sizeOfSpaceHorizontal = (row, startIndex) => {
        //     let size = 1;
        //     for (let i = startIndex; i <= row.length - 1; i++) {
        //         if (row[i] === 1) {
        //             return size;
        //         }
        //         size++;
        //     }
        //     return size;
        // };
        // for (let i = 0; i <= field.length - 1; i++) {
        //     const row = field[i];
        //     for (let j = 0; j <= row.length - 1; j++) {
        //         if (row[j] === 0) {
        //             if (width > sizeOfSpaceHorizontal(row, j) - 1) {
        //                 break;
        //             } else {
        //                 setXCoordinate(j + 1);
        //                 setYCoordinate(i + 1);
        //                 return;
        //             }
        //         }
        //     }
        // }

        const sizeOfSpaceHorizontal = (row, startIndex) => {
            let size = 1;
            for (let i = startIndex; i <= row.length - 1; i++) {
                if (row[i] === 1) {
                    return size;
                }
                size++;
            }
            return size;
        };
        const sizeOfSpaceVertical = (startIndex, indexCol) => {
            let size = 1;
            for (let i = startIndex; i <= field.length - 1; i++) {
                if (field[i][indexCol] === 1) {
                    return { size, resizeVertical: false };
                }
                size++;
            }
            return { size, resizeVertical: true };
        };
        for (let i = 0; i <= field.length - 1; i++) {
            const row = field[i];
            for (let j = 0; j <= row.length - 1; j++) {
                if (row[j] === 0) {
                    if (width > sizeOfSpaceHorizontal(row, j) - 1) {
                        break;
                    } else {
                        const { size, resizeVertical } = sizeOfSpaceVertical(i, j);
                        if (height > size - 1) {
                            if (!resizeVertical) {
                                break;
                            } else {
                                setColsCount(rowsCount + height);
                                setXCoordinate(j + 1);
                                setYCoordinate(i + 1);
                                return;
                            }
                        } else {
                            setXCoordinate(j + 1);
                            setYCoordinate(i + 1);
                            return;
                        }
                    }
                }
            }
        }
    };

    const calculatePosition = () => {
        if (figures.length === 0) {
            dispatch(setXCoordinate(1));
            dispatch(setYCoordinate(1));
        } else {
            star();
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
