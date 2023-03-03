import React from "react";
import Modal from "react-bootstrap/Modal";
import "../App.css"

const SkillsModal = (props) => {
    return (
        <>
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton className="px-md-5 py-md-4">
                    <Modal.Title id="contained-modal-title-vcenter" >
                     {props.popupheading}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="px-md-5 py-md-4 mt-md-1">
                    <p>Servvice with more than 6 years of experience Providing quality work to clients and companies</p>
                     <div>
                        <ul className="skill_modal_description">
                            <li>I develop the user interface</li>
                            <li>Web page development</li>
                            <li>I create UX element interactions</li>
                            <li>Desgin and mockups of product for companies</li>
                        </ul>
                     </div>
                </Modal.Body>
            </Modal>
        </>
    )
} 

export default SkillsModal;