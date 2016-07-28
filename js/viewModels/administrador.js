define(['ojs/ojcore', 'knockout','ojs/ojselectcombobox','ojs/ojknockout', 'promise','ojs/ojchart'],
  function(oj, ko) {
   // Class to represent a row in the seat reservations grid
    function SeatReservation(name, initialMeal) {
        var self = this;
        self.name = name;
        self.meal = ko.observable(initialMeal);
        self.formattedPrice = ko.computed(function() {
            var price = self.meal().price;
            return price ? "$" + price.toFixed(2) : "None";        
        });
    }
   function mainContentViewModel() {
    var self = this;
    // Non-editable catalog data - would come from the server
    self.availableMeals = [
        { mealName: "Standard (sandwich)", price: 0 },
        { mealName: "Premium (lobster)", price: 34.95 },
        { mealName: "Ultimate (whole zebra)", price: 290 }]; 
    // Editable data
    self.seats = ko.observableArray([
        new SeatReservation("Steve", self.availableMeals[0]),
        new SeatReservation("Bert", self.availableMeals[0])
    ]);
    // Operations
    self.addSeat = function() {
        self.seats.push(new SeatReservation("mike", self.availableMeals[0]));
    }
    self.removeSeat = function(seat) { self.seats.remove(seat) }
    self.totalSurcharge = ko.computed(function() {
        var total = 0;
        for (var i = 0; i < self.seats().length; i++)
            total += self.seats()[i].meal().price;
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