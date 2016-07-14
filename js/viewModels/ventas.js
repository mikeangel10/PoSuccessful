/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/**
 * Main content module
 */
define(['ojs/ojcore', 'knockout','jquery', 'ojs/ojknockout', 'ojs/ojinputtext', 
'ojs/ojbutton',  'promise','ojs/ojdatagrid', 'ojs/ojarraydatagriddatasource'],
  function(oj, ko) {
    
    function mainContentViewModel() {
        var self = this;
        self.productoBuscar=ko.observable("");
        self.clickedButton = ko.observable("No clicked yet");
        self.buttonClick = function(data, event){
            self.clickedButton(document.getElementById('producto').value);
            return true;
        }
      self.dataSource = new oj.ArrayDataGridDataSource([
        {id_Producto: 1001, productName: 'ADFPM 1001 neverending', precio: 200},
        {id_Producto: 556, productName: 'BB', precio: 200},
        {id_Producto: 10, productName: 'Administration', precio: 200},
        {id_Producto: 20, productName: 'Marketing', precio: 200},
        {id_Producto: 30, productName: 'Purchasing', precio: 200},
        {id_Producto: 40, productName: 'Human Resources1', precio: 200},
        {id_Producto: 50, productName: 'Administration2', precio: 200},
        {id_Producto: 60, productName: 'Marketing3', precio: 200},
        {id_Producto: 70, productName: 'Purchasing4', precio: 200},
        {id_Producto: 80, productName: 'Human Resources5', precio: 200},
        {id_Producto: 90, productName: 'Human Resources11', precio: 200},
        {id_Producto: 100, productName: 'Administration12', precio: 200},
        {id_Producto: 110, productName: 'Marketing13', precio: 200},
        {id_Producto: 120, productName: 'Purchasing14', precio: 200},
        {id_Producto: 130, productName: 'Human Resources15', precio: 200}], 
        {rowHeader: 'id_Producto'}
                    );
        
    }
    return new mainContentViewModel();
});
