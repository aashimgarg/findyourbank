export const getDataIfExistsInLocalStorage = (key = null) => {
	if (!key) return key;

	const data = JSON.parse(localStorage.getItem(key));

	if (!data) return null;

	const now = new Date();
	if (now.getTime() > data.expiry) {
		localStorage.removeItem(key);
		return null;
	}

	return data;
};

export const storeDataInLocalStorage = (
	key = null,
	value = null,
	totaltime = 14400000
) => {
	if (!key || !value) return false;
	if (key !== "searchCity") {
		const now = new Date();
		const data = {
			value: value,
			expiry: now.getTime() + totaltime,
		};
		localStorage.setItem(key, JSON.stringify(data));
		if (key !== "favorites")
			localStorage.setItem("searchCity", JSON.stringify({ value: key }));
	} else {
		localStorage.setItem("searchCity", JSON.stringify({ value: value }));
	}

	return true;
};

export const checkFavoriteOrNot = (ifscCode = null) => {
	if (!ifscCode) return false;
	const favoriteDataFromStorage = getDataIfExistsInLocalStorage("favorites");

	if (favoriteDataFromStorage) {
		if (typeof favoriteDataFromStorage.value === undefined) return false;

		const index = favoriteDataFromStorage.value.findIndex(
			(data) => data.ifsc === ifscCode
		);
		if (index !== -1) return true;
		else return false;
	}
};