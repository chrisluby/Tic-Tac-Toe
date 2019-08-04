"use strict"

let sq = document.querySelectorAll('.sq');
let index = 0;


const gameboard = {
    board: [[],[],[],
            [],[],[],
            [],[],[]]
}

function createPlayer(piece) {
    return {
        piece,
    }
}

const playerx = createPlayer("X");
const playero = createPlayer("O");


sq.forEach(function(e, i) {
    e.classList.add(i);
    index++;
    e.addEventListener('click', function(){
        console.log(i)
        e.innerHTML = '<p style="font-size:50px;margin-top:45px;" >X</p>' //* !!!!!!!!!! change to current players piece
        gameboard.board[i].push('x') //* !!!!!!!!!! change to current players piece
        
    })
});
