function writeCards(namesArray, eventName) {
  for (let i = 0; i < namesArray.length; i++)
    console.log(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`);
}

function countDown(number) {
  let n = number;
  while (n >= 0) {
    console.log(`${number}`)
    n--;
  }
}
