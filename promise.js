const getData = new Promise((resolve, reject) => {
  const num = Math.random() * 10;
  console.log(num);
  if (num > 5) {
    resolve(120);
  } else {
    reject("No Data available");
  }
});

getData
  .then((data) => console.log(data + 30))
  .catch((err) => console.log("ERR", err));
