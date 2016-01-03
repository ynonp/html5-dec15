function foo() {
  const STEP = 5;

  let sum = 0;
  for (let i=0; i < 10; i+= STEP ) {
    sum += i;
  }

  // ERROR - i is not defined
  console.log(i);
}