import React, { useMemo, useState } from 'react';
import cn from 'classnames';
import {
    Button,
    Col,
    Container,
    Form,
    Row
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import style from './style.module.scss';
import { setTestNumber } from '../../redux/testSlice';

const Grid = () => {
    const NAME_ROWS_COUNT_FIELD = 'rowsCountInput';
    const NAME_COLS_COUNT_FIELD = 'colsCountInput';
    const DEFAULT_COUNT = 21;
    const MIN_COUNT = 5;
    const MAX_COUNT = 100;

    const [rowsCount, setRowsCount] = useState(DEFAULT_COUNT);
    const [colsCount, setColsCount] = useState(DEFAULT_COUNT);
    const rows = useMemo(() => [...Array(Number(rowsCount)).keys()], [rowsCount]);
    const cols = useMemo(() => [...Array(Number(colsCount)).keys()], [colsCount]);

    const dispatch = useDispatch();
    const handleChangeCount = (event) => {
        const { value, id } = event.target;
        if (id === NAME_ROWS_COUNT_FIELD) {
            setRowsCount(value);
        }
        if (id === NAME_COLS_COUNT_FIELD) {
            setColsCount(value);
        }
    };
    const some = () => {
        dispatch(setTestNumber(123));
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
                        <Button variant="primary" onClick={() => some()}>Go!</Button>
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
