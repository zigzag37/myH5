var r ,score=0,grade=1,lastHumanChoice,humanChoice;
var lastWinner="noone",lastComputerChoice="rock";
function  rock()
{
    document.getElementById("myChoice").innerHTML=" <img src=\"images/rock.png\">";
    humanChoice="rock";
    judge("rock");
    lastHumanChoice="rock"
}
function  scissors()
{
    document.getElementById("myChoice").innerHTML=" <img src=\"images/scissors.png\">";
    humanChoice="scissors";
    judge("scissors");
    lastHumanChoice="scissors"
}
function  paper()
{
    document.getElementById("myChoice").innerHTML=" <img src=\"images/paper.png\">";
    humanChoice="paper";
    judge("paper");
    lastHumanChoice="paper"
}
function judge(myChoice){
    r = 3*Math.random();
    var computerResult
    if(grade==1){
        computerResult=onlyRock();
    }
    else if(grade==2)
    {
        computerResult=learnFromHuman();
    }
    else if(grade==3)
    {
        computerResult=winnerAgain();
        lastComputerChoice=computerResult;
    }
    else if(grade==4){
        computerResult=loseChange();
        lastComputerChoice=computerResult;
    }
    else if(grade==5){
        computerResult=lovePaper();
    }
    else if(grade==6){
        computerResult=randomPlayer();
    }
    else if(grade==7){
        computerResult=cheatingMan(humanChoice);
    }
    else{
        computerResult=computerChoice();
    }

    if(myChoice=="rock"){
        if(computerResult=="rock") {
            //document.getElementById("result").innerHTML="draw"
            //isComputerWin=false;
            lastWinner="noone"
        }
        else if(computerResult=="scissors") {
            //document.getElementById("result").innerHTML="win"
            score++;
            lastWinner="human"
        }
        else {
            lastWinner="computer"
            //document.getElementById("result").innerHTML="lose"
            score--;
        }
    }
    else if(myChoice=="scissors"){
        if(computerResult=="rock") {
            //document.getElementById("result").innerHTML="lose"
            score--;
            lastWinner="computer"
        }
        else if(computerResult=="scissors") {
            //document.getElementById("result").innerHTML="draw"
            lastWinner="noone"
        }
        else {
            //document.getElementById("result").innerHTML="win"
            score++;
            lastWinner="human"
        }
    }
    else{
        if(computerResult=="rock") {
            //document.getElementById("result").innerHTML="win"
            score++;
            lastWinner="human"
        }
        else if(computerResult=="scissors") {
            //document.getElementById("result").innerHTML="lose"
            lastWinner="computer"
            score--;
        }
        else {
            // document.getElementById("result").innerHTML="draw"
            lastWinner="noone"
        }
    }
    if(score==5){
        score=0;
        grade++;
    }
    document.getElementById("result").innerHTML="第"+grade+"关,积分："+score;
    if(grade>10){
        document.getElementById("result").innerHTML="闯关成功"+score;
    }
}
function go()
{
    // var r = 3*Math.random();
}
function computerChoice()
{
    if(r<1)
    {
        document.getElementById("computerChoice").innerHTML="<img src='images/rock.png'>";
        return "rock"
    }
    else if(r<2)
    {
        document.getElementById("computerChoice").innerHTML="<img src='images/scissors.png'>";
        return "scissors"
    }
    else
    {
        document.getElementById("computerChoice").innerHTML="<img src='images/paper.png'>";
        return "paper"
    }
}
function onlyRock(){
    document.getElementById("computerName").innerHTML="电脑大锤哥";
    document.getElementById("computerChoice").innerHTML="<img src='images/rock.png'>";
    return "rock";
}
function learnFromHuman(){
    document.getElementById("computerName").innerHTML="模仿弟";
    document.getElementById("computerChoice").innerHTML="<img src='images/"+lastHumanChoice+".png'>";
    return lastHumanChoice;
}
function winnerAgain(){
    document.getElementById("computerName").innerHTML="赢了还出";
    var temp=computerChoice();
    if(lastWinner=="computer"){
        document.getElementById("computerChoice").innerHTML="<img src='images/"+lastComputerChoice+".png'>";
        return lastComputerChoice;
    }
    else {
        document.getElementById("computerChoice").innerHTML="<img src='images/"+temp+".png'>";
        return temp;
    }
}
function loseChange(){
    document.getElementById("computerName").innerHTML="输了就换";
    var temp=computerChoice();
    if(lastWinner=="human"){
        var temp = getResultExculde(lastComputerChoice);
        document.getElementById("computerChoice").innerHTML="<img src='images/"+lastComputerChoice+".png'>";
        return temp;
    }
    else {
        document.getElementById("computerChoice").innerHTML="<img src='images/"+temp+".png'>";
        return temp;
    }
}
function getResultExculde(exclusion){
    var temp = computerChoice();
    if(temp==exclusion){
        return getResultExculde(exclusion);
    }
    else
        return temp;
}

function loverPaper()
{
    r = 3*Math.random();
    var temp;
    if(r<0.8)
    {
        document.getElementById("computerChoice").innerHTML="<img src='images/rock.png'>";
        temp= "rock"
    }
    else if(r<1.7)
    {
        document.getElementById("computerChoice").innerHTML="<img src='images/scissors.png'>";
        temp=  "scissors"
    }
    else
    {
        document.getElementById("computerChoice").innerHTML="<img src='images/paper.png'>";
        temp=  "paper"
    }
    document.getElementById("computerName").innerHTML="爱布先生";
    document.getElementById("computerChoice").innerHTML="<img src='images/"+temp+".png'>";
    return temp;

}
function randomPlayer()
{
    r = 3*Math.random();
    var temp;
    if(r<1)
    {
        document.getElementById("computerChoice").innerHTML="<img src='images/rock.png'>";
        temp= "rock"
    }
    else if(r<2)
    {
        document.getElementById("computerChoice").innerHTML="<img src='images/scissors.png'>";
        temp=  "scissors"
    }
    else
    {
        document.getElementById("computerChoice").innerHTML="<img src='images/paper.png'>";
        temp=  "paper"
    }
    document.getElementById("computerName").innerHTML="随性所欲";
    document.getElementById("computerChoice").innerHTML="<img src='images/"+temp+".png'>";
    return temp;
}
function cheaetingMan(humanChoice){
    document.getElementById("computerName").innerHTML="作弊老头";
    var temp=computerChoice();
    r=Math.random();
    if(humanChoice=="rock"){
        if(r<0.5){
            document.getElementById("computerChoice").innerHTML="<img src='images/paper.png'>";
            return "paper";
        }
        else{
            return computerChoice();
        }
    }
    else  if(humanChoice=="scissors"){

        if(r<0.5){
            document.getElementById("computerChoice").innerHTML="<img src='images/rock.png'>";
            return "rock";
        }
        else{
            return computerChoice();
        }
    }
    else{
        if(r<0.5){
            document.getElementById("computerChoice").innerHTML="<img src='images/scissors.png'>";
            return "scissors";
        }
        else{
            return computerChoice();
        }

    }
}

