import React from 'react';
import './viewport.css';

export default ({ map }) => (
	<div className="map">
		{
			map.map( (row, rowKey) => (
				<div className="row" key={rowKey}>
				{
					row.map( (cell, cellKey) => (
						<div className={cell} key={`${rowKey}${cellKey}`}> </div>
					))
				}
				</div>
			))
		}
	</div>
);
