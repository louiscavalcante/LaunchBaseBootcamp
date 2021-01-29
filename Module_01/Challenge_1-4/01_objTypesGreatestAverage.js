const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
};

function createTransaction(transaction) {
    user.transactions.push(transaction)

    if (transaction.type === 'credit') {
        user.balance += transaction.value

    } else {
        user.balance -= transaction.value
    }
    
    return transaction
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log('User Balance = ', user.balance)    // 60

function getHigherTransactionByType(type) {
    let higherValue = 0
    let higherTransaction

    for (transaction of user.transactions) {
        if (transaction.type === type && transaction.value > higherValue) {
            higherValue += transaction.value
            higherTransaction = transaction
        }
    }

    return console.log(higherTransaction)
}

getHigherTransactionByType("credit");   // { type: 'credit', value: 120 }
getHigherTransactionByType("debit");    // { type: 'debit', value: 80 }

function getAverageTransactionValue() {
    let sum = 0
    let average = 0

    for (transaction of user.transactions) {
        sum += transaction.value
        average = sum / user.transactions.length
    }

    return console.log('Transactions Average =', average)
}

getAverageTransactionValue();   // 70

function getTransactionsCount() {
    let countCredit = 0
    let countDebit = 0
    let transactionCount

    for (transaction of user.transactions) {
        
        if (transaction.type === "credit") {
            countCredit++

        } else {
            countDebit++
        }
    
    transactionCount = {Credit: countCredit, Debit: countDebit}
    }

    return console.log(transactionCount)
}

getTransactionsCount();  // { credit: 2, debit: 2 }