const users = [
    { name: "Carlos", languages: ["HTML", "CSS"] },
    { name: "Jasmine", languages: ["JavaScript", "CSS"] },
    { name: "Tuane", languages: ["HTML", "Node.js"] }
  ];

function checkUserForCSS(user) {
    const lang = user.languages;

    for (let i = 0; i < lang.length; i++) {
        if (lang[i] === 'CSS') {
            return true;
        } 
    }
    return false;
}

function evalLog(user) {
    for (let i = 0; i < user.length; i++) {
    const userKnowsCSS = checkUserForCSS(user[i]);
    
        if (userKnowsCSS) {
            console.log(`The user ${user[i].name} knows CSS`);
        }
    }
}

evalLog(users);