define(["knockout"], function (ko) {
  return function (word, parent) {
    return {
      parent: parent,
      word: word || "Untitled"
    };
  };
});
