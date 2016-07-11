const myFatArrowFunction = (x, y) => {

}

(() => {
  console.log('self invoked');
})();

const argumentScope = () => {
  console.log(arguments);
}

argumentScope(); // global args
