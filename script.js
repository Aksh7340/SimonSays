let gameSq=[];
let userSq=[];
let color=["red","yellow","green","purple"];
let h2=document.querySelector("h2");
let started=false;
let level=0;
let highScore=0;
let h3=document.createElement("h3");

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
};
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game started");
        started=true;
        levelUp();
    }
  
})

function levelUp(){
    userSq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let index=Math.floor(Math.random()*3);
    let btn=color[index];
    let ranBtn=document.querySelector(`.${btn}`);
    gameSq.push(btn);

    console.log(gameSq);
    gameFlash(ranBtn);

}

function checkAns(index){
 
 if(userSq[index]==gameSq[index]){
    
    if(userSq.length==gameSq.length){
        setTimeout(levelUp,1000);
    }
 }
 else{
    h2.innerHTML=`Game over!Your score was <b>${level}<b> <br> Press any key to restart.`;
    for(let btn of btns){
        btn.removeEventListener("click",btnPress);
    }
    highScore=level;
   
    h3.innerHTML=`High score=<b>${highScore}`;
   h2.insertAdjacentElement("afterend",h3);
 
    reset();
 }
 
}

function userFlash(btn){
    btn.classList.add("blue");
    setTimeout(function(){
        btn.classList.remove("blue");
    },250);
};

function btnPress(){
    let btn=this;
    console.log(btn);
    let id=btn.getAttribute("id");  
    userSq.push(id);
    console.log(userSq);

    userFlash(btn);
    checkAns(userSq.length-1);
}

let btns=document.querySelectorAll(".btn");
for(let btn of btns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    if(level>highScore){
        highScore=level;
        h3.innerHTML=`High score=<b>${highScore}`;
      }
      
    level=0;
    started=false;
    gameSq=[];
    userSq=[];
    for(let btn of btns){
        btn.addEventListener("click",btnPress);
    }
}

