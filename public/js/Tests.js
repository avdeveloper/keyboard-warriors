define(["knockout", "ViewModel", "Word", "qunit"], function (ko, ViewModel, Word) {
    var

    run = function () {
      var pinboard = $("#pinboard"); // test pinboard

      ko.applyBindings(ViewModel, pinboard.get(0));

      /* --- */

      module("Word");

      test("constructor", function () {
        // TODO test what happens if empty string passed
        // TODO implement clear when added new item
        var selectedWord = "Sample",
            word = new Word(selectedWord, this);

        ok(word, "Word is instantiated");
        equal(word.word, selectedWord, "Instantiated with the selected word");
        deepEqual(word.parent, this, "The instance references parent to this");
      });

      /* --- */

      module("ViewModel");

      test("consructor", function () {
        ok(ViewModel.words(), "words[] exists");
      });

      test("addItem()", function () {
        var before, after, lastPinned;
        before = pinboard.children().length;
        ViewModel.entry("Hello world!"); // simulate typing on box
        ViewModel.addItem();
        after = pinboard.children().length;
        ok(before < after, "A new word has been pinned to the board");

        lastPinned = pinboard.children()[after-1];
        ok(!lastPinned.style.top, "It is not anchored at top");
        ok(lastPinned.style.bottom, "It is positioned vertically");
        ok(lastPinned.style.left, "It is positioned horizontally");
        ok(lastPinned.style.transform ||
           lastPinned.style["-webkit-transform"] ||
           lastPinned.style["-moz-transform"] ||
           lastPinned.style["-ms-transform"] ||
           lastPinned.style["-o-transform"], "It is transformed or rotated");

        console.log(ViewModel.entry());
        equal(ViewModel.entry(), "", "It is cleared after word is added");
      });

    };

    return {
      run: run
    };
});
