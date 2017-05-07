import React from 'react';
import ReactDOM from 'react-dom';
import Filterer from './Filterer';
const $ = window.$;

$.fn.filterer = function(config){

  config.operators = [
    {
      name: "contains",
      types: ["string"]
    },{
      name: "does not contain",
      types: ["string"]
    },
    {
      name: "is",
      types: ["string", 'number']
    },
    {
      name: "is not",
      types: ["string", 'number']
    },
    {
      name: "begins with",
      types: ["string"]
    },
    {
      name: "ends with",
      types: ["string"]
    },
    {
      name: "greater than",
      types: ["number"]
    },
    {
      name: "less than",
      types: ["number"]
    },
  ];

  config.classes = Object.assign({}, config.classes, {
    plusIcon: 'fa fa-plus',
    minusIcon: 'fa fa-minus',
    filterLineRow: 'form-group',
    filterLineParameter: 'col-sm-4',
    filterLineOperator: 'col-sm-3',
    filterLineValue: 'col-sm-5',
    filterLineInput: 'form-control',
    filterLineLabelRow: 'row',
    filterLineLabelCondition: 'col-sm-10',
    filterLineLabelControls: 'col-sm-2 text-right',
  });


  console.log(config);
  this.each(function(){
    ReactDOM.render(
      <Filterer id="filterer" config={config} />,
      this
    );
  });
}

if(window.wcomartin_filterer_demo){
  const Config = {
    parameters: [
      {"name": "Title", "type": "string", "value": "title"},
      {"name": "Year", "type": "number", "value": "year"}
    ],
    conditions: [
      {coefficient: "year", operator: "is", value: ""},
      {coefficient: "title", operator: "begins with", value: ""}
    ]
  };
  Config.updateConditions = function(conditions) {
    console.log(conditions);
  };
  $('#root').filterer(Config);
}

