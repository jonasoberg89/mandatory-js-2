let text = $ (".text");
let gameOver = 0;
text.text ("X turn");
let count = 0;
let board = $(".item")
let array = new Array(9);
let winnerCombos = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6],
]
$ (".item").on ("click", firstPick);

function firstPick (e){
    if (gameOver === 1){return;}
    let myTarget = $(e.target);
    let idNum = e.target.id;
    if (myTarget.text() === "X" ||myTarget.text() ==="O"){
        return 
    }
    if (count === 0){
        text.text ("O turn");
        myTarget.text ("X");
        array[idNum] = "X"
        checkForWinner(array,"X")
        count ++;
    }
    else if (count === 1){
        text.text ("X turn");
        myTarget.text ("O");
        array[idNum] = "O"
        checkForWinner(array,"O")
        count -- ;
    }
}
function checkForWinner(array,player){
    const test = winnerCombos.find (combo => combo.every(line => array[line] === player))
    if (test){
        text.text (player + " Won!!");
        gameOver = 1;
        for (i = 0; i < test.length;i++){
            $("#"+ test[i]).css("background-color", "black");
        }
    }
    else if (board.text ().length === 9){
        text.text ("Tie!! ");
    }
}
$('.reset').click(function() {
    board.html('');
    $ (".item").css ("background-color","#333");
    while(array.length > 0) {
        array.pop();
    }
    text.text ("X turn");
    count = 0;
    gameOver = 0;
  });