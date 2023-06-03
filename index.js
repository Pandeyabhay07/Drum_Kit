function makeSound(key){
    switch(key){
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3=new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
//         default:
//             alert("Please press the write key :)");
//             break;
    }
}

var n=document.querySelectorAll(".drum").length;
for(var i=0;i<n;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
       var key=this.innerHTML;
       makeSound(key);
       addAnimations(key);
    }); 
}

document.addEventListener("keydown",function(event){
    makeSound(event.key);
    addAnimations(event.key);
});


function addAnimations(currentkey){
    var activeKey=document.querySelector("."+ currentkey); 
    // ("."+key)==.w or .a   

    activeKey.classList.add("pressed");

    setTimeout(function(){
        activeKey.classList.remove("pressed");
    },100);
    // 100 miliseconds ke baad pressed class remove ho jaeygi
}
