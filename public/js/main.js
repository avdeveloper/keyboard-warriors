require.config({
  paths: {
    "knockout": "//cdnjs.cloudflare.com/ajax/libs/knockout/2.2.1/knockout-min",
    "qunit": "//cdnjs.cloudflare.com/ajax/libs/qunit/1.11.0/qunit.min",
    "domReady": "//cdnjs.cloudflare.com/ajax/libs/require-domReady/2.0.1/domReady"
  }
});

require(["jquery", "knockout", "ViewModel", "Tests", "domReady!"], function (jquery, ko, ViewModel, Tests) {
  ko.applyBindings(ViewModel);
  Tests.run();
});
