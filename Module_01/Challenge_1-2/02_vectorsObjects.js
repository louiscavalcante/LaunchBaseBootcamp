const object = {
    devoloper: {
        name: 'Luiz',
        age: 32
    },
    languages: [
        { name: 'C++', specialization: 'Desktop' },
        { name: 'Python', specialization: 'Data Science' },
        { name: 'JavaScript', specialization: 'Web/Mobile' }
    ]
};

console.log(`The user ${object.devoloper.name} is ${object.devoloper.age} years old and uses the language ${object.languages[0].name} with specialization in ${object.languages[0].specialization}`);