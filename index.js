const fs = require("fs");
const date = require("date-and-time");
const filename = "131860876603139440.txt";

const statesTime =
    {
        "criando":0,
        "perca":0,
        "executando":0,
        "programando":0,
        "refatorando":0,
        "repouso":0
    };

var lastState;
var lastTime;

var lines = fs.readFileSync(filename, 'utf-8')
    .split('\n')
    .filter(Boolean);

for(var i = 0; i < lines.length; i++)
{
    var stateAndTime = lines[i].split(" - ");
    var state = stateAndTime[0];
    var time = date.parse(stateAndTime[1], "DD/MM/YYYY HH:mm:ss");

    if(i==0)
    {
        lastState = state;
        lastTime = time;
        continue;
    }
    
    var timeLapsed = date.subtract(time, lastTime).toSeconds();

    statesTime[lastState]+=timeLapsed;
    lastState = state;
    lastTime = time;
}

console.log(statesTime)