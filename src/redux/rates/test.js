import {setRates, errorLoadingRates, ActionTypes, initialState} from "./index";
import reducer from './index';

describe('actions', () => {
	it('should create action to set rates', function () {
		const baseRate = 'EUR';
		const rates = {
			"AUD": 1.6164,
			"BGN": 1.9558
		};
		const expectedAction = {
			type: ActionTypes.SET,
			rates,
			baseRate
		};
		expect(setRates(rates, baseRate)).toEqual(expectedAction);
	});
	it('should create action for load error', function () {
		const error = 'Loading error';
		const expectedAction = {
			type: ActionTypes.LOAD_ERROR,
			error
		};
		expect(errorLoadingRates(error)).toEqual(expectedAction);
	});
});

describe('rates reducer', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual(initialState)
	});
	it('should handle LOAD', function () {
		expect(reducer(undefined, {
			type: ActionTypes.LOAD
		})).toEqual({
			loading: true,
			rates: {},
			baseRate: null,
			error: ''
		})
	});
	it('should handle SET', function () {
		expect(reducer(undefined, {
			type: ActionTypes.SET,
			rates: {
				"AUD": 1.6164,
				"BGN": 1.9558
			},
			baseRate: 'EUR'
		})).toEqual({
			loading: false,
			rates: {
				"AUD": 1.6164,
				"BGN": 1.9558
			},
			baseRate: 'EUR',
			error: ''
		})
	});
	it('should handle LOAD ERROR', function () {
		expect(reducer({
			loading: true,
			rates: {},
			baseRate: null,
			error: ''
		}, {
			type: ActionTypes.LOAD_ERROR,
			error: 'Load error'
		})).toEqual({
			loading: false,
			rates: {},
			baseRate: null,
			error: 'Load error'
		})
	});
	it('should handle REMOVE ERROR', function () {
		expect(reducer({
			loading: false,
			rates: {},
			baseRate: null,
			error: 'Load error'
		}, {
			type: ActionTypes.REMOVE_ERROR
		})).toEqual({
			loading: false,
			rates: {},
			baseRate: null,
			error: ''
		})
	});
});