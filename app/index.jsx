'use strict';

var React = require('react');
var BarChart = require('./chart/BarChart.jsx');
console.log('Hi Gulp and Browserify!');


var mockData = [10,2,23,4,5,12,7,8,9,20,10,11,12,15,10,15,16,17];

React.renderComponent(
  <BarChart width={600} height={300} dataSet={mockData}/>,
  document.getElementById('BCcontainer')
);
