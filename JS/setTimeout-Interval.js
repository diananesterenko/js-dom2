//console.log("----------------1.1-------------------");

/*function printNumbers(from, to, interval) {
  setInterval(showNumbers, interval);
  let numb = from;
  function showNumbers() {
    if (numb <= to) {
      console.log(numb);
      numb++;
    }
  }
}
printNumbers(0, 10, 1000);*/
//"----------------1.2-------------------");
// function printNumbers2(from, to, interval) {
//   let numb = from;
//   let timerId = setTimeout(function tick() {
//     if (numb <= to) {
//       console.log(numb);
//       numb++;
//       timerId = setTimeout(tick, interval);
//     }
//     // (*)
//   }, interval);
// }
// printNumbers2(2, 8, 1000);

console.log("----------------2-------------------");
const waitingEl = document.createElement("a");
document.body.append(waitingEl);
function showLinkAfterWait(waitTime) {
  setInterval(waitLink, 1000);
  setTimeout(showLink, waitTime + 1000);

  function waitLink() {
    if (waitTime > 0) {
      const time = new Date(waitTime);
      console.log(time);
      waitingEl.textContent = `Зачекайте ${time.getMinutes()} хвилин : ${time.getSeconds()} секунд`;

      waitTime -= 1000;
    }
  }
}

function showLink() {
  waitingEl.textContent = "It`s your link => click here";
  waitingEl.href =
    "https://learn.javascript.ru/settimeout-setinterval#rekursivnyy-settimeout";
}
showLinkAfterWait(66000);
