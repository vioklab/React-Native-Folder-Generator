/// CODE TEMPLATE CREATION
const reactClass = className => {
  var tmpReactComp = "import React, { Component } from 'react';\n\n";
  tmpReactComp += "class " + className + " extends Component {\n\n}\n\n";
  tmpReactComp += "export default " + className + ";";
  return tmpReactComp;
};

const reactIndex = className => {
  var tmpReactComp = "import " + className + " from './" + className + "';\n\n";
  tmpReactComp += "export default " + className + ";";
  return tmpReactComp;
};

const reactStyles = () => {
    var tmpReactComp = 'import { StyleSheet } from "react-native";\n\n';
    //tmpReactComp += 'import { theme } from "../../index";\n\n';
    tmpReactComp += 'const styles = StyleSheet.create({\n\n});\n\n';
    tmpReactComp += 'export default styles;';
    return tmpReactComp;
  };

module.exports = { reactClass, reactIndex, reactStyles };
