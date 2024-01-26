function setpiece() {
    return new Promise((resolve, reject) => {
      let goalscored = 2;
      if (goalscored > 2) {
        resolve();
      } else {
        reject(new Error("Goals scored not enough")); 
      }
    });
  }
  
  setpiece()
    .then(() => console.log("Well done"))
    .catch((error) => console.log("Play well in next match:", error.message)); 
  
