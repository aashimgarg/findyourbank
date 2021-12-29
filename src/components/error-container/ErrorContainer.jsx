import { Modal, Button } from "react-bootstrap";
import React from "react";

const ErrorContainer = ({ errorOccurred, setErrorOccurred }) => {
	return (
		<Modal show={errorOccurred} onHide={() => setErrorOccurred(false)}>
			<Modal.Header closeButton>
				<Modal.Title>Error Occurred</Modal.Title>
			</Modal.Header>
			<Modal.Body>Oops! Something went wrong!</Modal.Body>
			<Modal.Footer>
				<Button variant="danger" onClick={() => setErrorOccurred(false)}>
					Okay!
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default React.memo(ErrorContainer);