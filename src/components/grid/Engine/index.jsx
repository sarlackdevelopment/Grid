import React from 'react';
import { Button, Stack } from 'react-bootstrap';
import cn from 'classnames';
import ModalEditor from './ModalEditor';
import style from './style.module.scss';
import { useLogic } from './useLogic';

const Engine = () => {
    const {
        openEditor, addFigure, indicatorRef, figures
    } = useLogic();
    return (<>
        <ModalEditor />
        <Button variant='outline-primary' onClick={addFigure}>Add figure</Button>
        { figures.map((item) => <Stack key={item.id} direction="horizontal" gap={3}>
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
            <div ref={indicatorRef} className={cn('border', style.indicator)} />
            <Button variant='outline-primary' onClick={openEditor}>Edit</Button>
        </Stack>) }
    </>);
};

export default Engine;
