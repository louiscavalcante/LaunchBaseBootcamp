const users = [
    { name: "Carlos", languages: ["HTML", "CSS"] },
    { name: "Jasmine", languages: ["JavaScript", "CSS"] },
    { name: "Tuane", languages: ["HTML", "Node.js"] }
  ];

  function loop(user) {
      for (let i = 0; i < user.length; i++) {
          console.log(`${users[i].name} knows ${users[i].languages.join(', ')}`)
      }
      return user;
  }

  loop(users);