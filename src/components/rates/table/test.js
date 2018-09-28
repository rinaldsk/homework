import React from 'react';
import RateTable from './index';
import {shallow} from 'enzyme';

describe('table structure and data', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<RateTable data={{
			"AUD": 1.6164,
			"BGN": 1.9558
		}}/>);
	});
	it('should have th in table head row', () => {
		expect(wrapper.find('thead tr').childAt(0).type()).toEqual('th');
		expect(wrapper.find('thead tr').childAt(1).type()).toEqual('th');
	});
	it('should have text in table head', function () {
		expect(wrapper.find('thead tr').childAt(0).text()).toEqual('Currency');
		expect(wrapper.find('thead tr').childAt(1).text()).toEqual('Rate');
	});
	it('should have rendered data in table body', function () {
		expect(wrapper.find('tbody tr').length).toEqual(2);
		expect(wrapper.find('tbody tr').first().childAt(0).text()).toEqual('AUD');
		expect(wrapper.find('tbody tr').first().childAt(1).text()).toEqual("1.6164");
	});
});