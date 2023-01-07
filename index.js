let start = new Date();

for (let i = 0; i < 10000; i++) {
  let some = i ** 3;
}

let end = new Date();
alert(`Loop completed ${end - start}`);
console.log(start.getTime());
console.log(end.getTime());
