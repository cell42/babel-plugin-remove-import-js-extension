var regExp = /\.(js|jsx)$/i;

var visitor = {
  ImportDeclaration(path, state) {
    var source = path.node.source;

    if (source)  {
      if (!source.value.match(regExp)) {
        return;
      }

      source.value = source.value.replace(regExp, '');
    }
  },
  ExportNamedDeclaration(path, state) {
    var source = path.node.source;

    if (source)  {
      if (!source.value.match(regExp)) {
        return;
      }

      source.value = source.value.replace(regExp, '');
    }
  }
}

module.exports = function () {
  return {
    visitor: {
      Program(path, state) {
        path.traverse(visitor, state)
      },
    }
  };
};