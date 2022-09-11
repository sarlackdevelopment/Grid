import React from 'react';
import { Button, Stack } from 'react-bootstrap';
import cn from 'classnames';
import ModalEditor from './ModalEditor';
import style from './style.module.scss';
import { useLogic } from './useLogic';

const Engine = () => {
    const {
        addFigure, indicatorRef, figures
    } = useLogic();
    return (<>
        <ModalEditor />
        <Button variant='outline-primary' onClick={addFigure}>Add figure</Button>
        { figures.map(({
            xCoordinate, yCoordinate, width, height
        }, index) => <Stack key={index + index.toString()} direction="horizontal" gap={3}>
            <div className='d-flex'>
                <span className='border px-2'>X: </span>
                <span className='border px-3 fw-bold'>{xCoordinate}</span>
            </div>
            <div className='d-flex'>
                <span className='border px-2'>Y: </span>
                <span className='border px-3 fw-bold'>{yCoordinate}</span>
            </div>
            <div className='d-flex'>
                <span className='border px-2'>H: </span>
                <span className='border px-3 fw-bold'>{height}</span>
            </div>
            <div className='d-flex'>
                <span className='border px-2'>W: </span>
                <span className='border px-3 fw-bold'>{width}</span>
            </div>
            <div
                data-key={index + index.toString()}
                ref={indicatorRef}
                className={cn('border', style.indicator)}
            />
        </Stack>) }
    </>);
};

export default Engine;
