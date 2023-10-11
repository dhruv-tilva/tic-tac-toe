
let turn = "X"
let isgameover = false;

const changeTurn = () => {
    if (turn === "X") {
        turn = "0"
    } else {
        turn = "X"
    }
}
let innerBoxes = Array.from(document.getElementsByClassName("boxtext"))

const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
        } else if (innerBoxes[0] !== "" && innerBoxes[1] !== "" && innerBoxes[2] !== "" && innerBoxes[3] !== "" && innerBoxes[4] !== "" && innerBoxes[5] !== "" && innerBoxes[6] !== "" && innerBoxes[7] !== "" && innerBoxes[8] !== "") {
            // alert("Draw")
            console.log("Draw");
        }
    })
}


let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            changeTurn();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})



// Array.from(innerBoxes).forEach(element => {
//     if (element.innerHTML !== "") {
//         alert("Draw")
//     }
// })



reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    isgameover = false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    // document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})