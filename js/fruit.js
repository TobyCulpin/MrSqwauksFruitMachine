//Debugged and refactored by Tobias Culpin

//Mr Seagull Wrote this - IT IS AWESOMMMMMMMEEEEEEEEEEE

//When element with id="Start" is clicked spin() is called;
document.getElementById("Start").addEventListener("click", spin);

document.getElementById("incBet1")

let balance = 500;
let bet = 1;
let payout = 0;
let wins = 0;

//Spins all the reels and displays images and displays win or lose image
function spin()
{
    //If bet is 0 the reels will not spin as a bet is required
    if (bet == 0)
    {
        return;
    }

    let final = [];

    //adds the image ints for each reel
    final.push(spinReel("r1"));
    final.push(spinReel("r2"));
    final.push(spinReel("r3"));

    //Checks if all of the reels match up
    if (final[0] == final[1] && final[1] == final[2])//Winner
    {
        //Displays BigWin.png
        document.getElementById("status").src = "images/BigWin.png";

        
        //You now gain your bet times 10 when you win.
        balance += (bet * 10);

        //Records win
        ++wins;

        //For displaying the payout, +ve as it's a win
        payout = (bet * 10);
    }
    else//Loser
    {
        //Displays Fail.png
        document.getElementById("status").src = "images/Fail.png";

        //Losing the bet
        balance -= bet;

        //checks if the bet needs to be lowered
        if (balance < bet)
        {
            bet = balance;
        }

        //For displaying the payout, 0 as it's a loss
        payout = 0;
    }

    updateValues();   
}    

//Changes image of the reel that is passed as argument
function spinReel(reel)
{
    //i is a random int where 0 <= i <= 9   each int corresponds to an image
    let i = Math.floor(Math.random() * 10)

    switch (i)
    {
        case 0://Switch the reel image src to Cherry.png
            document.getElementById(reel).src = "images/Cherry.png";
            break;
        case 1://Switch the reel image src to Grapes.png
            document.getElementById(reel).src = "images/Grapes.png";
            break;
        case 2://Switch the reel image src to Lemon.png
            document.getElementById(reel).src = "images/Lemon.png";
            break;
        case 3://Switch the reel image src to Orange.png
            document.getElementById(reel).src = "images/Orange.png";
            break;
        case 4://Switch the reel image src to Strawberry.png
            document.getElementById(reel).src = "images/Strawberry.png";
            break;
        case 5://Switch the reel image src to Watermelon.png
            document.getElementById(reel).src = "images/Watermelon.png";
            break;
        case 6://Switch the reel image src to Bananas.png
            document.getElementById(reel).src = "images/Bananas.png";
            break;
        case 7://Switch the reel image src to Dollars.png
            document.getElementById(reel).src = "images/Dollars.png";
            break;
        case 8://Switch the reel image src to OneBar.png
            document.getElementById(reel).src = "images/OneBar.png";
            break;
        case 9://Switch the reel image src to ThreeBars.png
            document.getElementById(reel).src = "images/ThreeBars.png";
            break;
        default:
            //This code shouldn't be reached
            break;
    }
    //returns the int representing the image displayed
    return i;
}

//Initializes the balance display on screen
function updateValues()
{
    document.getElementById("balanceValue").innerHTML = balance;
    document.getElementById("betValue").innerHTML = bet;
    document.getElementById("payoutValue").innerHTML = payout;
    document.getElementById("winValue").innerHTML = wins;
}
updateValues();

//Handles the buttons
document.onmousedown = handler;

function handler(event)
{
    if (event.target.className == "reset")
    {
        location.reload();
    }

    if (event.target.className.slice(3, 6) == "Bet")
    {
        //alert("foundClass")
        let change = 0;

        change = event.target.className[event.target.className.length - 1];

        parseInt(change);

        change = Math.pow(5, change);
    
        if (event.target.className[0] == 'd')
        {
            change *= -1;
        }

        if ((bet + change) < 1)
        {
            if (balance == 0)
            {
                bet = 0;
            }
            else
            {
                bet = 1;
            }
        }
        else if ((bet + change) > balance)
        {
            bet = balance;
        }
        else if ((bet + change) > 100)
        {
            bet = 100;
        }
        else
        {
            bet += change;
        }

        updateValues();
    }
}