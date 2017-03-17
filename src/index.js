import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import create2dArray from './utils/map/create2dArray.js';
import Viewport from './components/Viewport';

ReactDOM.render(
	<Viewport map={create2dArray({rows: 10, cols: 10, fill:"wall"})} />,
  document.getElementById('root')
);
