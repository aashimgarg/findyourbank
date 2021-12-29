
import React, { useState } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import Header from "./Header/Header";
import Loading from "./loading/loading";
import AllBanks from "./AllBanks/AllBanks";
import Favorites from "./Favourites/Favourites";
import BankDetails from "./BankDetails/BankDetails";
import NotFound from "./not-found/NotFound";
import ErrorContainer from "./error-container/ErrorContainer";

const MainContainer = () => {
	const [dataLoading, setDataLoading] = useState(false);
	const [errorOccurred, setErrorOccurred] = useState(false);

	return (
		<div>
			<Router>
				<Header />
				 <Loading show={dataLoading} /> 
				{errorOccurred && (
					<ErrorContainer
						errorOccurred={errorOccurred}
						setErrorOccurred={setErrorOccurred}
					/>
				)}
				<Switch>
					<Route exact path="/" render={() => (
							<AllBanks
								setDataLoading={setDataLoading}
								setErrorOccurred={setErrorOccurred}
							/>
						)} />
					<Route
						path="/all-banks"
						render={() => (
							<AllBanks
								setDataLoading={setDataLoading}
								setErrorOccurred={setErrorOccurred}
							/>
						)}
					/>
					<Route path="/favorites" render={() => <Favorites />} />

					<Route
						path="/bank-details/:ifscCode"
						render={() => (
							<BankDetails
								setDataLoading={setDataLoading}
								setErrorOccurred={setErrorOccurred}
							/>
						)}
					/>

					<Route path="*" render={() => <NotFound />} />
				</Switch>
			</Router>
		</div>
	);
};

export default MainContainer;