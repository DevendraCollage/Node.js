//* In Node.js, every module is wrapped in a function before it is executed. This function is called the module wrapper function.
//* The module wrapper function provides a private scope for the module's variables and functions, and it also exports the module's variables and functions to the global scope.
//* When we write any code in node.js node will wrapper code inside in the module wrapper function.

(function (exports, require, module, __filename, __dirname) {
  var name = "Devendra";
})();
console.log(name); //! This will give an error | This is now you cannot use in the other file or folder
