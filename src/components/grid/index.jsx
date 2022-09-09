import React, { useState } from 'react';
import cn from 'classnames';
import {
    Col, Container, Row
} from 'react-bootstrap';
import style from './style.module.scss';

const Grid = () => {
    const DEFAULT_ROWS_COUNT = 21;
    const DEFAULT_COLS_COUNT = 21;
    const [rowsCount, setRowsCount] = useState(DEFAULT_ROWS_COUNT);
    const [colsCount, setColsCount] = useState(DEFAULT_COLS_COUNT);
    return (
        <Container className='mt-5'>
            <Row>
                <Col>
                    <Container>Custom</Container>
                </Col>
                <Col>
                    {[...Array(colsCount).keys()].map((rowItem) => <div
                        className='d-flex'
                        key={rowItem + rowItem.toString()}
                    >
                        {[...Array(rowsCount).keys()].map((colItem) => <div
                            className='d-flex flex-column'
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
