$(document).ready(function() {
    console.log("jQuery is running!")
        //create 6x6 game board 
    var gameBoard = [
        ['', '', '', '', '', ''],
        ['', '', '', '', '', ''],
        ['', '', '', '', '', ''],
        ['', '', '', '', '', ''],
        ['', '', '', '', '', ''],
        ['', '', '', '', '', '']
    ];
    var retryButton = $("button");
    retryButton.text("Refresh");
    retryButton.click(function() {
        location.reload(true);
    });

    var board = $('#board')

    var mark = "red";

    var changePlayer = function() {
        if (mark == "red") {
            $(this).attr('backgroundColor', "red");
            mark = "yellow"
        } else {
            $(this).attr('backgroundColor', "yellow");
            mark = "red"
        }
        // n = 1;
        // var po = setInterval(countdown,10000);
        // function countdown() {
        //     n--;
        //     if (n === 0) {
        //         clearInterval(po); 
        //     }
        //     alert("Next Player, GO!");

        // }

    };


    // check for win function
    //row
    var winCheck = function() {
        if (gameBoard[0][0] === 'red' && gameBoard[0][1] === 'red' && gameBoard[0][2] === 'red' && gameBoard[0][3] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');
        } else if (gameBoard[0][1] === 'red' && gameBoard[0][2] === 'red' && gameBoard[0][3] === 'red' && gameBoard[0][4] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');

        } else if (gameBoard[0][2] === 'red' && gameBoard[0][3] === 'red' && gameBoard[0][4] === 'red' && gameBoard[0][5] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');

        } else if (gameBoard[1][0] === 'red' && gameBoard[1][1] === 'red' && gameBoard[1][2] === 'red' && gameBoard[1][3] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');
        } else if (gameBoard[1][1] === 'red' && gameBoard[1][2] === 'red' && gameBoard[1][3] === 'red' && gameBoard[1][4] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');

        } else if (gameBoard[1][2] === 'red' && gameBoard[1][3] === 'red' && gameBoard[1][4] === 'red' && gameBoard[1][5] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');

        } else if (gameBoard[2][0] === 'red' && gameBoard[2][1] === 'red' && gameBoard[2][2] === 'red' && gameBoard[2][3] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');
        } else if (gameBoard[2][1] === 'red' && gameBoard[2][2] === 'red' && gameBoard[2][3] === 'red' && gameBoard[2][4] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');

        } else if (gameBoard[2][2] === 'red' && gameBoard[2][3] === 'red' && gameBoard[2][4] === 'red' && gameBoard[2][5] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');

        } else if (gameBoard[3][0] === 'red' && gameBoard[3][1] === 'red' && gameBoard[3][2] === 'red' && gameBoard[3][3] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');
        } else if (gameBoard[3][1] === 'red' && gameBoard[3][2] === 'red' && gameBoard[3][3] === 'red' && gameBoard[3][4] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');

        } else if (gameBoard[3][2] === 'red' && gameBoard[3][3] === 'red' && gameBoard[3][4] === 'red' && gameBoard[3][5] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');

        } else if (gameBoard[4][0] === 'red' && gameBoard[4][1] === 'red' && gameBoard[4][2] === 'red' && gameBoard[4][3] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');
        } else if (gameBoard[4][1] === 'red' && gameBoard[4][2] === 'red' && gameBoard[4][3] === 'red' && gameBoard[4][4] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');

        } else if (gameBoard[4][2] === 'red' && gameBoard[4][3] === 'red' && gameBoard[4][4] === 'red' && gameBoard[4][5] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');

        } else if (gameBoard[5][0] === 'red' && gameBoard[5][1] === 'red' && gameBoard[5][2] === 'red' && gameBoard[5][3] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');
        } else if (gameBoard[5][1] === 'red' && gameBoard[5][2] === 'red' && gameBoard[5][3] === 'red' && gameBoard[5][4] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');

        } else if (gameBoard[5][2] === 'red' && gameBoard[5][3] === 'red' && gameBoard[5][4] === 'red' && gameBoard[5][5] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');

        } else if (gameBoard[0][0] === 'yellow' && gameBoard[0][1] === 'yellow' && gameBoard[0][2] === 'yellow' && gameBoard[0][3] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');
        } else if (gameBoard[0][1] === 'yellow' && gameBoard[0][2] === 'yellow' && gameBoard[0][3] === 'yellow' && gameBoard[0][4] === 'yellow') {
            alert('Player 1 won!');
            $('div').off('click');

        } else if (gameBoard[0][2] === 'yellow' && gameBoard[0][3] === 'yellow' && gameBoard[0][4] === 'yellow' && gameBoard[0][5] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');

        } else if (gameBoard[1][0] === 'yellow' && gameBoard[1][1] === 'yellow' && gameBoard[1][2] === 'yellow' && gameBoard[1][3] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');
        } else if (gameBoard[1][1] === 'yellow' && gameBoard[1][2] === 'yellow' && gameBoard[1][3] === 'yellow' && gameBoard[1][4] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');

        } else if (gameBoard[1][2] === 'yellow' && gameBoard[1][3] === 'yellow' && gameBoard[1][4] === 'yellow' && gameBoard[1][5] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');

        } else if (gameBoard[2][0] === 'yellow' && gameBoard[2][1] === 'yellow' && gameBoard[2][2] === 'yellow' && gameBoard[2][3] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');
        } else if (gameBoard[2][1] === 'yellow' && gameBoard[2][2] === 'yellow' && gameBoard[2][3] === 'yellow' && gameBoard[2][4] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');

        } else if (gameBoard[2][2] === 'yellow' && gameBoard[2][3] === 'yellow' && gameBoard[2][4] === 'yellow' && gameBoard[2][5] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');

        } else if (gameBoard[3][0] === 'yellow' && gameBoard[3][1] === 'yellow' && gameBoard[3][2] === 'yellow' && gameBoard[3][3] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');
        } else if (gameBoard[3][1] === 'yellow' && gameBoard[3][2] === 'yellow' && gameBoard[3][3] === 'yellow' && gameBoard[3][4] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');

        } else if (gameBoard[3][2] === 'yellow' && gameBoard[3][3] === 'yellow' && gameBoard[3][4] === 'yellow' && gameBoard[3][5] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');

        } else if (gameBoard[4][0] === 'yellow' && gameBoard[4][1] === 'yellow' && gameBoard[4][2] === 'yellow' && gameBoard[4][3] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');
        } else if (gameBoard[4][1] === 'yellow' && gameBoard[4][2] === 'yellow' && gameBoard[4][3] === 'yellow' && gameBoard[4][4] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');

        } else if (gameBoard[4][2] === 'yellow' && gameBoard[4][3] === 'yellow' && gameBoard[4][4] === 'yellow' && gameBoard[4][5] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');

        } else if (gameBoard[5][0] === 'yellow' && gameBoard[5][1] === 'yellow' && gameBoard[5][2] === 'yellow' && gameBoard[5][3] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');
        } else if (gameBoard[5][1] === 'yellow' && gameBoard[5][2] === 'yellow' && gameBoard[5][3] === 'yellow' && gameBoard[5][4] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');

        } else if (gameBoard[5][2] === 'yellow' && gameBoard[5][3] === 'yellow' && gameBoard[5][4] === 'yellow' && gameBoard[5][5] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');

        } else if (gameBoard[0][0] === 'yellow' && gameBoard[0][6] === 'yellow' && gameBoard[0][12] === 'yellow' && gameBoard[0][18] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');

            //columns - red

        } else if (gameBoard[0][0] === 'red' && gameBoard[1][0] === 'red' && gameBoard[2][0] === 'red' && gameBoard[3][0] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');
        } else if (gameBoard[1][0] === 'red' && gameBoard[2][0] === 'red' && gameBoard[3][0] === 'red' && gameBoard[4][0] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');
        } else if (gameBoard[2][0] === 'red' && gameBoard[3][0] === 'red' && gameBoard[4][0] === 'red' && gameBoard[5][0] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');
        } else if (gameBoard[0][1] === 'red' && gameBoard[1][1] === 'red' && gameBoard[2][1] === 'red' && gameBoard[3][1] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');
        } else if (gameBoard[1][1] === 'red' && gameBoard[2][1] === 'red' && gameBoard[3][1] === 'red' && gameBoard[4][1] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');
        } else if (gameBoard[2][1] === 'red' && gameBoard[3][1] === 'red' && gameBoard[4][1] === 'red' && gameBoard[5][1] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');
        } else if (gameBoard[0][2] === 'red' && gameBoard[1][2] === 'red' && gameBoard[2][2] === 'red' && gameBoard[3][2] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');
        } else if (gameBoard[1][2] === 'red' && gameBoard[2][2] === 'red' && gameBoard[3][2] === 'red' && gameBoard[4][2] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');
        } else if (gameBoard[2][2] === 'red' && gameBoard[3][2] === 'red' && gameBoard[4][2] === 'red' && gameBoard[5][2] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');
        } else if (gameBoard[0][3] === 'red' && gameBoard[1][3] === 'red' && gameBoard[2][3] === 'red' && gameBoard[3][3] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');
        } else if (gameBoard[1][3] === 'red' && gameBoard[2][3] === 'red' && gameBoard[3][3] === 'red' && gameBoard[4][3] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');
        } else if (gameBoard[2][3] === 'red' && gameBoard[3][3] === 'red' && gameBoard[4][3] === 'red' && gameBoard[5][3] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');
        } else if (gameBoard[0][4] === 'red' && gameBoard[1][4] === 'red' && gameBoard[2][4] === 'red' && gameBoard[3][4] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');
        } else if (gameBoard[1][4] === 'red' && gameBoard[2][4] === 'red' && gameBoard[3][4] === 'red' && gameBoard[4][4] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');
        } else if (gameBoard[2][4] === 'red' && gameBoard[3][4] === 'red' && gameBoard[4][4] === 'red' && gameBoard[5][4] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');
        } else if (gameBoard[0][5] === 'red' && gameBoard[1][5] === 'red' && gameBoard[2][5] === 'red' && gameBoard[3][5] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');
        } else if (gameBoard[1][5] === 'red' && gameBoard[2][5] === 'red' && gameBoard[3][5] === 'red' && gameBoard[4][5] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');
        } else if (gameBoard[2][5] === 'red' && gameBoard[3][5] === 'red' && gameBoard[4][5] === 'red' && gameBoard[5][5] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');
            //column - yellow

        } else if (gameBoard[0][0] === 'yellow' && gameBoard[1][0] === 'yellow' && gameBoard[2][0] === 'yellow' && gameBoard[3][0] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');
        } else if (gameBoard[1][0] === 'yellow' && gameBoard[2][0] === 'yellow' && gameBoard[3][0] === 'yellow' && gameBoard[4][0] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');
        } else if (gameBoard[2][0] === 'yellow' && gameBoard[3][0] === 'yellow' && gameBoard[4][0] === 'yellow' && gameBoard[5][0] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');
        } else if (gameBoard[0][1] === 'yellow' && gameBoard[1][1] === 'yellow' && gameBoard[2][1] === 'yellow' && gameBoard[3][1] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');
        } else if (gameBoard[1][1] === 'yellow' && gameBoard[2][1] === 'yellow' && gameBoard[3][1] === 'yellow' && gameBoard[4][1] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');
        } else if (gameBoard[2][1] === 'yellow' && gameBoard[3][1] === 'yellow' && gameBoard[4][1] === 'yellow' && gameBoard[5][1] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');
        } else if (gameBoard[0][2] === 'yellow' && gameBoard[1][2] === 'yellow' && gameBoard[2][2] === 'yellow' && gameBoard[3][2] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');
        } else if (gameBoard[1][2] === 'yellow' && gameBoard[2][2] === 'yellow' && gameBoard[3][2] === 'yellow' && gameBoard[4][2] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');
        } else if (gameBoard[2][2] === 'yellow' && gameBoard[3][2] === 'yellow' && gameBoard[4][2] === 'yellow' && gameBoard[5][2] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');
        } else if (gameBoard[0][3] === 'yellow' && gameBoard[1][3] === 'yellow' && gameBoard[2][3] === 'yellow' && gameBoard[3][3] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');
        } else if (gameBoard[1][3] === 'yellow' && gameBoard[2][3] === 'yellow' && gameBoard[3][3] === 'yellow' && gameBoard[4][3] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');
        } else if (gameBoard[2][3] === 'yellow' && gameBoard[3][3] === 'yellow' && gameBoard[4][3] === 'yellow' && gameBoard[5][3] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');
        } else if (gameBoard[0][4] === 'yellow' && gameBoard[1][4] === 'yellow' && gameBoard[2][4] === 'yellow' && gameBoard[3][4] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');
        } else if (gameBoard[1][4] === 'yellow' && gameBoard[2][4] === 'yellow' && gameBoard[3][4] === 'yellow' && gameBoard[4][4] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');
        } else if (gameBoard[2][4] === 'yellow' && gameBoard[3][4] === 'yellow' && gameBoard[4][4] === 'yellow' && gameBoard[5][4] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');
        } else if (gameBoard[0][5] === 'yellow' && gameBoard[1][5] === 'yellow' && gameBoard[2][5] === 'yellow' && gameBoard[3][5] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');
        } else if (gameBoard[1][5] === 'yellow' && gameBoard[2][5] === 'yellow' && gameBoard[3][5] === 'yellow' && gameBoard[4][5] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');
        } else if (gameBoard[2][5] === 'yellow' && gameBoard[3][5] === 'yellow' && gameBoard[4][5] === 'yellow' && gameBoard[5][5] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');
        }

        //dia - red check
        else if (gameBoard[0][0] === 'red' && gameBoard[1][1] === 'red' && gameBoard[2][2] === 'red' && gameBoard[3][3] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');
        } else if (gameBoard[1][1] === 'red' && gameBoard[2][2] === 'red' && gameBoard[3][3] === 'red' && gameBoard[4][4] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');
        } else if (gameBoard[2][2] === 'red' && gameBoard[3][3] === 'red' && gameBoard[4][4] === 'red' && gameBoard[5][5] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');
        } else if (gameBoard[0][0] === 'red' && gameBoard[1][1] === 'red' && gameBoard[2][2] === 'red' && gameBoard[3][3] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');
        } else if (gameBoard[1][0] === 'red' && gameBoard[2][1] === 'red' && gameBoard[3][2] === 'red' && gameBoard[4][3] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');
        } else if (gameBoard[2][1] === 'red' && gameBoard[3][2] === 'red' && gameBoard[4][3] === 'red' && gameBoard[5][4] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');
        } else if (gameBoard[2][0] === 'red' && gameBoard[3][1] === 'red' && gameBoard[4][2] === 'red' && gameBoard[5][3] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');
        } else if (gameBoard[0][2] === 'red' && gameBoard[1][3] === 'red' && gameBoard[2][4] === 'red' && gameBoard[3][5] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');
        } else if (gameBoard[0][1] === 'red' && gameBoard[1][2] === 'red' && gameBoard[2][3] === 'red' && gameBoard[3][4] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');
        } else if (gameBoard[1][2] === 'red' && gameBoard[2][3] === 'red' && gameBoard[3][4] === 'red' && gameBoard[4][5] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');
        } else if (gameBoard[3][0] === 'red' && gameBoard[2][1] === 'red' && gameBoard[1][2] === 'red' && gameBoard[0][3] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');
        } else if (gameBoard[4][0] === 'red' && gameBoard[3][1] === 'red' && gameBoard[2][2] === 'red' && gameBoard[1][3] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');
        } else if (gameBoard[3][1] === 'red' && gameBoard[2][2] === 'red' && gameBoard[1][3] === 'red' && gameBoard[0][4] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');
        } else if (gameBoard[5][0] === 'red' && gameBoard[4][1] === 'red' && gameBoard[3][2] === 'red' && gameBoard[2][3] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');
        } else if (gameBoard[4][1] === 'red' && gameBoard[3][2] === 'red' && gameBoard[2][3] === 'red' && gameBoard[1][4] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');
        } else if (gameBoard[3][2] === 'red' && gameBoard[2][3] === 'red' && gameBoard[1][4] === 'red' && gameBoard[0][5] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');
        } else if (gameBoard[5][1] === 'red' && gameBoard[4][2] === 'red' && gameBoard[3][3] === 'red' && gameBoard[2][4] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');
        } else if (gameBoard[4][2] === 'red' && gameBoard[3][3] === 'red' && gameBoard[2][4] === 'red' && gameBoard[1][5] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');
        } else if (gameBoard[5][2] === 'red' && gameBoard[4][3] === 'red' && gameBoard[3][4] === 'red' && gameBoard[2][5] === 'red') {
            alert('Player 1 won!');
            $('div').off('click');
        }
        // dia- yellow check
        else if (gameBoard[0][0] === 'yellow' && gameBoard[1][1] === 'yellow' && gameBoard[2][2] === 'yellow' && gameBoard[3][3] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');
        } else if (gameBoard[1][1] === 'yellow' && gameBoard[2][2] === 'yellow' && gameBoard[3][3] === 'yellow' && gameBoard[4][4] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');
        } else if (gameBoard[2][2] === 'yellow' && gameBoard[3][3] === 'yellow' && gameBoard[4][4] === 'yellow' && gameBoard[5][5] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');
        } else if (gameBoard[0][0] === 'yellow' && gameBoard[1][1] === 'yellow' && gameBoard[2][2] === 'yellow' && gameBoard[3][3] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');
        } else if (gameBoard[1][0] === 'yellow' && gameBoard[2][1] === 'yellow' && gameBoard[3][2] === 'yellow' && gameBoard[4][3] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');
        } else if (gameBoard[2][1] === 'yellow' && gameBoard[3][2] === 'yellow' && gameBoard[4][3] === 'yellow' && gameBoard[5][4] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');
        } else if (gameBoard[2][0] === 'yellow' && gameBoard[3][1] === 'yellow' && gameBoard[4][2] === 'yellow' && gameBoard[5][3] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');
        } else if (gameBoard[0][2] === 'yellow' && gameBoard[1][3] === 'yellow' && gameBoard[2][4] === 'yellow' && gameBoard[3][5] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');
        } else if (gameBoard[0][1] === 'yellow' && gameBoard[1][2] === 'yellow' && gameBoard[2][3] === 'yellow' && gameBoard[3][4] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');
        } else if (gameBoard[1][2] === 'yellow' && gameBoard[2][3] === 'yellow' && gameBoard[3][4] === 'yellow' && gameBoard[4][5] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');
        } else if (gameBoard[3][0] === 'yellow' && gameBoard[2][1] === 'yellow' && gameBoard[1][2] === 'yellow' && gameBoard[0][3] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');
        } else if (gameBoard[4][0] === 'yellow' && gameBoard[3][1] === 'yellow' && gameBoard[2][2] === 'yellow' && gameBoard[1][3] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');
        } else if (gameBoard[3][1] === 'yellow' && gameBoard[2][2] === 'yellow' && gameBoard[1][3] === 'yellow' && gameBoard[0][4] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');
        } else if (gameBoard[5][0] === 'yellow' && gameBoard[4][1] === 'yellow' && gameBoard[3][2] === 'yellow' && gameBoard[2][3] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');
        } else if (gameBoard[4][1] === 'yellow' && gameBoard[3][2] === 'yellow' && gameBoard[2][3] === 'yellow' && gameBoard[1][4] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');
        } else if (gameBoard[3][2] === 'yellow' && gameBoard[2][3] === 'yellow' && gameBoard[1][4] === 'yellow' && gameBoard[0][5] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');
        } else if (gameBoard[5][1] === 'yellow' && gameBoard[4][2] === 'yellow' && gameBoard[3][3] === 'yellow' && gameBoard[2][4] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');
        } else if (gameBoard[4][2] === 'yellow' && gameBoard[3][3] === 'yellow' && gameBoard[2][4] === 'yellow' && gameBoard[1][5] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');
        } else if (gameBoard[5][2] === 'yellow' && gameBoard[4][3] === 'yellow' && gameBoard[3][4] === 'yellow' && gameBoard[2][5] === 'yellow') {
            alert('Player 2 won!');
            $('div').off('click');
        }



    };

    // start double for loope creation process
    var counter = 1;
    for (var i = 0; i < gameBoard.length; i++) {
        var createRow = $('<div>');
        createRow.attr('id', counter);
        createRow.addClass('row');



        gameBoard.forEach(function(makeBoard, index) {
            var createCol = $('<div>');
            createCol.attr('id', counter);
            createCol.addClass('column' + index);
            // console.log(createCol);



            // create function 
            createCol.one('click', function() {

                $(this).addClass(mark);

                if (mark === 'red') {
                    $(this).css("background", "red")
                } else if (mark === 'yellow') {
                    ($(this).css("background", "yellow"))
                };

                gameBoard[i] = mark;



                if (event.target.id >= 1 && event.target.id <= 6) {
                    gameBoard[0][event.target.id - 1] = mark;
                    console.table(gameBoard);

                }
                if (event.target.id >= 7 && event.target.id <= 12) {
                    gameBoard[1][event.target.id - 7] = mark;
                    console.table(gameBoard);

                }
                if (event.target.id >= 13 && event.target.id <= 18) {
                    gameBoard[2][event.target.id - 13] = mark;
                    console.table(gameBoard);

                }
                if (event.target.id >= 19 && event.target.id <= 24) {
                    gameBoard[3][event.target.id - 19] = mark;
                    console.table(gameBoard);

                }
                if (event.target.id >= 25 && event.target.id <= 30) {
                    gameBoard[4][event.target.id - 25] = mark;
                    console.table(gameBoard);

                }
                if (event.target.id >= 31 && event.target.id <= 36) {
                    gameBoard[5][event.target.id - 31] = mark;
                    console.table(gameBoard);

                }



                // add check for winner before switching players 

                changePlayer();
                winCheck();

                // winCheck();
                // if ($(this).event.target.classList.contains('red')) {

                // }


            });
            createRow.append(createCol);
            counter++;


        });
        $('#board').append(createRow);






    };



    alert("Player 1 to start the Game!");

});
