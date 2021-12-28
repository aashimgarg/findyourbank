import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AllBanks from "../AllBanks/AllBanks";

const SearchContainer = () => {
    const [searchCategory, setSearchCategory] = useState("");
    const [city, setCity] = useState("");
    const [query, setQuery] = useState("");

    const handleChange = (e) => {
        if (!searchCategory) {
            return;
        }
        const value = e.target.value;
        setQuery(value);
    };

    return (
        <div>
            <h5>Search Parametres</h5>
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
                                    <option value="KOLKATA">Kolkata</option>
                                    <option value="PUNE">Pune</option>
                                    <option value="BANGALORE">Bangalore</option>
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
                                    <option value="" disabled>
                                        Select Category
                                    </option>
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

        </div>

    );
}

export default SearchContainer;