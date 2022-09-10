import React from 'react';
import { Button, Stack } from 'react-bootstrap';
import { useLogic } from './ModalEditor/useLogic';
import ModalEditor from './ModalEditor';

const Engine = () => {
    const { openEditor } = useLogic();
    return <>
        <ModalEditor />
        <Stack direction="horizontal" gap={3}>
            <div className='d-flex'>
                <span className='border px-2'>X: </span>
                <span className='border px-3 fw-bold'>8</span>
            </div>
            <div className='d-flex'>
                <span className='border px-2'>Y: </span>
                <span className='border px-3 fw-bold'>8</span>
            </div>
            <div className='d-flex'>
                <span className='border px-2'>H: </span>
                <span className='border px-3 fw-bold'>8</span>
            </div>
            <div className='d-flex'>
                <span className='border px-2'>W: </span>
                <span className='border px-3 fw-bold'>8</span>
            </div>
            <Button variant='outline-primary' onClick={openEditor}>Edit</Button>
        </Stack>
    </>;
};

export default Engine;
