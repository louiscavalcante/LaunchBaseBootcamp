// SYNCHRONOUS
const sync = (num) => { 
    setTimeout(function() {
        console.log(num * 2)
    }, Math.floor(Math.random() * 100) + 1)
}
for (let i = 0; i < 5; i++) {
    sync(10 + i)
}

// CALLBACKS
const Tasks = {
    timeout(num, resolve) {
        setTimeout(function() {
            const result = num * 2
            resolve(result)
        }, Math.floor(Math.random() * 100) + 1)
    },
    timesFive(resolve, callback) {
        for (let i = 0; i < 5; i++) {
            callback(resolve + i)
        }
    }
}

function solution(num) {
    Tasks.timeout(num, function(resolve) {
        Tasks.timesFive(resolve, function(callback) {
            console.log(callback)
        })     
    })  
}    

solution(10)

// PROMISE
const promiseAsync = (num) => {

    const p1 = new Promise(
        function(resolve, reject) {  
            setTimeout(function() {
                resolve(num * 2)
            }, Math.floor(Math.random() * 100) + 1)  
        }
    )
    p1.then(
        function(val) {
            for (let i = 0; i < 5; i++) {
                console.log(val + i)
            }
        }
    )       
}
promiseAsync(10)

// ASYNC / AWAIT
async function timeoutAsync(num) {
    const p1 = new Promise((resolve, reject) => {
        setTimeout(function() {
           resolve(num * 2)
        }, Math.floor(Math.random() * 100) + 1)
    })

    return p1
}

async function fiveTimes(val) {
  for (let i = 0; i < 5; i++) {
    console.log(await timeoutAsync(val) + i)
  }
}

fiveTimes(10)

// ASYNC / AWAIT = BETTER APPROACH
const { timeOut, timesFive } = require("./processes")

async function main(number) {
  try {
    console.log('-------------------------------------------')
    console.time("Total Running Time")

    const value01 = await timeOut(number)
    const value02 = await timesFive(value01)

    console.log('-------------------------------------------')

    console.timeEnd("Total Running Time")
    console.log('-------------------------------------------')
  } catch(error) {
    console.error("error", error)
  }
}

main(10)