import React from 'react';
import { Modal, Button, Stack } from 'react-bootstrap';
import { useLogic } from './useLogic';
import ColorPicker from '../ColorPicker';
import Dashboard from '../Dashboard';

const ModalEditor = () => {
    const {
        isEditorShown,
        closeEditor,
        saveChanges,
        xCoordinate,
        yCoordinate,
        width,
        height
    } = useLogic();
    return (
        <Modal show={isEditorShown} onHide={closeEditor}>
            <Modal.Header closeButton>
                <Modal.Title>Editor</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Stack className='justify-content-center' direction='horizontal' gap={3}>
                    <Dashboard />
                    <div className="vr" />
                    <ColorPicker />
                </Stack>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeEditor}>
                    Close
                </Button>
                <Button
                    disabled={xCoordinate === 0 || yCoordinate === 0 || width === 0 || height === 0}
                    variant="primary"
                    onClick={saveChanges}
                >
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalEditor;
