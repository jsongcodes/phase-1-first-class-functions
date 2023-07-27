const receivesAFunction = (callbackFunction) => callbackFunction();

// const namedFunction = () => {
//     console.log('named function')
// }

const returnsANamedFunction = () => {
  return function namedFunction() {
    console.log("named function");
  };
};

// function returnsAnAnonymousFunction(() => {
//   return function () {
//     console.log("hi");
//   };
// });

const returnsAnAnonymousFunction = () => {
    return function () {
        console.log('hi')
    }
}
