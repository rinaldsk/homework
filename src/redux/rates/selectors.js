export function selectRates(state) {
	return state.rates.rates;
}
export function selectBaseRate(state) {
	return state.rates.baseRate;
}
export function selectLoading(state) {
	return state.rates.loading;
}
export function selectLoadingError(state) {
	return state.rates.error;
}