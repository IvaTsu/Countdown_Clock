let countdown;

function timer(seconds) {
  const nowTime = Date.now(); // in ms
  const thenTime = nowTime + seconds * 1000; // in ms
  displayTimeLeft(seconds);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((thenTime - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  console.log(seconds);
}
