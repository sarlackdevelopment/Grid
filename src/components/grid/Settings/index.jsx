import React from 'react';
import { Form } from 'react-bootstrap';
import {
    DEFAULT_COUNT, MAX_COUNT, MIN_COUNT, NAME_COLS_COUNT_FIELD, NAME_ROWS_COUNT_FIELD
} from './constants';
import { useLogic } from '../useLogic';

const Settings = () => {
    const { rowsCount, colsCount, handleChangeCount } = useLogic();
    return (
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
    );
};

export default Settings;
