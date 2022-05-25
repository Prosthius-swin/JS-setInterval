let autoClicker = 1;
let counter = 0;
let clicks = 0;

setInterval(counters, clicks * 1000);
setInterval(autoClickerLoop, 1000)

function autoClickerLoop()
{
    if (clicks % 10 === 0 && clicks !== 0) 
    {
        autoClicker *= 2;
    }
    console.log(autoClicker);
}

function counters() 
{
    counter++;
    document.getElementById("counter").innerHTML = counter;
}


//console.log(`element == ${element}`);
