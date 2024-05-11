let userscore = 0;
let compscore = 0;
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#message");
const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
};
const showwinner = (userwin) => {
    if (userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = "You Win!";

        msg.style.backgroundColor = "green";
    }
    else {
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = "You Lose!";

        msg.style.backgroundColor = "red";

    }

};
const drawgame = () => {
    msg.innerText = "Game was Draw!";
    msg.style.backgroundColor = "#081b31";


}
const playgame = (userchoice) => {

    const compchoice = gencompchoice();

    if (userchoice === compchoice) {
        drawgame();
    }
    else {
        letuserwin = true;
        if (userchoice === "rock") {
            if (compchoice === "paper") {
                userwin = false;
            }
            else {
                userwin = true;
            }
        } else if (userchoice === "paper") {
            if (compchoice === "rock") {
                userwin = true;
            }
            else {
                userwin = false;
            }

        } else {
            if (compchoice === "rock") {
                userwin = false;
            }
            else {
                userwin = true;
            }

        }
        showwinner(userwin);
    }
};
choices.forEach((choice) => {

    choice.addEventListener("click", () => {

        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });

});

