/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/**
 * Main content module
 */
define(['ojs/ojcore', 'knockout', 'ojs/ojinputtext', 'ojs/ojbutton'],
  function(oj, ko) {
      //ko.applyBindings(new mainContentViewModel(),document.getElementById('form-container'));
      
    function mainContentViewModel() {
        var self = this;
        self.productoBuscar=ko.observable("");
        self.clickedButton = ko.observable("No clicked yet");
        self.buttonClick = function(data, event){
            self.clickedButton(document.getElementById('producto').value);
            return true;
        }
    }
    
   return new mainContentViewModel();
});
