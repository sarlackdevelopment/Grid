import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useMemo } from 'react';
import {
    selectorColsCount, selectorRowsCount, setColsCount, setRowsCount
} from '../../redux/settingsSlice';
import { NAME_COLS_COUNT_FIELD, NAME_ROWS_COUNT_FIELD } from './Settings/constants';

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
    return {
        rowsCount,
        colsCount,
        handleChangeCount,
        rows,
        cols
    };
};
