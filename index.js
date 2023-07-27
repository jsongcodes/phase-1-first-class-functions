const receivesAFunction = (callbackFunction) => callbackFunction();

const returnsANamedFunction = () => {
  return function namedFunction() {
    console.log("named function");
  };
};

const returnsAnAnonymousFunction = () => {
  return function () {
    console.log("hi");
  };
};
