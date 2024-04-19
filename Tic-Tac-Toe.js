const makeMove = document.querySelectorAll("#play");
let buttons = document.querySelectorAll('.Btn');
let reset = document.querySelector('.Reset');
let result = document.querySelector('.Result');
var places = document.getElementsByTagName('button');
let player = 1;
let counter = 0;
let winner = 0;
let win = false;

buttons.forEach(function(makeMove)
{
    makeMove.addEventListener('click', function()
    {
        if (makeMove.textContent == "")
        {
            if (player == 1)
            {
                makeMove.textContent = "X";
                player = 2;
            }
            else
            {
                makeMove.textContent = "O";
                player = 1;
            }
            counter++;
            checkWinner();
            if (counter == 9)
            {
                console.log("Draw");
                reset.textContent = "New Game";
                result.textContent = "Draw";
                for (let i = 0; i < 9; i++)
                {
                    places[i].style.display = "none";
                }

            }
        }
    })
});


reset.addEventListener('click', function(e)
{
    for (let i = 0; i < 9; i++)
    {
        places[i].textContent = "";
        places[i].style.display = "block";
    }
    counter = 0;
    winner = 0;
    reset.textContent = "Reset";
    result.textContent = "";
})

function checkWinner()
{
    if (places[0].textContent == places[1].textContent && places[0].textContent == places[2].textContent && places[0].textContent != "")
    {
        if (places[0].textContent == "X")
            winner = 1;
        else if (places[0].textContent == "O")
            winner = 2;    
    }
    else if (places[0].textContent == places[3].textContent && places[0].textContent == places[6].textContent && places[0].textContent != "")
    {
        if (places[0].textContent == "X")
            winner = 1;
        else if (places[0].textContent == "O")
            winner = 2;
    }
    else if (places[0].textContent == places[4].textContent && places[0].textContent == places[8].textContent && places[0].textContent != "")
    {
        if (places[0].textContent == "X")
            winner = 1;
        else if (places[0].textContent == "O")
            winner = 2;
    }
    else if (places[1].textContent == places[4].textContent && places[1].textContent == places[7].textContent && places[1].textContent != "")
    {
        if (places[1].textContent == "X")
            winner = 1;
        else if (places[1].textContent == "O")
            winner = 2;
    }
    else if (places[2].textContent == places[5].textContent && places[2].textContent == places[8].textContent && places[2].textContent != "")
    {
        if (places[2].textContent == "X")
            winner = 1;
        else if (places[2].textContent == "O")
            winner = 2;
    }
    else if (places[2].textContent == places[4].textContent && places[2].textContent == places[6].textContent && places[2].textContent != "")
    {
        if (places[2].textContent == "X")
            winner = 1;
        else if (places[2].textContent == "O")
            winner = 2;
    }
    else if (places[3].textContent == places[4].textContent && places[3].textContent == places[5].textContent && places[3].textContent != "")
    {
        if (places[3].textContent == "X")
            winner = 1;
        else if (places[3].textContent == "O")
            winner = 2;
    }
    else if (places[6].textContent == places[7].textContent && places[6].textContent == places[8].textContent && places[6].textContent != "")
    {
        if (places[6].textContent == "X")
            winner = 1;
        else if (places[6].textContent == "O")
            winner = 2;
    }

    if (winner == 1)
    {
        console.log("Player 1 Wins");
        reset.textContent = "New Game";
        result.textContent = "Player 1 Wins";
        for (let i = 0; i < 9; i++)
        {
            places[i].style.display = "none";
            
        }
    }
    else if (winner == 2)
    {
        console.log("Player 2 Wins");
        reset.textContent = "New Game";
        result.textContent = "Player 2 Wins";
        for (let i = 0; i < 9; i++)
        {
            places[i].style.display = "none";
        }
    }
}