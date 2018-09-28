import React from 'react';
import {shallow} from 'enzyme';
import {RatesContainer} from "./index";
import Button from '../../components/common/button/index';
import RateTable from '../../components/rates/table/index';
import Modal from '../../components/common/modal/index';

describe('RateContainer', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<RatesContainer />);
	});

	it('should render button', function () {
		expect(wrapper.find(Button).length).toEqual(1);
	});
	it('should handle button click', function () {
		const spy = jest.spyOn(wrapper.instance(), 'onLoadClick');
		const fn = jest.fn();
		wrapper.setProps({
			getRates: fn
		});
		wrapper.find(Button).simulate('click');
		expect(spy).toHaveBeenCalled();
		expect(fn).toHaveBeenCalled();
	});
	it('should have loading message', function () {
		wrapper.setProps({loading: true});
		expect(wrapper.find('div.loadingMessage p').text()).toEqual('Loading...');
		expect(wrapper.find(Button).length).toEqual(0);
	});
	it('should have table with rates', function () {
		expect(wrapper.find(RateTable).length).toEqual(0);
		wrapper.setProps({
			base: "EUR",
			rates: {
				"AUD": 1.6164,
				"BGN": 1.9558
			}
		});
		expect(wrapper.find('div.baseRate').text()).toEqual('Base rate: EUR');
		expect(wrapper.find(RateTable).length).toEqual(1);
	});
	it('should have modal on error', function () {
		expect(wrapper.find(Modal).length).toEqual(0);
		wrapper.setProps({
			error: 'Error loading'
		});
		expect(wrapper.find(Modal).length).toEqual(1);
	});
});