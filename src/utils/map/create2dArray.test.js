import create2dArray from './create2dArray.js';

describe('create2dArray', () => {

	it('renders the correct number of rows', ()=> {
		const map = create2dArray({rows: 10, cols: 10, fill: 'wall'});
		expect(map.length).toEqual(10);
	});

	it('renders the correct number of cols', ()=> {
		const map = create2dArray({rows: 10, cols: 10, fill: 'wall'});
		expect(map[0].length).toEqual(10);
	});

	it('the content of a col is equal to the given fill', ()=> {
		const map = create2dArray({rows: 10, cols: 10, fill: 'wall'});
		expect(map[0][0]).toEqual('wall');
	});

});
