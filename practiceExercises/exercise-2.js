/*
    1. Print out "Program started" at the start of your code
    2. Create a Promise that resolves after 3 seconds
    3. Log out the promise while it's pending
    4. Print out "Program in progress..." as well

    5. Print out "Step 1 complete" when the first promise fulfills
    6. Have the first promise return another new Promise that will
       fulfill after 3 seconds with the message: "Step 2 Complete"

    7. Print out the message from the second promise after it
       fulfills ("Step 2 Complete")

    HINT: Use setTimeout for the delay
*/
function createPromise(message1,message2){
   const promise=new Promise((resolve)=>{
      setTimeout(()=>{
         resolve(new Promise((resolve)=>{
            console.log(message1)
            setTimeout(()=>{
               resolve(message2)
            },3000)
         }))
      },3000)
   })
   return promise
}
export function run(){
   console.log("Program started")
   let promise = createPromise("Step 1 complete","Step 2 completed")
   console.log(promise)
   console.log("Program is running...")
   promise.then((message)=>console.log(message))

}
