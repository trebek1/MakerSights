import PropTypes from 'prop-types';
import React from 'react';

const Chart = props => {
  	
	const chart = new CanvasJS.Chart("chartContainer", {
		animationEnabled: true,
		theme: "light2",
		data: [{        
			type: "column",  
			legendMarkerColor: "grey",
			dataPoints: props.data
		}]
	});
	chart.render();
  return (<div id="chartContainer"></div>

)};

export default Chart;
