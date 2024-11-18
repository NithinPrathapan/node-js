function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  async function x() {
    await delay(3000); // Wait for 3 seconds
    console.log("hello from timer");
    console.log("from function");
  }
  
  x();
  console.log("after function");
  