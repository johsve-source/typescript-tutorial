"use strict";
const startGame = () => {
    let messagesElement = document.getElementById('messages');
    messagesElement.innerText = 'Welcome to MultiMath!, Starting new game..';
};
const logPlayer = (name) => {
    console.log(`New game starting for player: ${name}.`);
};
document.getElementById('startGame').addEventListener('click', startGame);
//# sourceMappingURL=sandbox.js.map