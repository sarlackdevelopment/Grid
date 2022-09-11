import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useMemo, useRef } from 'react';
import {
    selectorColsCount, selectorRowsCount, setColsCount, setRowsCount
} from '../../redux/settingsSlice';
import { NAME_COLS_COUNT_FIELD, NAME_ROWS_COUNT_FIELD } from './Settings/constants';
import { selectorFigures } from '../../redux/engineSlice';

export const useLogic = () => {
    const dispatch = useDispatch();
    const rowsCount = useSelector(selectorRowsCount);
    const colsCount = useSelector(selectorColsCount);
    const handleChangeCount = useCallback((event) => {
        const { value, id } = event.target;
        if (id === NAME_ROWS_COUNT_FIELD) {
            dispatch(setRowsCount(Number(value)));
        }
        if (id === NAME_COLS_COUNT_FIELD) {
            dispatch(setColsCount(Number(value)));
        }
    }, [dispatch]);
    const rows = useMemo(() => [...Array(Number(rowsCount)).keys()], [rowsCount]);
    const cols = useMemo(() => [...Array(Number(colsCount)).keys()], [colsCount]);

    const refField = useRef();
    const figures = useSelector(selectorFigures);

    if (refField.current) {
        const rowsChildNodes = refField.current.childNodes;
        if (figures.length === 0) {
            for (let i = 0; i <= rowsChildNodes.length - 1; i++) {
                const colsChildNodes = rowsChildNodes[i].childNodes;
                for (let j = 0; j <= colsChildNodes.length - 1; j++) {
                    colsChildNodes[j].style.backgroundColor = 'white';
                }
            }
        } else {
            figures.forEach(({
                xCoordinate, yCoordinate, width, height, color
            }) => {
                for (let i = 0; i <= height - 1; i++) {
                    const colsChildNodes = rowsChildNodes[yCoordinate + i - 1].childNodes;
                    for (let j = 0; j <= width - 1; j++) {
                        colsChildNodes[j + xCoordinate - 1].style.backgroundColor = color;
                    }
                }
            });
        }
    }
    return {
        rowsCount,
        colsCount,
        handleChangeCount,
        rows,
        cols,
        refField
    };
};
