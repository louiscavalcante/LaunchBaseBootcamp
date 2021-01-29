const users = [
  {
    name: "Salvio",
    income: [115.3, 48.7, 98.3, 14.5],
    outgoing: [85.3, 13.5, 19.9]
  },
  {
    name: "Marcio",
    income: [24.6, 214.3, 45.3],
    outgoing: [185.3, 12.1, 120.0]
  },
  {
    name: "Lucia",
    income: [9.8, 120.3, 340.2, 45.3],
    outgoing: [450.2, 29.9]
  }
];

users.forEach(user => { 

  const totalIncome = user.income.reduce((accumulator, currentValue) => {  
    return accumulator + currentValue;
  });

  const totalOutgoing = user.outgoing.reduce((accumulator, currentValue) => {  
    return accumulator + currentValue;
  }); 

  let balance = totalIncome - totalOutgoing;

  if (balance > 0) {
    console.log(`${user.name} has a POSITIVE balance of ${balance.toFixed(2)}`)
  } else {
      console.log(`${user.name} has a NEGATIVE balance of ${balance.toFixed(2)}`)
    }
});