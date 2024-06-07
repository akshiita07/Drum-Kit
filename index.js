var noOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < noOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", alertUser);
}

//function to run on click:
function alertUser() {
    var buttonChar = this.innerHTML;
    // console.log(buttonChar);
    sound(buttonChar);
    animateButton(buttonChar);
}


document.addEventListener('keydown', function (event) {
    // alert("keyboard key pressed!");
    // console.log(event);
    var keyPress = event.key;
    sound(keyPress);
    animateButton(keyPress);
})

function sound(key) {
    switch (key) {
        case "q":
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;

        case "w":
            var kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
            break;

        case "e":
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;

        case "r":
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;
        case "t":
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;

        case "y":
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;
        default:
            alert("Drum does not exist!");
            break;
    }
}

function animateButton(key) {
    document.querySelector("." + key).classList.add("pressed");
    // setTimeout(document.querySelector("."+key).classList.remove("pressed","red"),1000);
    setTimeout(function () {
        document.querySelector("." + key).classList.remove("pressed")
    }, 700)
    //700ms
}

//standard way:
// document.getElementsByClassName("q")[0].addEventListener("click",function(){
//     var audioElement=new Audio('./sounds/crash.mp3');
//     audioElement.play();
// });
// document.getElementsByClassName("w")[0].addEventListener("click",function(){
//     var audioElement=new Audio('./sounds/kick-bass.mp3');
//     audioElement.play();
// });
// document.getElementsByClassName("e")[0].addEventListener("click",function(){
//     var audioElement=new Audio('./sounds/snare.mp3');
//     audioElement.play();
// });
// document.getElementsByClassName("r")[0].addEventListener("click",function(){
//     var audioElement=new Audio('./sounds/tom-1.mp3');
//     audioElement.play();
// });
// document.getElementsByClassName("t")[0].addEventListener("click",function(){
//     var audioElement=new Audio('./sounds/tom-2.mp3');
//     audioElement.play();
// });
// document.getElementsByClassName("y")[0].addEventListener("click",function(){
//     var audioElement=new Audio('./sounds/tom-3.mp3');
//     audioElement.play();
// });