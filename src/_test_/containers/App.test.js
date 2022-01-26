import React from 'react';
import Router from "../../containers/Router";
import App from "../../containers/App";
import { shallow, mount } from 'enzyme';
import { BrowserRouter, Route, Switch, MemoryRouter } from "react-router-dom";

var wrapper
describe('Layout', () => {
	beforeEach(function() {
		wrapper = mount(
				<MemoryRouter initialEntries={['/']} >
					<App />
				</MemoryRouter>
		);
	});

	it('Containers a title and sharable-link area', () => {
		console.log(wrapper.debug());
	});
})