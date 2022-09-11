import React from 'react';
import { Form } from 'react-bootstrap';
import { useLogic } from './useLogic';

const Dashboard = () => {
    const {
        setXCoordinate,
        setYCoordinate,
        setWidth,
        setHeight,
        xCoordinate,
        yCoordinate,
        width,
        height
    } = useLogic();
    return <Form>
        <Form.Group className="mb-3">
            <Form.Label>X-Coordinate:</Form.Label>
            <Form.Control
                placeholder="X-Coordinate"
                type="number"
                min={0}
                onChange={(e) => setXCoordinate(Number(e.target.value))}
                defaultValue={xCoordinate}
                isInvalid={xCoordinate <= 0}
            />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Y-Coordinate:</Form.Label>
            <Form.Control
                placeholder="Y-Coordinate"
                type="number"
                min={0}
                onChange={(e) => setYCoordinate(Number(e.target.value))}
                defaultValue={yCoordinate}
                isInvalid={yCoordinate <= 0}
            />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Width:</Form.Label>
            <Form.Control
                placeholder="width"
                type="number"
                min={0}
                onChange={(e) => setWidth(Number(e.target.value))}
                defaultValue={width}
                isInvalid={width <= 0}
            />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Height:</Form.Label>
            <Form.Control
                placeholder="height"
                type="number"
                min={0}
                onChange={(e) => setHeight(Number(e.target.value))}
                defaultValue={height}
                isInvalid={height <= 0}
            />
        </Form.Group>
    </Form>;
};

export default Dashboard;
