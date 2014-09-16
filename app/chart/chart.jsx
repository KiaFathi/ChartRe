'use strict';

var React = require('react');

// Hi
var chart = function(data){
  return React.createClass({
    render: function(){
      return (
       <p>{data}</p>
        )
    }
  });
};

module.exports = chart;