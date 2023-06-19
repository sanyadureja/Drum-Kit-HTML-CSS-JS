for(let i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",onClick);
}

function onClick(){
    let letter=this.textContent;
    sound(letter);
    buttonAnimation(letter);
}

const sound=(letter)=>{
    switch(letter){
        case 'w':
            let audio_w=new Audio("sounds/tom-1.mp3");
            audio_w.play();
            break;
        
        case 'a':
            let audio_a=new Audio("sounds/tom-2.mp3");
            audio_a.play();
            break;

        case 's':
            let audio_s=new Audio("sounds/tom-3.mp3");
            audio_s.play();
            break;

        case 'd':
            let audio_d=new Audio("sounds/tom-4.mp3");
            audio_d.play();
            break;

        case 'j':
            let audio_j=new Audio("sounds/crash.mp3");
            audio_j.play();
            break;

        case 'k':
            let audio_k=new Audio("sounds/kick-bass.mp3");
            audio_k.play();
            break;

        case 'l':
            let audio_l=new Audio("sounds/snare.mp3");
            audio_l.play();
            break;
        
        default:
            alert(letter);
    }
}

document.addEventListener("keypress",function(event){
    sound(event.key);
    buttonAnimation(event.key);
})

buttonAnimation=(letter)=>{
    let activeButton=document.querySelector("."+letter);
    activeButton.classList.add("pressed","black");
    setTimeout(function() {
        activeButton.classList.remove("pressed","black");
      }, 200);
}
