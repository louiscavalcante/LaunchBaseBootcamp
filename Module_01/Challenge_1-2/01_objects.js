const object = {
    Company: {

        Name: "Rocketseat",
        Color: "Purple",
        Specialization: "Programação",
        Address: {
            Streat: "Streat Guilherme Gembala",
            'Number': 260
        }
    }      
};

console.log(`The company ${object.Company['Name']} is located at ${object.Company.Address.Streat}, ${object.Company.Address.Number}`);