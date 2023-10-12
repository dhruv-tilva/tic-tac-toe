import './prototype.js'
let mainBox = document.getElementsByClassName("box");
let xField = document.getElementById("xField");
let oField = document.getElementById("oField");
let startBtn = document.getElementById("startBtn");
let isPlayer = false
let turn = ""
let isgameover = false;
let isDraw = false
let displayPlayer = "";



let player = [
    {
        key: "X",
        name: ""
    },
    {
        key: "0",
        name: ""
    }
]

function showplayer() {
    displayPlayer = player.filter(e => e.key === turn)[0].name;
}
startBtn.addEventListener("click", () => {
    if (xField.value && oField.value) {
        player[0].name = xField.value;
        player[1].name = oField.value;
        turn = "X"
        isPlayer = true;
        showplayer();
        document.querySelector('.info').innerText = "Turn for " + displayPlayer
    }
})


const changeTurn = () => {
    if (turn === "X") {
        turn = "0"
    } else {
        turn = "X"
    }
}


const checkWin = () => {
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if ((mainBox[e[0]].innerHTML === mainBox[e[1]].innerHTML) && (mainBox[e[2]].innerHTML === mainBox[e[1]].innerHTML) && (mainBox[e[0]].innerHTML !== "")) {
            let ticTac = mainBox[e[1]].innerHTML
            let winner = player.filter(e => e.key === ticTac)[0].name
            // console.log(winner);
            mainBox[e[0]].classList.add("winnerColor");
            mainBox[e[1]].classList.add("winnerColor");
            mainBox[e[2]].classList.add("winnerColor");

            document.querySelector('.info').innerHTML = winner + " Won"
            isgameover = true;
            turn = ""
        }
    })
}

function checkDraw() {
    if (mainBox[0].innerText !== "" && mainBox[1].innerText !== "" && mainBox[2].innerText !== "" && mainBox[3].innerText !== "" && mainBox[4].innerText !== "" && mainBox[5].innerText !== "" && mainBox[6].innerText !== "" && mainBox[7].innerText !== "" && mainBox[8].innerText !== "" && !isgameover) {
        console.log("Draw");
        isDraw = true
        document.querySelector('.info').innerText = "Match is Draw!!"
    }
}



mainBox.evt("click", function () {
    if (this.innerText === '') {
        this.innerText = turn;
        if (isPlayer) {
            changeTurn();
            showplayer();
            checkWin();
            checkDraw();
            if (!isgameover && !isDraw) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + displayPlayer;
            }
        }
    }
})

reset.addEventListener('click', () => {
    Array.from(mainBox).forEach(element => {
        element.innerText = ""
        element.classList.remove("winnerColor");
    });
    turn = "";
    isgameover = false
    isPlayer = false
    xField.value = ""
    oField.value = ""
    displayPlayer = ""
    document.getElementsByClassName("info")[0].innerText = displayPlayer;
})