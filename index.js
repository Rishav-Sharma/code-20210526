const CONSTANTS = require('./CONSTANTS');

const start = () => {
    let overweightCounter = 0;
    console.log(CONSTANTS.HEADERS);
    for (let i = 0; i < CONSTANTS.USERSDATA.length; i++) {
          const personBMI = calculateBMI(CONSTANTS.USERSDATA[`${i}`].WeightKg, CONSTANTS.USERSDATA[`${i}`].HeightCm);
          if (personBMI < 18.4) {
              console.log(personBMI, CONSTANTS.UNDERWEIGHT);
          } else if (personBMI >= 18.5 && personBMI <= 24.9) {
              console.log(personBMI, CONSTANTS.NORMAL);
          } else if (personBMI >= 25 && personBMI <= 29.9) {
              overweightCounter++;
              console.log(personBMI, CONSTANTS.OVERWEIGHT);
          } else if (personBMI >= 30 && personBMI <= 34.9) {
              console.log(personBMI, CONSTANTS.MODERATELY_OBESE);
          } else if (personBMI >= 35 && personBMI <= 39.9) {
              console.log(personBMI, CONSTANTS.SEVERELY_OBESE);
          } else if (personBMI >= 40) {
              console.log(personBMI, CONSTANTS.VER_SEVERELY_OBESE);
          }
    }
    
    function calculateBMI (weightkg, heightCm) {
          const heightInMSquare = heightCm / 100 * heightCm / 100;
          const personBMI = weightkg / heightInMSquare;
          return personBMI.toFixed(2);
    }
    
    console.log(CONSTANTS.OVERWEIGHT_COUNT, overweightCounter);
}

start();
