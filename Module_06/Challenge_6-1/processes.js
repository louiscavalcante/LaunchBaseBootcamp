const util = require("util")
const wait = util.promisify(setTimeout)

module.exports = {
  async timeOut(num) {
    try {
      console.log("Process 01 started")
      console.time("Process 01 ended")
      await wait(Math.floor(Math.random() * 100) + 1)
      console.timeEnd("Process 01 ended")
      console.log('-------------------------------------------')
      return num * 2
    } catch(error) {
      console.error(error)
    }
  },

  async timesFive(val) {
    try {
      console.log("Process 02 started")
      console.time("Process 02 ended")
      for (let i = 0; i < 5; i++) {
        console.log( await val + i)
      }
      console.timeEnd("Process 02 ended")
      return val
    } catch(error) {
      console.error(error)
    }
  }
}
