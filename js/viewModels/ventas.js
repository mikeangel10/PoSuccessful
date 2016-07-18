/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/**
 * Main content module
 */
define(['ojs/ojcore', 'knockout','jquery', 'ojs/ojknockout', 'ojs/ojinputtext', 
'ojs/ojbutton',  'promise','ojs/ojdatagrid', 'ojs/ojarraydatagriddatasource', 
'ojs/ojtable', 'ojs/ojarraytabledatasource'],
  function(oj, ko) {
    
    function mainContentViewModel() {
        var self = this;
        self.productoBuscar=ko.observable("");
        self.clickedButton = ko.observable("Teclea un producto para buscar");
        self.buttonClick = function(data, event){
            self.clickedButton(document.getElementById('producto').value);
            return true;
        }
      var productosExistentes = [{idProducto: 1001, productoNotaVenta: 'ADFPM 1001 neverending', cantidad: 200, precio: 300, importe: 5},
        {idProducto: 556, productoNotaVenta: 'BB', cantidad: 200, precio: 300, importe: 5},
        {idProducto: 10, productoNotaVenta: 'Administration', cantidad: 200, precio: 300, importe: 5},
        {idProducto: 20, productoNotaVenta: 'Marketing', cantidad: 200, precio: 300, importe: 5},
        {idProducto: 30, productoNotaVenta: 'Purchasing', cantidad: 200, precio: 300, importe: 5},
        {idProducto: 40, productoNotaVenta: 'Human Resources1', cantidad: 200, precio: 300, importe: 5},
        {idProducto: 50, productoNotaVenta: 'Administration2', cantidad: 200, precio: 300, importe: 5},
        {idProducto: 60, productoNotaVenta: 'Marketing3', cantidad: 200, precio: 300, importe: 5},
        {idProducto: 70, productoNotaVenta: 'Purchasing4', cantidad: 200, precio: 300, importe: 5},
        {idProducto: 130, productoNotaVenta: 'Human Resources15', cantidad: 200, precio: 300, importe: 5}];
    self.datosExistentes = new oj.ArrayTableDataSource(productosExistentes, {idAttribute: 'idProducto'});
      var productosNotaVenta = [{idProducto: 1001, productoNotaVenta: 'ADFPM 1001 neverending', cantidad: 200, precio: 300, importe: 5},
        {idProducto: 556, productoNotaVenta: 'BB', cantidad: 200, precio: 300, importe: 5},
        {idProducto: 10, productoNotaVenta: 'Administration', cantidad: 200, precio: 300, importe: 5},
        {idProducto: 20, productoNotaVenta: 'Marketing', cantidad: 200, precio: 300, importe: 5},
        {idProducto: 30, productoNotaVenta: 'Purchasing', cantidad: 200, precio: 300, importe: 5},
        {idProducto: 40, productoNotaVenta: 'Human Resources1', cantidad: 200, precio: 300, importe: 5},
        {idProducto: 50, productoNotaVenta: 'Administration2', cantidad: 200, precio: 300, importe: 5},
        {idProducto: 60, productoNotaVenta: 'Marketing3', cantidad: 200, precio: 300, importe: 5},
        {idProducto: 70, productoNotaVenta: 'Purchasing4', cantidad: 200, precio: 300, importe: 5},
        {idProducto: 130, productoNotaVenta: 'Human Resources15', cantidad: 200, precio: 300, importe: 5}];
    self.datosNotaVenta = new oj.ArrayTableDataSource(productosNotaVenta, {idAttribute: 'idProducto'});
    
        
    }
    return new mainContentViewModel();
});
