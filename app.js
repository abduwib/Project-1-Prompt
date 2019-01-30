let board = [
    '', '', '',
    '', '', '',
    '', '', ''
]

let player = 'X'

// change turn
var gameOver = false;
var counter = 0;

// when a .cell element is clicked it should print hello
function onclick(event){
    // if board position is empty and games not over
    if( $(event.target).text()==='' && gameOver===false){
        // add player to html board
        $(event.target).text(player)
        // add player to js board
        let position = event.target.id
        board[position] = player
        counter++;
        // checkwinner
        winner();
    }
        // if the player is X then change player to O
        // else change player to X
    if(player==='X'){
        player ='o';
        // counter++;
    }

    else {
        player ='X';
        // counter++;
    }
    
}
    /// run function to find winner
   
$('.cell').on('click', onclick)

function winner(){
    if ($('#c0').text()==='X'&&$('#c1').text()==='X'&&$('#c2').text()==='X'){
        gameOver = true
        alert("PLAYER #1 is the winner!")

    }
    else if ($('#c0').text()==='X'&&$('#c4').text()==='X'&&$('#c8').text()==='X'){
        gameOver = true
        alert("PLAYER #1  is the winner!")
    }
    else if ($('#c0').text()==='X'&&$('#c3').text()==='X'&&$('#c6').text()==='X'){
        gameOver = true
        alert("PLAYER #1  is the winner!")
    }
    else if ($('#c3').text()==='X'&&$('#c4').text()==='X'&&$('#c5').text()==='X'){
        gameOver = true
        alert("PLAYER #1  is the winner!")
    }
    else if ($('#c6').text()==='X'&&$('#c7').text()==='X'&&$('#c8').text()==='X'){
        gameOver = true
        alert("PLAYER #1  is the winner!")
    }
    else if ($('#c6').text()==='X'&&$('#c4').text()==='X'&&$('#c2').text()==='X'){
        gameOver = true
        alert("PLAYER #1  is the winner!")
    }
    else if ($('#c1').text()==='X'&&$('#c4').text()==='X'&&$('#c7').text()==='X'){
        gameOver = true
        alert("PLAYER #1  is the winner!")
    }
    else if ($('#c2').text()==='X'&&$('#c5').text()==='X'&&$('#c8').text()==='X'){
        gameOver = true
        alert("PLAYER #1  is the winner!")
    }
    else if ($('#c0').text()==='o'&&$('#c1').text()==='o'&&$('#c2').text()==='o'){
        gameOver = true
        alert("PLAYER #2  is the winner!")
    }
    else if ($('#c0').text()==='o'&&$('#c4').text()==='o'&&$('#c8').text()==='o'){
        gameOver = true
        alert("PLAYER #2 is the winner!")
    }
    else if ($('#c0').text()==='o'&&$('#c3').text()==='o'&&$('#c6').text()==='o'){
        gameOver = true
        alert("PLAYER #2 is the winner!")
    }
    else if ($('#c3').text()==='o'&&$('#c4').text()==='o'&&$('#c5').text()==='o'){
        gameOver = true
        alert("PLAYER #2 is the winner!")
    }
    else if ($('#c6').text()==='o'&&$('#c7').text()==='o'&&$('#c8').text()==='o'){
        gameOver = true
        alert("PLAYER #2 is the winner!")
    }
    else if ($('#c6').text()==='o'&&$('#c4').text()==='o'&&$('#c2').text()==='o'){
        gameOver = true
        alert("PLAYER #2 is the winner!")
    }
    else if ($('#c1').text()==='o'&&$('#c4').text()==='o'&&$('#c7').text()==='o'){
        gameOver = true
        alert("PLAYER #2 is the winner!")
    }
    else if ($('#c2').text()==='o'&&$('#c5').text()==='o'&&$('#c8').text()==='o'){
        gameOver = true
        alert("PLAYER #2 is the winner!")
        
        
    }
    else if(counter===9){
        alert("TIC TAC TIE!");
    }
}

function reset(){
    location.reload();
   
}
