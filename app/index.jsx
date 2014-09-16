'use strict';

var React = require('react');
var BarChart = require('./chart/chart.jsx');



var mockData = [1,2,3,4,5,6,7,8,9,20,10,11,12,13,14,15,16,17];


React.renderComponent(
  <BarChart width={600} height={300} dataSet={mockData}/>,
  document.getElementById('container')
);

console.log('Hi Gulp and Browserify!');
