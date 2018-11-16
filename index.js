const fs = require("fs");
const date = require("date-and-time");
const filename = "131860876603139440.txt";

var statesTime =
{
    "criando":0,
    "perca":0,
    "executando":0,
    "programando":0,
    "refatorando":0,
    "repouso":0
};

var statesCount = 
{
    "criando":0,
    "perca":0,
    "executando":0,
    "programando":0,
    "refatorando":0,
    "repouso":0
};

var stateTransitions = 
{
    "criando->perca":0,
    "criando->executando":0,
    "criando->programando":0,
    "criando->refatorando":0,
    "criando->repouso":0,
    "perca->criando":0,
    "perca->executando":0,
    "perca->programando":0,
    "perca->refatorando":0,
    "perca->repouso":0,
    "executando->criando":0,
    "executando->perca":0,
    "executando->programando":0,
    "executando->refatorando":0,
    "executando->repouso":0,
    "programando->criando":0,
    "programando->perca":0,
    "programando->executando":0,
    "programando->refatorando":0,
    "programando->repouso":0,
    "refatorando->criando":0,
    "refatorando->perca":0,
    "refatorando->executando":0,
    "refatorando->programando":0,
    "refatorando->repouso":0,
    "repouso->criando":0,
    "repouso->perca":0,
    "repouso->executando":0,
    "repouso->programando":0,
    "repouso->refatorando":0
};

var lastState;
var lastTime;

var lines = fs.readFileSync(filename, 'utf-8')
    .split('\n')
    .filter(Boolean);

Object.filter = (obj, predicate) => 
    Object.keys(obj)
        .filter( key => predicate(obj[key]) )
        .reduce( (res, key) => (res[key] = obj[key], res), {} );

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
    if(timeLapsed>0)
    {
        statesCount[state]++;
        stateTransitions[lastState+"->"+state]++;
    }
    statesTime[lastState]+=timeLapsed;    
    lastState = state;
    lastTime = time;
}
console.log("\n QUANTIDADE DE ESTADOS")
console.log(statesCount);

console.log("\n TEMPO DE ESTADO: ")
console.log(statesTime);

console.log("\n QUANTIDADE TRANSAÇÕES: ")
console.log(Object.filter(stateTransitions, count => count > 0));

