import React, { useMemo } from 'react';
import cn from 'classnames';
import {
    Col,
    Container,
    Form,
    Row
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import style from './style.module.scss';
import {
    selectorColsCount,
    selectorRowsCount,
    setColsCount,
    setRowsCount
} from '../../redux/settingsSlice';
import {
    DEFAULT_COUNT, MAX_COUNT, MIN_COUNT, NAME_COLS_COUNT_FIELD, NAME_ROWS_COUNT_FIELD
} from './settings/constants';

const Grid = () => {
    const rowsCount = useSelector(selectorRowsCount);
    const colsCount = useSelector(selectorColsCount);
    const rows = useMemo(() => [...Array(Number(rowsCount)).keys()], [rowsCount]);
    const cols = useMemo(() => [...Array(Number(colsCount)).keys()], [colsCount]);

    const dispatch = useDispatch();
    const handleChangeCount = (event) => {
        const { value, id } = event.target;
        if (id === NAME_ROWS_COUNT_FIELD) {
            dispatch(setRowsCount(Number(value)));
        }
        if (id === NAME_COLS_COUNT_FIELD) {
            dispatch(setColsCount(Number(value)));
        }
    };
    return (
        <Container className='mt-5 mx-2'>
            <Row>
                <Col xs={4}>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor={NAME_ROWS_COUNT_FIELD}>Rows count:</Form.Label>
                            <Form.Control
                                id={NAME_ROWS_COUNT_FIELD}
                                placeholder="Rows count"
                                type="number"
                                max={MAX_COUNT}
                                min={MIN_COUNT}
                                onChange={handleChangeCount}
                                isInvalid={(rowsCount < MIN_COUNT) || (rowsCount > MAX_COUNT)}
                                defaultValue={DEFAULT_COUNT}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor={NAME_COLS_COUNT_FIELD}>Cols count:</Form.Label>
                            <Form.Control
                                id={NAME_COLS_COUNT_FIELD}
                                placeholder="Cols count"
                                type="number"
                                max={MAX_COUNT}
                                min={MIN_COUNT}
                                isInvalid={(colsCount < MIN_COUNT) || (colsCount > MAX_COUNT)}
                                onChange={handleChangeCount}
                                defaultValue={DEFAULT_COUNT}
                            />
                        </Form.Group>
                    </Form>
                </Col>
                <Col xs={8}>
                    {cols.map((rowItem) => <div
                        className='d-flex justify-content-center'
                        key={rowItem + rowItem.toString()}
                    >
                        {rows.map((colItem) => <div
                            className='d-flex flex-column justify-content-center border'
                            key={colItem + colItem.toString()}
                        >
                            <div className={cn(style.cell, {
                                [style.cellColorAqua]: (rowItem % 2 === 0) && (colItem % 2 === 1),
                                [style.cellColorAzure]: (rowItem % 2 === 1) && (colItem % 2 === 0)
                            })} />
                        </div>)}
                    </div>)}
                </Col>
            </Row>
        </Container>
    );
};

export default Grid;
