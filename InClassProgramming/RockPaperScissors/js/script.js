

var options = [{id: 0, name: "Rock"}, {id: 1, name: "Paper"},{id: 2, name: "Scissors"}];



function playGame() {
    var p1 = document.getElementById("player1");
    var p2 = document.getElementById("player2");
    var w = document.getElementById("winner");

    p1.innerHTML = "";
    p2.innerHTML = "";
    w.innerHTML = "";

    var random1 = Math.floor(Math.random() * 3);
    var random2 = Math.floor(Math.random() * 3);

    p1.innerHTML = "Player 1 Choice: " + options[random1].name;
    p2.innerHTML = "Player 2 Choice: " + options[random2].name;

    var p1Wins = "Player 1 wins!";
    var p2Wins = "Player 2 wins!";

    if (random1 === random2)
        w.innerHTML = "Tie!";
    else if (random1 === 0)
    {
        if (random2 === 1)
            w.innerHTML = p2Wins;
        else
            w.innerHTML = p1Wins;
    }
    else if (random1 === 1)
    {
        if (random2 === 2)
            w.innerHTML = p2Wins;
        else
            w.innerHTML = p1Wins;
    }
    else
    {
        if (random2 === 0)
            w.innerHTML = p2Wins;
        else
            w.innerHTML = p1Wins;
    }
}