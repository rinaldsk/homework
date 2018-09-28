import React from 'react';
import Modal from './index';
import {shallow} from 'enzyme';

it('renders with text', () => {
	const fn = jest.fn();
	let wrapper = shallow(<Modal text={'Error loading'} onCloseClick={fn}/>);
	expect(wrapper.find('p').text()).toEqual('Error loading');
});

it('should have div with modalWindow class', function () {
	const fn = jest.fn();
	let wrapper = shallow(<Modal text={'Error loading'}  onCloseClick={fn}/>);
	expect(wrapper.find('div.modalWindow').length).toEqual(1);
});

it('should call onCloseClick', () => {
	const fn = jest.fn();
	let wrapper = shallow(<Modal text={'Error loading'} onCloseClick={fn}/>);
	wrapper.find('Button').simulate('click');
	expect(fn).toHaveBeenCalled();
});