import React from 'react';
import Button from './index';
import {shallow} from 'enzyme';

it('renders with text', () => {
	const fn = jest.fn();
	let wrap = shallow(<Button title={'load'} onClick={fn}/>);
	expect(wrap.text()).toEqual('load');
});

it('should call onClick', () => {
	const fn = jest.fn();
	let wrap = shallow(<Button title={'load'} onClick={fn}/>);
	wrap.find('button').simulate('click');
	expect(fn).toHaveBeenCalled();
});