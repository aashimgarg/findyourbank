import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { getDataIfExistsInLocalStorage } from "../common/commonHelpers";
import BankCard from "../AllBanks/ShowDataContainer/BankCard";
import './Favourites.css';

const Favorites = () => {
  const [favoritesData, setFavoritesData] = useState(false);
  useEffect(() => {
    const data = getDataIfExistsInLocalStorage("favorites");

    if (data?.value.length > 0) {
      setFavoritesData(data.value);
    }
  }, []);

  return (
    <div className="favorite-data-container">
      <div className="container-fluid">
        
        <Container>
          <Row >
            {favoritesData && (
              <>
                <h3 style={{paddingLeft:'0px' ,paddingBottom:'10px'}}>Favorites!</h3>   
                      
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
                    <Row className="card-heading">Address</Row>
                  </Col>
                  <div style={{margin:'9px'}}></div>
                {favoritesData.map((data) => (
                  <BankCard info={data} key={data.ifsc} />
                ))}
              </>
            )}
            {!favoritesData && (
              <Col md={12}>
                <h3>No favorites added!</h3>
              </Col>
            )}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Favorites;