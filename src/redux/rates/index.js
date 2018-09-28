const LOAD = 'homework/rates/LOAD';
const SET = 'homework/rates/SET';
const LOAD_ERROR = 'homework/rates/LOAD_ERROR';
const REMOVE_ERROR = 'homework/rates/REMOVE_ERROR';

export const ActionTypes = {
	LOAD,
	SET,
	LOAD_ERROR,
	REMOVE_ERROR
};

export const initialState = {
	loading: false,
	rates: {},
	baseRate: null,
	error: ''
};

export default function (state = initialState, action) {
	switch (action.type) {
		case LOAD:
			return {
				...state,
				loading: true
			};
		case SET:
			return {
				...state,
				loading: false,
				rates: action.rates,
				baseRate: action.baseRate
			};
		case LOAD_ERROR:
			return {
				...state,
				loading: false,
				error: action.error
			};
		case REMOVE_ERROR:
			return {
				...state,
				error: ''
			};
		default:
			return state;
	}
}

export function loadRates() {
	return {
		type: LOAD
	}
}

export function setRates(rates, baseRate) {
	return {
		type: SET,
		rates,
		baseRate
	}
}

export function errorLoadingRates(error) {
	return {
		type: LOAD_ERROR,
		error
	}
}

export function removeError() {
	return {
		type: REMOVE_ERROR
	}
}

export function getRates() {
	return (dispatch) => {
		dispatch(loadRates());
		fetch('https://api.exchangeratesapi.io/latest')
			.then(re => {
				if (!re.ok) {
					throw new Error('Error loading');
				}
				return re.json();
			})
			.then(re => {
				if (!re.rates || !re.base) {
					throw new Error('Error loading');
				}
				dispatch(setRates(re.rates, re.base));
			})
			.catch(error => {
				dispatch(errorLoadingRates(error.message));
			})
	}
}