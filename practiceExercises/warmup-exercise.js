/*
    1. Print out "Program started" at the start of your code
    2. Create a Promise that resolves after 3 seconds
    3. Log out the promise while it's pending
    4. Print out "Program in progress..." as well
    5. Print out "Program complete" when the promise completes after 3 seconds

    HINT: Use setTimeout for the delay
*/
function createPromise() {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Program is Completed");
    }, 3000);
  });
  return promise;
}
export function run() {
  console.log("Program started");
  const promise = createPromise();
  console.log(promise);
  console.log("program is running");
  promise.then((message) => console.log(message));
}
