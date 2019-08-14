"use strict"
const reducer = (accumulator, currentValue) => accumulator + currentValue;
let sq = document.querySelectorAll('.sq');
const button = document.querySelector('button');
const currPlayer = document.querySelector('span');
const resetBtn = document.querySelector('#reset');
let tpRow = [];
let mdRow = [];
let btRow = [];
let nextPiece = 'O'; //first piece places will be 'X'
let innerPiece = 0;
let displayPiece;

//note: consider making x 1 and o -1.  checking for win -> row adds up to 3? idk

function createPlayer(piece) {
    return {
        piece,
    }
}

const playerx = createPlayer("X");
const playero = createPlayer("O");

const gb = {
    board: [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ],

    "clearBoard": function () {
        gb.board = [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ];
        tpRow = [];
        btRow = [];
        mdRow = [];
        sq.forEach(function (e, i) {
            e.innerHTML = '';
            nextPiece = 'O'
            button.style.display = "block";

        })
    },

    "initialize": function () {
        sq.forEach(function (e, i) {
            e.classList.add(i);
            button.style.display = "none";
            nextPiece = 'O'
            e.addEventListener('click', function () {
                console.log(i)


                if (nextPiece === "X") {
                    nextPiece = "O" //piece that will be placed next click
                    displayPiece = "X" //next piece placed display
                    innerPiece = -1;
                } else if (nextPiece === 'O') {
                    nextPiece = 'X'
                    displayPiece = "O"
                    innerPiece = 1;
                }
                if (i < 3) {
                    tpRow.push(innerPiece)
                }
                if (i >= 3 && i <= 5) {
                    mdRow.push(innerPiece)
                }
                if (i >= 6 && i <= 8) {
                    btRow.push(innerPiece)
                }
                if (tpRow === [1, 1, 1]) {
                    alert('WINNER!')
                }
                e.innerHTML = `<p style="font-size:100px;margin-top:20px;">${nextPiece}</p>`
                currPlayer.innerHTML = `<p style="font-size:62px;">${displayPiece}</p>`
                // e.innerText = nextPiece;
                gb.board[i].push(innerPiece) //* i (index) lines up to the correct array of the board array in gb 

            })
        });

    },
    checkIfWinner: function () {


    }
}


button.addEventListener('click', gb.initialize) //init game

resetBtn.addEventListener('click', gb.clearBoard) //resets board



// slices = gb.board.slice(0, 3),
//          gb.board.slice(3, 6),
//          gb.board.slice(5, 9)




// function reset {
//     gb.board
//     e.innerHTML = '<p style="font-size:50px;margin-top:45px;" > </p>'
//     gb.board[i].push('x') 
// }