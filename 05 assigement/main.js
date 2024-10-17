let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add(){
    if(inputs.value == ""){
        alert("Please Enter Task")
    }else{
        let newEl = document.createElement("ul");
        newEl.innerHTML=`${inputs.value}` ;
        text.appendChild(newEl);
        inputs.value="";
        newEl.querySelector("i").addEventListener("click" , remove);
        function remove(){

        }

    }
}