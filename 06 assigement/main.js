let data = [
    {
        Q: "Q : Js is used for?",
        a: "Frontend",
        b: "Animation",
        c: "Dynamically update content",
        d: "Backend",
        ans: "ans3",
    },
    {
        Q: "Q : Fullform of js?",
        a: "Javascript",
        b: "Javasience",
        c: "JavaS",
        d: "Javasurce",
        ans: "ans1",
    },
    {
        Q: "Q : who devolped Js?",
        a: "santa",
        b: "brenden each",
        c: "george",
        d: "neck",
        ans: "ans2",
    },
    {
        Q: "Q : when Js develope?",
        a: "1995",
        b: "1990",
        c: "1999",
        d: "1892",
        ans: "ans1"
    }
]

let questaion = document.getElementById("qns");
let option1 = document.getElementById("opt1");
let option2 = document.getElementById("opt2");
let option3 = document.getElementById("opt3");
let option4 = document.getElementById("opt4");

let answers =document.querySelectorAll("options");
let num =0;
let score =0;
let myScore =document.querySelector(".myScore");

questaion.innerHTML=data[num].Q;
option1.innerHTML=data[num].a;
option2.innerHTML=data[num].b;
option3.innerHTML=data[num].c;
option4.innerHTML=data[num].d;

function checkAns(){
    let ans;
    answers.forEach((curElement)=>{
        if(curElement.checked){
            ans = curElement.id;
            console.log(ans);  
        }
    })
    return ans;
}

function next(){

    let checkedAns = checkAns();

    if(checkedAns == data[num].ans){
        score++;
    }
    num++;
if(num < data.length){
    questaion.innerHTML=data[num].Q;
    option1.innerHTML=data[num].a;
    option2.innerHTML=data[num].b;
    option3.innerHTML=data[num].c;
    option4.innerHTML=data[num].d;  
}else{
    myScore.innerHTML=`You Scored ${score}/${data.lenth} <br/>
    <button onclik="location.reload()">Play Again</button>`
}


}


