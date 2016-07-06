/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/**
 * Main content module
 */
define(['ojs/ojcore', 'knockout'],
  function(oj, ko) {
      //ko.applyBindings(new mainContentViewModel(),document.getElementById('form-container'));
      
    function mainContentViewModel() {
        var self = this;
        self.something = ko.observable("This section uses content from it's own 'home' ViewModel. The module is found in the /js/viewModules folder");
    }
    
   return new mainContentViewModel();
});
