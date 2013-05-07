define(["jquery", "knockout", "Word"], function ($, ko, Word) {
  var
  
  words = ko.observableArray([]),
  entry = ko.observable(""),
  
  /**
   * Place a newly created element randomly onto the pinboard
   * @param (DOMElement) element The element that has just been added to the DOM
   */
  pinIt = function (element) {
    var
    rotation = "rotate(" + (Math.random()*60+-30).toFixed(2) + "deg)",
    css = {
      "bottom": Math.random()*90 + "%",
      "left": Math.random()*90 + "%",
      "-webkit-transform": rotation,
      "-moz-transform": rotation,
      "-o-transform": rotation,
      "transform": rotation
    };

    $(element).css(css);
  },

  /**
   * Adds a new item to the array of objects pinned to the board
   */
  addItem = function () {
    words.push(new Word(entry(), this.parent));
    // entry("");
  };

  return {
    words: words,
    pinIt: pinIt,
    addItem: addItem,
    entry: entry
  }
});
