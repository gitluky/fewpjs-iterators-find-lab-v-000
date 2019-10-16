// const testVar = {}

// function testFunc() {
//   return "hi"
// }

function superbowlWin(record) {
  record.find((r) => {
    if (r.result === "W") {
      return r.year;
    }
  })
}