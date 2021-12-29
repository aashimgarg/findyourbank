import classNames from "classnames";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { checkFavoriteOrNot } from "../../common/commonHelpers";
import "../AllBanks.css"

const BankCard = ({ info }) => {
	const processIfscCode = (ifsc) => {
		const processedIfsc = ifsc.slice(0, 4);
		return processedIfsc + "XXXXXXX";
	};

	return (
		<Col
			md={12}
			className={classNames("bank-card", {
				"marked-favorite": checkFavoriteOrNot(info.ifsc),
			})}
		>
			<Link to={`/bank-details/${info.ifsc}`}>
				<Row className="justify-content-md-center">
					<Col md={3}>				
						<Row className="card-message"> {info.bank_name}</Row>
					</Col>
					<Col md={2}>		
						<Row className="card-message">{processIfscCode(info.ifsc)}</Row>
					</Col>
					<Col md={2}>		
						<Row className="card-message">{info.branch}</Row>
					</Col>
					<Col md={1}>		
						<Row className="card-message">{info.bank_id}</Row>
					</Col>
					<Col md={4}>		
						<Row className="card-message">{info.address}</Row>
					</Col>
				</Row>
			</Link>
		</Col>
	);
};

export default BankCard;