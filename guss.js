/*console.log("hello")
const score=( document.querySelector(".message").textContent);
console.log(score)
document.querySelector(".message").textContent="correct number !"
console.log(document.querySelector(".message"))
document.querySelector(".number").textContent=13
document.querySelector(".score").textContent=10


//console.log(document.querySelector(".guses").value)
document.querySelector(".guses").value=24
console.log(document.querySelector(".guses").value)
*/
let secretnumber=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0
//document.querySelector(".number").textContent=secretnumber


document.querySelector(".check").addEventListener("click",function(){
    const guses=Number(document.querySelector(".guses").value)
    console.log(guses,typeof(guses))
// when there is no number
    if(!guses){
        document.querySelector(".message").textContent="No number"
    }
/// when players win
    else if(guses===secretnumber){
        document.querySelector(".won").textContent="YOU WON...!"
        document.querySelector(".message").textContent="correct number !" ;
        document.querySelector(".number").textContent=secretnumber;
        //changing the color
        document.querySelector("body").style.backgroundColor="#60b347";
        document.querySelector(".number").style.width="30rem";
        if(score>highscore){
            highscore=score;
            document.querySelector(".highscore").textContent=highscore;
        }
    }
    // when too high
    else if(guses>secretnumber){
        if(score>0){
            document.querySelector(".message").textContent="Too High"
            score--;
            document.querySelector(".score").textContent=score;
        }
        else{
            document.querySelector(".message").textContent="You lose the game"
            document.querySelector(".message").textContent=0;
        }

    }//when too low
    else if(guses<secretnumber){

        document.querySelector(".message").textContent="Too Less"
        score--;
        document.querySelector(".score").textContent=score

    }
    
});
document.querySelector(".again").addEventListener("click",function(){
    score=20;
    secretnumber=Math.trunc(Math.random()*20)+1;
    document.querySelector(".won").textContent="Guess The Number"
    document.querySelector(".message").textContent="Start guessing...."
    document.querySelector(".score").textContent="20"
    document.querySelector(".number").textContent="?"
    document.querySelector(".guses").value="";
    document.querySelector("body").style.backgroundColor="black"
    document.querySelector(".number").style.width="15rem"

})