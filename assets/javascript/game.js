$(document).ready(function() {
    
    var wins = 0;
    var losses = 0;
    var totalScore = 0;

    // Displays the tallies onto html
    $("#winsText").text(wins);
    $("#loseText").text(losses);

    // Selects random number between 19-120
    var randNumber = [Math.floor(Math.random() * 101 + 19)];

    // Displays the random number onto html
    $("#randomNumber").text(randNumber);

    // Gives each stone a value between 1 and 12
    var blue = [Math.floor(Math.random() * 11 + 1)];
    var red = [Math.floor(Math.random() * 11 + 1)];
    var green = [Math.floor(Math.random() * 11 + 1)];
    var yellow = [Math.floor(Math.random() * 11 + 1)];

    // Resets the game
    function reset() {
        randNumber = [Math.floor(Math.random() * 101 + 19)];
        $("#randomNumber").text(randNumber);
        blue = [Math.floor(Math.random() * 11 + 1)];
        red = [Math.floor(Math.random() * 11 + 1)];
        green = [Math.floor(Math.random() * 11 + 1)];
        yellow = [Math.floor(Math.random() * 11 + 1)];
        totalScore = 0;
        $("#totalScore").text(totalScore);
    }

    // This function adds wins and also calls upon the reset() function to reset the game
    function winner() {
        alert("You saved the world from Thanos!");
        wins++;
        $("#winsText").text(wins);
        reset();
    }

    // Same as the winner() function except this one addes losses 
    function loser() {
        alert("YOU LOSE, Thanos has taken over the world...");
        losses++
        $("#loseText").text(losses);
        reset();
    }

    // Sets up click function for the stones and also sets the game win/loss conditions
    $("#blue-stone").on("click", function() {
        totalScore = parseInt(totalScore) + parseInt(blue);
        $("#totalScore").text(totalScore);
        if (totalScore == randNumber) {
            winner();
        }
        else if ( totalScore > randNumber) {
            loser();
        }
    });

    $("#red-stone").on("click", function() {
        totalScore = parseInt(totalScore) + parseInt(red);
        $("#totalScore").text(totalScore);
        if (totalScore == randNumber) {
            winner();
        }
        else if ( totalScore > randNumber) {
            loser();
        }
    });

    $("#yellow-stone").on("click", function() {
        totalScore = parseInt(totalScore) + parseInt(yellow);
        $("#totalScore").text(totalScore);
        if (totalScore == randNumber) {
            winner();
        }
        else if ( totalScore > randNumber) {
            loser();
        }
    });

    $("#green-stone").on("click", function() {
        totalScore = parseInt(totalScore) + parseInt(green);
        $("#totalScore").text(totalScore);
        if (totalScore == randNumber) {
            winner();
        }
        else if ( totalScore > randNumber) {
            loser();
        }
    });
    
    

});














