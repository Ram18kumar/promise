function keyword() {
    return new Promise((resolve, reject) => {
      
      setTimeout(() => {
        const result = "Data fetched successfully!";
        resolve(result);
      }, 1000); 
    });
  }
  keyword()
  .then(result => {
    console.log("Result:", result); 
  })
  .catch(error => {
    console.error("Error:", error); 
  });

  function stepOne() {
    return new Promise((resolve, reject) => {

      setTimeout(() => resolve("Step One complete"), 1000);
    });
  }
  
  function stepTwo(data) {
    return new Promise((resolve, reject) => {
     
      setTimeout(() => resolve(`Step Two complete with data: ${data}`), 1000);
    });
  }
  
  stepOne()
    .then(result => stepTwo(result))
    .then(finalResult => console.log(finalResult))
    .catch(error => console.error(error));
    async function myAsyncFunction() {
        try {
          const result1 = await myAsyncOperation();
          console.log("Result 1:", result1);
      
          const result2 = await anotherAsyncOperation();
          console.log("Result 2:", result2);
        } catch (error) {
          console.error("Error:", error);
        }
      }
      
      myAsyncFunction();
      
