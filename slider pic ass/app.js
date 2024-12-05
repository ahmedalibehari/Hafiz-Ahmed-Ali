let slider = document.querySelector(".slider")
console.log(slider);

let myArr = ['1.jpj', '2.jpj', '3.jpj', '4.jpj']
console.log(myArr);

var img = 0

function updateImage(){
    slider.src = './image/'+myArr[img]
}
// console.log(updateImage);/


function next(){
    img++
    if(img >= myArr.length){
        img = 0
    }
    updateImage()
}

function prev(){
    img--
    if(img <0){
        img = myArr.length -1
    }
    updateImage()
}