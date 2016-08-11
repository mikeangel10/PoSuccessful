define(['ojs/ojcore', 'knockout','ojs/ojselectcombobox','ojs/ojknockout', 'promise','ojs/ojchart','ojs/ojinputtext',
    'ojs/ojbutton'],
  function(oj, ko) {
   // Class to represent a row in the producto reservations grid
    function ProductoReservation(initialArticulo) {
        var self = this;
        self.articulo = ko.observable(initialArticulo);
        self.idProducto=self.articulo().idProducto;
        self.productoTabla = self.articulo().productoTabla;
        self.cantidad = self.articulo().cantidad;
        self.precioCompra = ko.computed(function() {
            var price = self.articulo().precioCompra;
            return price ? "$" + price.toFixed(2) : "0";        
        });
        self.precioVenta = ko.computed(function() {
            var price = self.articulo().precioVenta;
            return price ? "$" + price.toFixed(2) : "0";        
        });
    }
   function mainContentViewModel() {
    var self = this;
    self.producto="";
    self.precioCompra="";
    self.precioVenta="";
    self.cantidad="";
    self.productoBuscar="";
    self.buscarProducto = function(data, event){
           self.clickedButton(document.getElementById('productoBuscar').value);
           return true;
    };
    // Non-editable catalog data - would come from the server
    self.availableProducts = [
        { idProducto:1,productoTabla:"Devocionarios", precioCompra: 12.5, precioVenta:0,cantidad:2 },
        { idProducto:2,productoTabla:"Cruces", precioCompra: 13.6, precioVenta:34.95,cantidad:3},
        { idProducto:3,productoTabla:"Oraciones", precioCompra: 22.7, precioVenta:290,cantidad:4}]; 
    // Editable data
    self.productos = ko.observableArray([
        new ProductoReservation(self.availableProducts[0]),
        new ProductoReservation(self.availableProducts[1]),
        new ProductoReservation(self.availableProducts[2])
    ]);
    // Operations
    self.addProducto = function() {
        self.productos.push(new ProductoReservation({idProducto:0,productoTabla:self.producto, precioCompra: Number(self.precioCompra), precioVenta:Number(self.precioVenta),cantidad:Number(self.cantidad)}));
        alert("Added");
        document.getElementById('producto').value="";
        document.getElementById('precioCompra').value="";
        document.getElementById('precioVenta').value="";
        document.getElementById('cantidad').value="";
    };
    self.removeProducto = function(producto) { self.productos.remove(producto) };
    self.totalCompra = ko.computed(function() {
        var total = 0;
        for (var i = 0; i < self.productos().length; i++)
            total += self.productos()[i].articulo().precioCompra;
        return total;
    });
    self.totalVenta = ko.computed(function() {
        var total = 0;
        for (var i = 0; i < self.productos().length; i++)
            total += self.productos()[i].articulo().precioVenta;
        return total;
    });
    
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