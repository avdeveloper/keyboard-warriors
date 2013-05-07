require.config({
  paths: {
    "knockout": "//cdnjs.cloudflare.com/ajax/libs/knockout/2.2.1/knockout-min",
    "qunit": "//cdnjs.cloudflare.com/ajax/libs/qunit/1.11.0/qunit.min"
  }
});

require(["jquery", "knockout", "ViewModel"], function (jquery, ko, ViewModel) {
  ko.applyBindings(ViewModel);
});
