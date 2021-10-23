function hello() {
  setTimeout(() => {
    console.log("hola desde docker!");
    hello();
  }, 10000);
}

hello();
