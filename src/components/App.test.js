import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe("App ", () => {
	let app = shallow(<App />);
	
	it('renders the app component one div wrapper', () => {
		expect(app.find("div").length).toEqual(1);
	});
	
});