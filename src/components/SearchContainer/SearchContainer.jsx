import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";

const SearchContainer = ({
	city,
	setCity,
	setBankData,
	bankDataForReference,
}) => {
	const [searchCategory, setSearchCategory] = useState("");
	const [query, setQuery] = useState("");

	let searchTyping = useRef();
	const searchData = (value) => {
		if (!value) {
			setBankData(bankDataForReference);
		}

		const searchedData = bankDataForReference.filter((data) => {
			if (
				data[searchCategory]
					.toString()
					.toLowerCase()
					.includes(value.toString().toLowerCase())
			) {
				return data;
			}
			return false;
		});

		setBankData(searchedData);
	};

	const handleChange = (e) => {
		if (!searchCategory) {
			return;
		}
		const value = e.target.value;
		setQuery(value);

		clearTimeout(searchTyping.current);
		searchTyping.current = setTimeout(() => {
			searchData(value);
		}, 500);
	};

	useEffect(() => {
		if (searchCategory !== "") setSearchCategory("");
		if (query !== "") setQuery("");
	}, [bankDataForReference]);

	useEffect(() => {
		return () => {
			clearTimeout(searchTyping);
		};
	}, []);

	return (
		<div className="search-container">
			<div className="form-container">
				<Container>
					<Row className="justify-content-md-center">
						<Col md={3}>
							<select
								className="select-city"
								value={city}
								onChange={(e) => setCity(e.target.value)}
							>
								<option value="MUMBAI">Mumbai</option>
                                <option value="BANGALORE">Bangalore</option>
								<option value="KOLKATA">Kolkata</option>
								<option value="PUNE">Pune</option>
								<option value="DELHI">Delhi</option>
							</select>
						</Col>
						<Col md={3}>
							<select
								className="select-category"
								value={searchCategory}
								onChange={(e) => {
									setSearchCategory(e.target.value);
									setQuery("");
								}}
							>
								<option value="">Select Category</option>
								<option value="bank_name">Bank Name</option>
								<option value="ifsc">IFSC</option>
								<option value="branch">Branch</option>
								<option value="bank_id">Bank Id</option>
								<option value="address">Address</option>
							</select>
						</Col>
						<Col md={6}>
							<input
								className="search-bar"
								type="text"
								value={query}
								onChange={(e) => handleChange(e)}
								placeholder="Search..."
								disabled={searchCategory.length === 0}
							/>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
};

export default SearchContainer;