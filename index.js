// const testVar = {}

// function testFunc() {
//   return "hi"
// }

function superbowlWin(record) {
  const firstSbWin = record.find((r) => r.year === "W");
  !!firstSbWin ? firstSbWin.year : undefined;
}