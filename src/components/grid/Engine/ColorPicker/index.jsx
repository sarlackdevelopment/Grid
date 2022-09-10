import React, { useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import { Button, Stack } from 'react-bootstrap';
import './style.module.scss';

const ColorPicker = () => {
    const [color, setColor] = useState('#b32aa9');
    return <Stack direction='horizontal' gap={3}>
        <div className='border'>
            <HexColorPicker color={color} onChange={setColor} />

            <div className="value" style={{ borderLeftColor: color }}>
                Current color is {color}
            </div>

            <div className='d-flex flex-column'>
                <Button className='my-1' variant='primary' onClick={() => setColor('#c6ad23')}>Gold</Button>
                <Button className='my-1' variant='primary' onClick={() => setColor('#556b2f')}>Green</Button>
                <Button className='my-1' variant='primary' onClick={() => setColor('#207bd7')}>Blue</Button>
            </div>
        </div>
    </Stack>;
};

export default ColorPicker;
