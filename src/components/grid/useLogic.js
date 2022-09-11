import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useMemo, useRef } from 'react';
import {
    selectorColsCount, selectorRowsCount, setColsCount, setRowsCount
} from '../../redux/settingsSlice';
import { NAME_COLS_COUNT_FIELD, NAME_ROWS_COUNT_FIELD } from './Settings/constants';
import { selectorFigures } from '../../redux/engineSlice';
import { draw, prepareDigitField } from './utils';
import { setField as setFieldWrap } from '../../redux/fieldSlice';

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
    const setField = useCallback((field) => dispatch(setFieldWrap(field)), [dispatch]);

    const refField = useRef();
    const figures = useSelector(selectorFigures);

    if (refField.current) {
        draw(refField, figures);
        setField(prepareDigitField(refField));
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
