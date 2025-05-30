import React from "react";
import { Modal, Button, ModalHeader, ModalBody } from "react-bootstrap";

export const DeleteModal = ({ show, handleClose, deleteModalFunction }: any) => {
    return (
        <React.Fragment>
            <Modal show={show} onHide={handleClose} id="removeCartModal" className="fade zoomIn" dialogClassName="modal-dialog-centered">
                <ModalHeader closeButton>
                </ModalHeader>
                <ModalBody className="p-md-5">
                    <div className="text-center">
                        <div className="text-danger">
                            <i className="bi bi-trash display-5"></i>
                        </div>
                        <div className="mt-4">
                            <h4>Are you sure ?</h4>
                            <p className="text-muted mx-4 mb-0">Are you sure you want to remove this product ?</p>
                        </div>
                    </div>
                    <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
                        <Button type="button" variant="light" className="btn w-sm" onClick={handleClose}>Close</Button>
                        <Button type="button" variant="danger" className="btn w-sm btn-hover" id="delete-record" onClick={deleteModalFunction}>Yes, Delete It!</Button>
                    </div>
                </ModalBody>
            </Modal>
        </React.Fragment>
    );
}

export const ConfirmOrder = ({ show, handleClose }: any) => {
    return (
        <React.Fragment>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <div className="mt-2 text-center">
                        <i className="bi bi-shop display-6"></i>
                        <div className="mt-4 pt-2 mx-4 mx-sm-5">
                            <h4>Confirm your order ?</h4>
                            <p className="text-muted mx-4 mb-0">Are you sure you want to confirm order ?</p>
                        </div>
                    </div>
                    <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
                        <Button type="button" className="btn w-sm btn-ghost-danger" onClick={handleClose}><i className="bi bi-x-lg align-baseline me-1"></i> Close</Button>
                        <Button type="button" variant="success" className="btn w-sm" onClick={handleClose}>Yes, Confirm Order</Button>
                    </div>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    )
}