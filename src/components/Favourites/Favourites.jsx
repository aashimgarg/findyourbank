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
                      
                {favoritesData.map((data) => (
                  <div  className="bank-details">
                    <div style={{width:'600px'}} className="details details-data">
                      <div className="bank-name padding">
                        <div className="title">Bank Name :</div> {data.bank_name}
                      </div>
                      <div className="bank-ifsc padding">
                        <div className="title">IFSC Code :</div> {data.ifsc}
                      </div>
                      <div className="bank-id padding">
                        <div className="title">Bank Id :</div> {data.bank_id}
                      </div>
                      <div className="bank-branch padding">
                        <div className="title">Branch :</div> {data.branch}
                      </div>
                      <div className="bank-address padding">
                        <div className="title">Address :</div> {data.address}
                      </div>
                      <div className="bank-city padding">
                        <div className="title">City :</div> {data.city}
                      </div>
                      <div className="bank-district padding">
                        <div className="title">District :</div> {data.district}
                      </div>
                      <div className="bank-state padding">
                        <div className="title">Bank Name :</div> {data.state}
                      </div>
                    </div>
                </div>
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