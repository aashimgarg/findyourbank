import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../AllBanks.css"

import BankCard from "./BankCard";

const ShowDataContainer = ({
	visibleBankData
}) => {
	return (
		<div className="container-fluid">
			{" "}
			<Container>
				<Row className="justify-content-md-center">		
						<Col md={3}>
							<Row className="card-heading">Bank Name</Row>
						</Col>
						<Col md={2}>
							<Row className="card-heading">IFSC</Row>
						</Col>
						<Col md={2}>
							<Row className="card-heading">Branch</Row>
						</Col>
						<Col md={1}>
							<Row className="card-heading">Bank Id</Row>
						</Col>
						<Col md={4} >
							<Row  className="card-heading">Address</Row>
						</Col>
					  <div style={{margin:'9px'}}></div>
					{visibleBankData.length > 0 &&
						visibleBankData.map((info, index) => (
							<BankCard info={info} key={index} />
						))}
				</Row>
			</Container>
		</div>
	);
};

export default ShowDataContainer;