define(["knockout", "ViewModel", "qunit"], function (ko, ViewModel) {
    var

    run = function () {
      var pinboard = document.getElementById("pinboard"); // test pinboard

      ko.applyBindings(ViewModel, pinboard);

      module("Preparations");
      test("Existence of Modules", function () {
        ok(pinboard, "Pinboard exists");
        ok(ViewModel, "We have a view model");
      });

      module("ViewModel");
      test("Existence of properties", function () {
        ok(ViewModel.words(), "words[] exists");
      });
      test("addItem() adds <p/> to pinboard", function () {
        var before, after;

        before = pinboard.childElementCount;
        ViewModel.addItem();
        after = pinboard.childElementCount;
        console.log(before, after);
        ok(before < after, "A new word has been pinned to the board");
      });
    };

    return {
      run: run
    };
});
