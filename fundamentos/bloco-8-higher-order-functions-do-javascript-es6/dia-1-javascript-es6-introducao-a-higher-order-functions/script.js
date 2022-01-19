const newEmployees = (id) => {
    const employees = {
        id1: id('Pedro Guerra'),
        id2: id('Luiza Drumond'),
        id3: id('Carla Paiva'),
    }
    return employees;
  };
  const criarId = (nome) =>{
    const email = nome.toLowerCase().split(' ').join('_');
     return{nome:nome,
          email: `${email}@trybe.com `
    }
  }

  console.log(newEmployees(criarId))
  
  const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
};

console.log(lotteryResult(2, numberChecker));