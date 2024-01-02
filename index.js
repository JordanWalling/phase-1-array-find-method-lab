// code your solution here
const record = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
  //...
];

function superbowlWin(array) {
  let winningYear = array.find((gameYear) => {
    return gameYear.result === "W";
  });
  if (winningYear) {
    return winningYear.year;
  } else {
    return undefined;
  }
}

console.log(superbowlWin(record));
