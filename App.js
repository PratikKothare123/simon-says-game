let gameSeq=[];
let userSeq=[];

let colourBtn=["red","yellow","blue","pink"];

let started=false;
let level=0;

let h3=document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game is started!");
        started=true;
        levelUP();

    }
})

document.getElementById("start-btn").addEventListener("click", function () {
  if (started === false) {
    console.log("Game started by button!");
    started = true;
    levelUP();
  }
});


function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250)
}

function levelUP(){
   userSeq=[];
    level++;
    h3.innerText=`Level ${level}`;

    
    let randomIdx=Math.floor(Math.random()*4);
    let randColor=colourBtn[randomIdx];
    let randbtn=document.querySelector(`.${randColor}`);
    // console.log(randomIdx);
    // console.log(randColor);
    // console.log(randbtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
   gameflash(randbtn);

}

function CheckAns(idx){
    if(userSeq[idx]==gameSeq[idx])
    {
       if(userSeq.length==gameSeq.length){
        setTimeout(levelUP,1000);
       }
    }else{
         h3.innerHTML=`Game Over! Your score was <b> ${level} </b> <br>Press Any Key to Start`;
         document.querySelector("body").style.backgroundColor="red";
         setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
         },150);
         reset();
    }
}

function btnpress(){
    // console.log(this);
    let btn=this;
    userflash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    CheckAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;
}

