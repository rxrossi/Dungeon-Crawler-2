import React from 'react';
import { shallow } from 'enzyme';

import Viewport from './Viewport';
import './viewport.css';
import create2dArray from '../utils/map/create2dArray';

describe('Map component', () => {

	//Setup for tests

	const map = create2dArray({rows: 10, cols: 10, fill: "wall"});
	const component = shallow( <Viewport map={map} /> );

	describe('Check for classes', () => {

		it('the wrapper has the class viewport', ()=> {
			expect(component.hasClass('viewport')).toEqual(true);
		});

		it('the the children of the wrapper has the class row', ()=> {
			expect(component.children().at(0).hasClass('row')).toEqual(true);
		});

	});

	describe('Shows the correct number of Rows and Cols', () => {

		it('Test the number of rows', ()=> {
				const rows = component.find('.row');
				expect(rows.length).toEqual(10);
		});

		it('Test the number of cols on the first row', ()=> {
			const cols = component.find('.row').at(0).children();
			expect(cols.length).toEqual(10);
			console.log(cols.at(0).html())
		});

	});


});
