const prompt = require('prompt-sync')()
let points = 0

let flag = true

function generateComputerDecision() {
    let random_number = Math.floor(Math.random() * 3) + 1;
    let computer_decision = ''
    switch (random_number) {
        case 1:
            computer_decision = 'rock'
            break
        case 2:
            computer_decision = 'paper'
            break
        case 3:
            computer_decision = 'scissors'
            break
    }
    return computer_decision
}

function rock_paper_scissors() {
    while (flag) {
        let user = prompt('Select either rock, paper, or scissors: ')
        let computer_decision = generateComputerDecision()
        if (user.toLowerCase() == 'rock') {
            if (computer_decision == 'paper') {
                points--
                console.log(`You lost this round as the computer chose ${computer_decision} and lose a point. You currently have ${points} points.`)
            } 
            else if (computer_decision == 'rock') {
                console.log(`You both selected rock! This round is a tie. You currently have ${points} points.`)
            } else if (computer_decision == 'scissors') {
                points++
                console.log(`You won this round as you have selected ${user} and the computer seclected ${computer_decision}, thus you gain a point! You currently have ${points} points!`)
            }
        }
        else if (user.toLowerCase() == 'paper') {
            let computer_decision = generateComputerDecision()
            if (computer_decision == 'rock') {
                points++
                console.log(`You won this round as you have selected ${user} and the computer seclected ${computer_decision}, thus you gain a point! You currently have ${points} points!`)
            } else if (computer_decision == 'paper') {
                console.log(`You both selected paper! This round is a tie. You currently have ${points} points.`)
            } else if (computer_decision == 'scissors') {
                points--
                console.log(`You lost this round as the computer chose ${computer_decision} and lose a point. You currently have ${points} points.`)
            }
        } else if (user.toLowerCase() == 'scissors') {
            let computer_decision = generateComputerDecision()
            if (computer_decision == 'rock') {
                points--
                console.log(`You lost this round as the computer chose ${computer_decision} and lose a point. You currently have ${points} points.`)
            } else if (computer_decision == 'paper') {
                points++
                console.log(`You won this round as you have selected ${user} and the computer seclected ${computer_decision}, thus you gain a point! You currently have ${points} points!`)
            }
        }
        else if (user.toLowerCase() == 'quit') {
            console.log(`You had ${points} points total!`)
            flag = false
        }
    }
}

console.log(rock_paper_scissors())