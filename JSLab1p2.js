//strict mode

"use strict";



const startGame = () => {
    let play1 = prompt("Would you like to play?");
    let play = play1.toLowerCase();
    if (play === "yes") {
        let userName = prompt("What is your name?");
        startCombat(play, userName);
    }

};

const startCombat = (play, userName) => {
    let grantHealth = 10;
    let userHealth = 40;
    let userWins = 0;
    while (play) {
        let choice = prompt("Would you like to attack or quit?");
        if (choice === "attack") {
            grantHealth -= getDamage();
            console.log(`Grant was attacked. He now has ${grantHealth} health left.`);
            userHealth -= getDamage();
            console.log(`${userName} was attacked. He now has ${userHealth} health left.`);

        }
        else if (choice === "quit") {
            console.log("Maybe another time...buddy.")
            break;
        }
        //What happens when grant's health is 0
        if (grantHealth <= 0) {
            userWins += 1;
            grantHealth = 10;
            console.log(`${userName} has beaten Grant. ${userName} must win ${3 - userWins} more times.`);
        }
        //What happens when Grant wins
        if (userHealth <= 0) {
            console.log("you suuuuuuuuuck");
            break;
        }
        //What happens when you win
        if (userWins === 3) {
            console.log(`Congrats ${userName}, you win!`);
            break;
        }
    }
};

const getDamage = () => {
    return Math.floor(Math.random() * 5) + 1;
};

startGame();
