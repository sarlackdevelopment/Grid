import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useLogic } from './useLogic';
import ColorPicker from '../ColorPicker';

const ModalEditor = () => {
    const { isEditorShown, closeEditor } = useLogic();
    return (
        <Modal show={isEditorShown} onHide={closeEditor}>
            <Modal.Header closeButton>
                <Modal.Title>Editor</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ColorPicker />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeEditor}>
                        Close
                </Button>
                <Button variant="primary" onClick={closeEditor}>
                        Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalEditor;
