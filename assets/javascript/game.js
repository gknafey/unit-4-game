$(document).ready(function() {
$()
var wins = 0;
var losses = 0;
var totalScore = 0;
var randomNumber = randomNumber();
var red = red();
var green = green();
var blue = blue();
var yellow = yellow();

function randomNumber() {
    return Math.floor(Math.random() * 102) + 19;   
};

$("#randomNumber").text(randomNumber);

$("#win").text(wins);
$("#loss").text(losses);
$("#total").text(totalScore);

function red() {
    return Math.floor(Math.random() * 12) +1;
};

function green() {
    return Math.floor(Math.random() * 12) +1;
};

function blue() {
    return Math.floor(Math.random() * 12) +1;
};

function yellow() {
    return Math.floor(Math.random() * 12) +1;
};

$("#red").on("click", function() {
    $("#total").text(totalScore += red);

    if (totalScore === randomNumber) {
    wins++;
    $("#win").text(wins);
    totalScore = 0;
    $("#total").text(totalScore);
    function red1() {
        return Math.floor(Math.random() * 12) +1;
    };
    red = red1();
    function randomNumber2() {
        return Math.floor(Math.random() * 102) + 19;   
    };
    randomNumber = randomNumber2();
    $("#randomNumber").text(randomNumber);
    }

else if (totalScore > randomNumber) {
    losses++;
    $("#loss").text(losses);
    totalScore = 0;
    $("#total").text(totalScore);
    $("#randomNumber").text(randomNumber);
    function red1() {
        return Math.floor(Math.random() * 12) +1;
    };
    red = red1();
    function randomNumber2() {
        return Math.floor(Math.random() * 102) + 19;   
    };
    randomNumber = randomNumber2();
    $("#randomNumber").text(randomNumber);
    }

});

$("#yellow").on("click", function() {
    $("#total").text(totalScore += yellow);

    if (totalScore === randomNumber) {
        wins++;
        $("#win").text(wins);
        totalScore = 0;
        $("#total").text(totalScore);
        function yellow1() {
            return Math.floor(Math.random() * 12) +1;
        };
        yellow = yellow1();
        function randomNumber2() {
            return Math.floor(Math.random() * 102) + 19;   
        };
        randomNumber = randomNumber2();
        $("#randomNumber").text(randomNumber);
        }
    
    else if (totalScore > randomNumber) {
        losses++;
        $("#loss").text(losses);
        totalScore = 0;
        $("#total").text(totalScore);
        $("#randomNumber").text(randomNumber);
        function yellow1() {
            return Math.floor(Math.random() * 12) +1;
        };
        yellow = yellow1();
        function randomNumber2() {
            return Math.floor(Math.random() * 102) + 19;   
        };
        randomNumber = randomNumber2();
        $("#randomNumber").text(randomNumber);
        }

});

$("#blue").on("click", function() {
    $("#total").text(totalScore += blue);

    if (totalScore === randomNumber) {
        wins++;
        $("#win").text(wins);
        totalScore = 0;
        $("#total").text(totalScore);
        function blue1() {
            return Math.floor(Math.random() * 12) +1;
        };
        blue = blue1();
        function randomNumber2() {
            return Math.floor(Math.random() * 102) + 19;   
        };
        randomNumber = randomNumber2();
        $("#randomNumber").text(randomNumber);
        }
    
    else if (totalScore > randomNumber) {
        losses++;
        $("#loss").text(losses);
        totalScore = 0;
        $("#total").text(totalScore);
        $("#randomNumber").text(randomNumber);
        function blue1() {
            return Math.floor(Math.random() * 12) +1;
        };
        blue = blue1();
        function randomNumber2() {
            return Math.floor(Math.random() * 102) + 19;   
        };
        randomNumber = randomNumber2();
        $("#randomNumber").text(randomNumber);
        }

});

$("#green").on("click", function() {
    $("#total").text(totalScore += green);

    if (totalScore === randomNumber) {
        wins++;
        $("#win").text(wins);
        totalScore = 0;
        $("#total").text(totalScore);
        function green1() {
            return Math.floor(Math.random() * 12) +1;
        };
        green = green1();
        function randomNumber2() {
            return Math.floor(Math.random() * 102) + 19;   
        };
        randomNumber = randomNumber2();
        $("#randomNumber").text(randomNumber);
        }
    
    else if (totalScore > randomNumber) {
        losses++;
        $("#loss").text(losses);
        totalScore = 0;
        $("#total").text(totalScore);
        $("#randomNumber").text(randomNumber);
        function green1() {
            return Math.floor(Math.random() * 12) +1;
        };
        green = green1();
        function randomNumber2() {
            return Math.floor(Math.random() * 102) + 19;   
        };
        randomNumber = randomNumber2();
        $("#randomNumber").text(randomNumber);
        }
});

});

