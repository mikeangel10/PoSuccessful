define(['ojs/ojcore', 'knockout', 'ojs/ojdatetimepicker','ojs/ojselectcombobox','ojs/ojbutton','ojs/ojknockout', 'promise', 'ojs/ojtable', 'ojs/ojarraytabledatasource','ojs/ojchart',],
  function(oj, ko) {
   function mainContentViewModel() {
    var self = this;
    self.valueText="Bienvenido al mundo del JET de Oracle";
    self.value = ko.observable(oj.IntlConverterUtils.dateToLocalIso(new Date(2013, 0, 1)));
    this.isRequired = ko.observable(true);
    self.clickedButton = ko.observable("(None clicked yet)");
    self.buttonClick = function(data, event){
        self.clickedButton(event.currentTarget.id);
        return true;
    }
    var deptArray = [{DepartmentId: 1001, DepartmentName: 'ADFPM 1001 neverending', LocationId: 200, ManagerId: 300},
        {DepartmentId: 556, DepartmentName: 'BB', LocationId: 200, ManagerId: 300},
        {DepartmentId: 10, DepartmentName: 'Administration', LocationId: 200, ManagerId: 300},
        {DepartmentId: 20, DepartmentName: 'Marketing', LocationId: 200, ManagerId: 300},
        {DepartmentId: 30, DepartmentName: 'Purchasing', LocationId: 200, ManagerId: 300},
        {DepartmentId: 40, DepartmentName: 'Human Resources1', LocationId: 200, ManagerId: 300},
        {DepartmentId: 50, DepartmentName: 'Administration2', LocationId: 200, ManagerId: 300},
        {DepartmentId: 60, DepartmentName: 'Marketing3', LocationId: 200, ManagerId: 300},
        {DepartmentId: 70, DepartmentName: 'Purchasing4', LocationId: 200, ManagerId: 300},
        {DepartmentId: 80, DepartmentName: 'Human Resources5', LocationId: 200, ManagerId: 300},
        {DepartmentId: 90, DepartmentName: 'Human Resources11', LocationId: 200, ManagerId: 300},
        {DepartmentId: 100, DepartmentName: 'Administration12', LocationId: 200, ManagerId: 300},
        {DepartmentId: 110, DepartmentName: 'Marketing13', LocationId: 200, ManagerId: 300},
        {DepartmentId: 120, DepartmentName: 'Purchasing14', LocationId: 200, ManagerId: 300},
        {DepartmentId: 130, DepartmentName: 'Human Resources15', LocationId: 200, ManagerId: 300}];
    self.datasource = new oj.ArrayTableDataSource(deptArray, {idAttribute: 'DepartmentId'});
    
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