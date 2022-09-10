import React from 'react';
import cn from 'classnames';
import style from '../style.module.scss';
import { useLogic } from '../useLogic';

const Field = () => {
    const { cols, rows } = useLogic();
    return <>
        {cols.map((rowItem) => <div
            className='d-flex justify-content-center'
            key={rowItem + rowItem.toString()}
        >
            {rows.map((colItem) => <div
                className='d-flex flex-column justify-content-center border'
                key={colItem + colItem.toString()}
            >
                <div className={cn(style.cell, {
                    [style.cellColorAqua]: (rowItem % 2 === 0) && (colItem % 2 === 1),
                    [style.cellColorAzure]: (rowItem % 2 === 1) && (colItem % 2 === 0)
                })} />
            </div>)}
        </div>)}
    </>;
};

export default Field;
