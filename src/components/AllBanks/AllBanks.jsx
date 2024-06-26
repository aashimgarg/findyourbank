
import axios from "axios";
import React, { useState, useEffect } from "react";
import {
	getDataIfExistsInLocalStorage,
	storeDataInLocalStorage,
} from "../common/commonHelpers";
import SearchContainer from "../SearchContainer/SearchContainer";
import ShowDataContainer from "./ShowDataContainer/ShowDataContainer";
import "./AllBanks.css"

const AllBanks = ({ setDataLoading, setErrorOccurred }) => {
	const [noOfDataToShow, setNoOfDataToShow] = useState(10);
	const [firstBank, setFirstBank] = useState(0);
	const [bankData, setBankData] = useState([]);
	const [city, setCity] = useState("Mumbai");
	const [visibleBankData, setVisibleBankData] = useState([]);
	const [bankDataForReference, setBankDataForReference] = useState([]);
	
	const fetchData = async () => {
		setDataLoading(true);
		try {
			const savedData = getDataIfExistsInLocalStorage(city.toUpperCase());
            const res = city.toUpperCase();
			if (!savedData) {
				const url = `https://ea1c20ef-757e-407c-bd95-643e8f57bdce.mock.pstmn.io/banks?city=${res}`
				const results = await axios.get(url , {
					headers: {
					Accept: 'application/json'
						}
				    }
				);
				storeDataInLocalStorage(city.toUpperCase(), results.data);
				setDataLoading(false);
				setBankData(results.data);
				setBankDataForReference(results.data);
				setVisibleBankData(results.data.slice(0, noOfDataToShow));
			} else {
				setDataLoading(false);
				setBankData(savedData.value);
				setBankDataForReference(savedData.value);
				storeDataInLocalStorage("searchCity", city.toUpperCase());
				setVisibleBankData(savedData.value.slice(0, noOfDataToShow));
			}
		} catch (err) {
			setDataLoading(false);
			setBankData([]);
			setErrorOccurred(true);
		}
	};

	
	const findLastIndex = () => {
		if (firstBank + noOfDataToShow < bankData.length)
			return firstBank + noOfDataToShow;
		else return bankData.length;
	};

	const onLeftClick = () => {
		if (firstBank === 0) {
			return;
		}
		const startIndex =
			firstBank - noOfDataToShow <= 0 ? 0 : firstBank - noOfDataToShow;
		setFirstBank(startIndex);
		const endIndex = startIndex + noOfDataToShow;
		setVisibleBankData(bankData.slice(startIndex, endIndex));
		window.scrollTo(0, 0);
	};

	const onRightClick = () => {
		if (firstBank + noOfDataToShow >= bankData.length) {
			return;
		}
		const startIndex = firstBank + noOfDataToShow;

		setFirstBank(startIndex);
		const endIndex =
			startIndex + noOfDataToShow > bankData.length
				? bankData.length
				: startIndex + noOfDataToShow;
		setVisibleBankData(bankData.slice(startIndex, endIndex));
		window.scrollTo(0, 0);
	};


	const rowsPerPageChange = (e) => {
		if (!e?.target?.value) {
			setNoOfDataToShow(10);
			return;
		}
		if (e.target.value > 100) setNoOfDataToShow(100);
		else if (e.target.value < 1) setNoOfDataToShow(1);
		else setNoOfDataToShow(parseInt(e.target.value));
	};
	useEffect(() => {
		const searchedCityStoreInLocalStorage =
			getDataIfExistsInLocalStorage("searchCity");
		if (searchedCityStoreInLocalStorage) {
			setCity(searchedCityStoreInLocalStorage.value);
		}
	}, []);

	useEffect(() => {
		fetchData();
	}, [city]);

	useEffect(() => {
		setVisibleBankData(bankData.slice(0, noOfDataToShow));
		setFirstBank(0);
	}, [bankData, noOfDataToShow]);

	return (
		<div className="all-banks">
			<SearchContainer
				city={city}
				setCity={setCity}
				bankData={bankData}
				setBankData={setBankData}
				bankDataForReference={bankDataForReference}
			/>
			{visibleBankData.length > 0 ? (
				<>
					<ShowDataContainer visibleBankData={visibleBankData} />
					<div className="footer">
						<span className="no-of-rows">
						Row{noOfDataToShow > 1 ? "s" : ""} per page:{" "}
							<input
								className="rows-per-page-input"
								type="number"
								value={noOfDataToShow}
								onChange={(e) => rowsPerPageChange(e)}
							/>
						</span>
						<span className="left-arrow" onClick={onLeftClick}>
							&lt;{" "}
						</span>
						<span className="page-showing">
							{firstBank + 1}-{findLastIndex()} of {bankData.length}{" "}
						</span>
						<span className="right-arrow" onClick={onRightClick}>
							&gt;{" "}
						</span>
					</div>
				</>
			) : (
				<div className="no-data-found">No Data Found</div>
			)}
		</div>
	);
};

export default AllBanks;