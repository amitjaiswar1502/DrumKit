let numberOfdrumbutton = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfdrumbutton; i++) {

    document.querySelectorAll(".drum")[i].addEventListener('click', function () {

        let buttonInnerHtml = this.innerHTML;
        console.log(this);

        switch (buttonInnerHtml) {
            case "w":
                let crash = new Audio("./sounds/crash.mp3");

                crash.play();
                break;

            case "a":
                let kick = new Audio("./sounds/kick-bass.mp3");

                kick.play();
                break;

            case "s":
                let snare = new Audio("./sounds/snare.mp3");

                snare.play()
                break;

            case "d":
                let tom1 = new Audio("/sounds/tom-1.mp3");

                tom1.play();
                break;

            case "j":
                let tom2 = new Audio("./sounds/tom-2.mp3");

                tom2.play();
                break;

            case "k":
                let tom3 = new Audio('./sounds/tom-3.mp3');

                tom3.play();
                break;

            case "l":
                let tom4 = new Audio('./sounds/tom-4.mp3');
                tom4.play();
                break;

            default: console.log(buttonInnerHtml);

        }

    });

}
const removeClass = () => {
    let numberOfdrumbutton = document.querySelectorAll(".drum");
    for (let i = 0; i < numberOfdrumbutton.length; i++) {

        numberOfdrumbutton[i].setAttribute("class", `${numberOfdrumbutton[i].innerHTML} drum`);
    } 
}


document.addEventListener("keypress", function (event) {
    // console.log(event.key);
    makeSound(event.key);
});

document.addEventListener("keyup", function () {
    
    removeClass();
});


function makeSound(key) {

    removeClass();
    document.querySelector("."+key).setAttribute("class", `${key} drum active`);
    // document.querySelector("."+key).setAttribute("class", key+" drum active");

    switch (key) {
        case "w":
            let crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;

        case "a":
            let kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;

        case "s":
            let snare = new Audio("./sounds/snare.mp3");
            snare.play()
            break;

        case "d":
            let tom1 = new Audio("/sounds/tom-1.mp3");
            tom1.play();
            break;

        case "j":
            let tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;

        case "k":
            let tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;

        case "l":
            let tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;

        default: console.log(key);

    }

}






// function handleClick() {
//     alert("I got click");
// }

// // document.querySelector("button").addEventListener('click' , handleClick);
// document.querySelector(".set").addEventListener('click' , handleClick);




