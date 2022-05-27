let counter = 0;
let clicks = 0;
let interval = 1000;
let autoClicker;
let autoClickerSec = 0;
let intervalDivisor = 1;

setInterval(test, 250);

function test()
{
    counters();
    clicks++;
    autoClickerIncrement();
}

function autoClickerUpdate()
{
    clearInterval(autoClicker);
    autoClicker = setInterval(counters, interval);
    if(autoClickerSec === 1)
    {
        document.getElementById("printAutoClicker").innerHTML = `${autoClickerSec} cookie per second`;  
    } else
    {
        document.getElementById("printAutoClicker").innerHTML = `${autoClickerSec} cookies per second`;
    }
}

function autoClickerIncrement()
{
    if (clicks % 10 === 0 && clicks !== 0) 
    {
        autoClickerSec++;
        interval = 1000 / intervalDivisor;
        intervalDivisor++;
        autoClickerUpdate();
    }
    console.log(interval); 
}

function counters() 
{
    counter++;
    document.getElementById("counter").innerHTML = counter;
}
