define(['ojs/ojcore', 'knockout','ojs/ojselectcombobox','ojs/ojknockout', 'promise','ojs/ojchart',],
  function(oj, ko) {
   function mainContentViewModel() {
    var self = this;
    self.chartType = ko.observableArray(["line"]);
    self.chartTypes = ko.observableArray([{value: 'line', label: 'Line'}, {value: 'pie', label: 'Pie'}, {value: 'bar', label: 'Bar'}, {value: 'area', label: 'Area'}]);
    self.selectionValue = ko.observable('Nothing selected');
    self.groupDataSeries = ko.observableArray(["Amy", "Gary", "Kris", "Paul", "Marge"]);
    self.seriesData = ko.observableArray([{name: "Build", items: [1, 0, 0, 2, 4]},
        {name: "Code Revew", items: [0, 10, 1, 3, 8]},
        {name: "Core", items: [4, 5, 3, 0, 1]},
        {name: "Deployment", items: [0, 3, 1, 1, 5]},
        {name: "Source Browsing", items: [0, 5, 2, 0, 2]},
        {name: "Tasks", items: [0, 3, 1, 3, 4]},
        {name: "Wiki", items: [1, 2, 3, 2, 1]}]);
    self.changeHandler = function(event, data) {
         self.chartType(data.value[0]);
    };
  }
  return new mainContentViewModel();
});