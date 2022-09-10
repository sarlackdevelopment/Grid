import React from 'react';
import {
    Col,
    Container,
    Row
} from 'react-bootstrap';
import Settings from './Settings';
import Field from './Field';

const Grid = () => (
    <Container className='mt-5 mx-2'>
        <Row>
            <Col xs={4}>
                <Settings />
            </Col>
            <Col xs={8}>
                <Field />
            </Col>
        </Row>
    </Container>
);

export default Grid;
