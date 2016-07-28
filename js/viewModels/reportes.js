define(['ojs/ojcore', 'knockout','jquery', 'ojs/ojknockout', 'promise', 'ojs/ojdatetimepicker',],
function(oj, ko) {
    function AppViewModel() {
        var self = this;
        self.valueDel = ko.observable(oj.IntlConverterUtils.dateToLocalIso(new Date(2013, 0, 1)));
        self.valueAl = ko.observable(oj.IntlConverterUtils.dateToLocalIso(new Date(2013, 0, 1)));
        
        
    }
    return new AppViewModel();
});