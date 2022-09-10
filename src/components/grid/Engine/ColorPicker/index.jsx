import React from 'react';
import { HexColorPicker } from 'react-colorful';
import { Button } from 'react-bootstrap';
import cn from 'classnames';
import { useLogic } from './useLogic';
import { LIST_OF_COLORS } from '../constants';
import style from './style.module.scss';

const ColorPicker = () => {
    const { figureColor, setColor } = useLogic();
    return <div>
        <HexColorPicker color={figureColor} onChange={setColor}/>

        <div className={cn(style.value, 'd-flex justify-content-center')} style={{ borderLeftColor: figureColor }}>
            Current color is {figureColor}
        </div>

        <div className='d-flex flex-column'>
            {LIST_OF_COLORS.map(({ name, HEX }) => (
                <Button
                    key={name}
                    className='my-1'
                    variant='primary'
                    onClick={() => setColor(HEX)}>
                    {name}
                </Button>
            ))}
        </div>
    </div>;
};

export default ColorPicker;
