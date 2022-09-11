import React from 'react';
import cn from 'classnames';
import style from '../style.module.scss';
import { useLogic } from '../useLogic';

const Field = () => {
    const { cols, rows, refField } = useLogic();
    return <div ref={refField} className="overflow-scroll border">
        {cols.map((rowItem) => <div
            className='d-flex justify-content-center'
            key={rowItem + rowItem.toString()}
        >
            {rows.map((colItem) => <div
                className='d-flex flex-column justify-content-center border'
                key={colItem + colItem.toString()}
            >
                <div className={cn(style.cell)} />
            </div>)}
        </div>)}
    </div>;
};

export default Field;
