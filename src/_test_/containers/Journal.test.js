import React from 'react';
import Router from "../../containers/Router";
import Journal from "../../containers/Journal";
import { shallow, mount } from 'enzyme';
import { BrowserRouter, Route, Switch, MemoryRouter } from "react-router-dom";

var wrapper
describe('Layout', () => {

	beforeEach(function() {
		wrapper = shallow(<App />);
	});

	it('Containers a title and sharable-link area', () => {
		expect(wrapper.find('.header').length).toBe(1);
		expect(wrapper.find('.title').length).toBe(1);
		expect(wrapper.find('.sharable-link').length).toBe(1);
	});
})