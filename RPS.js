// const prompt = require('prompt-sync')()
let points = 0
let computers_points = 0

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

function rock_paper_scissors(user) {
        let computer_decision = generateComputerDecision()
        if (user.toLowerCase() == 'rock') {
            if (computer_decision == 'paper') {
                points--
                computers_points++
                current_points_text = document.getElementById("points-display").innerText = `Current Points: ${points}`;
                action = document.getElementById("action").innerText = `The computer selected ${computer_decision}, and you selected ${user}, so you lost a point.`;
                current_computers_points_text = document.getElementById('computers-points').innerHTML = `Computers Current Points: ${computers_points}`
            } 
            else if (computer_decision == 'rock') {
                current_points_text = document.getElementById("points-display").innerText = `Current Points: ${points}`;
                action = document.getElementById("action").innerText = `The computer selected ${computer_decision}, and you selected ${user}, so this round's a tie!`;
                current_computers_points_text = document.getElementById('computers-points').innerHTML = `Computers Current Points: ${computers_points}`
            } else if (computer_decision == 'scissors') {
                points++
                computers_points--
                current_points_text = document.getElementById("points-display").innerText = `Current Points: ${points}`;
                action = document.getElementById("action").innerText = `The computer selected ${computer_decision}, and you selected ${user}, so you won this round!`;
                current_computers_points_text = document.getElementById('computers-points').innerHTML = `Computers Current Points: ${computers_points}`
            }
        }
        else if (user.toLowerCase() == 'paper') {
            let computer_decision = generateComputerDecision()
            if (computer_decision == 'rock') {
                points++
                computers_points--
                current_points_text = document.getElementById("points-display").innerText = `Current Points: ${points}`;
                action = document.getElementById("action").innerText = `The computer selected ${computer_decision}, and you selected ${user}, so you won this round!`;
                current_computers_points_text = document.getElementById('computers-points').innerHTML = `Computers Current Points: ${computers_points}`
            } else if (computer_decision == 'paper') {
                current_points_text = document.getElementById("points-display").innerText = `Current Points: ${points}`;
                action = document.getElementById("action").innerText = `The computer selected ${computer_decision}, and you selected ${user}, so this round's a tie!`;
                current_computers_points_text = document.getElementById('computers-points').innerHTML = `Computers Current Points: ${computers_points}`
            } else if (computer_decision == 'scissors') {
                points--
                computers_points++
                current_points_text = document.getElementById("points-display").innerText = `Current Points: ${points}`;
                action = document.getElementById("action").innerText = `The computer selected ${computer_decision}, and you selected ${user}, so you lost a point.`;
                current_computers_points_text = document.getElementById('computers-points').innerHTML = `Computers Current Points: ${computers_points}`
            }
        } else if (user.toLowerCase() == 'scissors') {
            let computer_decision = generateComputerDecision()
            if (computer_decision == 'rock') {
                points--
                computers_points++
                current_points_text = document.getElementById("points-display").innerText = `Current Points: ${points}`;
                action = document.getElementById("action").innerText = `The computer selected ${computer_decision}, and you selected ${user}, so you lost a point.`;
                current_computers_points_text = document.getElementById('computers-points').innerHTML = `Computers Current Points: ${computers_points}`
            } else if (computer_decision == 'paper') {
                points++
                computers_points--
                current_points_text = document.getElementById("points-display").innerText = `Current Points: ${points}`;
                action = document.getElementById("action").innerText = `The computer selected ${computer_decision}, and you selected ${user}, so you won this round!`;
                current_computers_points_text = document.getElementById('computers-points').innerHTML = `Computers Current Points: ${computers_points}`
            } else if (computer_decision == 'scissors') {
                action = document.getElementById("action").innerText = `The computer selected ${computer_decision}, and you selected ${user}, so this round's a tie!`;
                current_computers_points_text = document.getElementById('computers-points').innerHTML = `Computers Current Points: ${computers_points}`
            }
        }
}