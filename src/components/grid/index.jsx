import React from 'react';
import {
    Col,
    Container,
    Row, Stack
} from 'react-bootstrap';
import Settings from './Settings';
import Field from './Field';
import Engine from './Engine';

const Grid = () => (
    <Container fluid className='mt-5 mx-2'>
        <Row>
            <Col xs={4}>
                <Stack className="border p-2" direction="vertical" gap={3}>
                    <Settings />
                    <Engine />
                </Stack>
            </Col>
            <Col xs={8}>
                <Field />
            </Col>
        </Row>
    </Container>
);

export default Grid;
