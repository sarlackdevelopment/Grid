import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLogic } from './useLogic';

const Dashboard = () => {
    const {
        setWidth,
        setHeight,
        xCoordinate,
        yCoordinate,
        width,
        height,
        rowsCount,
        calculatePosition,
        skipCoordinates
    } = useLogic();
    return <Form>
        <Form.Group className="mb-3">
            <Form.Label>Width:</Form.Label>
            <Form.Control
                placeholder="width"
                type="number"
                min={0}
                onChange={(e) => {
                    skipCoordinates();
                    setWidth(Number(e.target.value));
                }}
                defaultValue={width}
                isInvalid={width <= 0 || width > rowsCount}
            />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Height:</Form.Label>
            <Form.Control
                placeholder="height"
                type="number"
                min={0}
                onChange={(e) => {
                    skipCoordinates();
                    setHeight(Number(e.target.value));
                }}
                defaultValue={height}
                isInvalid={height <= 0}
            />
        </Form.Group>
        <div className='border p-2'>
            <Form.Group className="mb-3">
                <Form.Label>X-Coordinate:</Form.Label>
                <Form.Control
                    placeholder="X-Coordinate"
                    type="number"
                    disabled
                    value={xCoordinate}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Y-Coordinate:</Form.Label>
                <Form.Control
                    placeholder="Y-Coordinate"
                    type="number"
                    disabled
                    value={yCoordinate}
                />
            </Form.Group>
            <div className="d-flex flex-column">
                <Button variant="outline-primary" onClick={calculatePosition}>Calculate position</Button>
            </div>
        </div>
    </Form>;
};

export default Dashboard;
