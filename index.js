// const testVar = {}

// function testFunc() {
//   return "hi"
// }

function superBowlWin(record) {
  record.find((r) => {
    if (r.result === "W") {
      return r.year;
    } else {
      return undefined;
    }
  })
  
}