const intro = document.getElementById("intro");
const letter = document.getElementById("letter");
const button = document.getElementById("startButton");

const petals = document.getElementById("petals");

let autumnMode = false;


// =====================
// ABRIR CARTA
// =====================

button.addEventListener("click", () => {

    intro.style.opacity = "0";


    setTimeout(() => {

        intro.style.display = "none";

        letter.style.display = "flex";


        setTimeout(() => {

            letter.classList.add("show");

        },100);


        autumnMode = true;


    },1000);

});



// =====================
// FOLHAS / PÉTALAS
// =====================

function createPetal(){

    const petal = document.createElement("div");


    if(autumnMode){

        petal.classList.add("leaf");


        const colors = [

            "#C47A32",
            "#D89B3D",
            "#8B5A2B",
            "#E0B15A",
            "#A85F24"

        ];


        petal.style.background =
        colors[Math.floor(Math.random()*colors.length)];


    }else{

        petal.classList.add("petal");


        const colors = [

            "#74A9FF",
            "#A78BFA",
            "#8AB8FF",
            "#C4B5FD"

        ];


        petal.style.background =
        colors[Math.floor(Math.random()*colors.length)];

    }



    petal.style.left =
    Math.random()*100+"vw";



    const size =
    8 + Math.random()*18;


    petal.style.width =
    size+"px";


    petal.style.height =
    size*1.5+"px";



    const duration =
    6 + Math.random()*5;


    petal.style.animationDuration =
    duration+"s";



    const rotation =
    Math.random()*360;


    petal.style.transform =
    `rotate(${rotation}deg)`;



    petals.appendChild(petal);



    setTimeout(()=>{

        petal.remove();

    },duration*1000);

}



setInterval(createPetal,1200);

// =====================
// MÚSICA
// =====================

const musicButton = document.getElementById("musicButton");
const music = document.getElementById("music");

let playing = false;


musicButton.addEventListener("click", () => {


    if(!playing){

music.play();

musicButton.innerHTML =
"🎶 Tocando...";

musicButton.classList.add("playing");

playing = true;


    }else{

music.pause();

musicButton.innerHTML =
"🎵 Ouvir enquanto lê";

musicButton.classList.remove("playing");

playing = false;

    }


});