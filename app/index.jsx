'use strict';

var React = require('react');
var chart = require('./chart/chart.jsx');
var myChart = chart('Hi Mom!');



console.log('Hi Gulp and Browserify!');
React.renderComponent(<myChart/>, document.body);

