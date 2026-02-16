//random 컴번호
//유저 번호입력, go버튼 클릭
//컴번호 = 유저번호 "정답"
//컴번호 > 유저번호, "올려"
//컴번호 < 유저번호, "내려"
//리셋버튼
//5번기회, 다쓰면 버튼 disable
//입력범위 1~100, 기회유지
//입력숫자 중복 알림, 기회유지

let computerNum = 0;
let playButton = document.getElementById("playbutton");
let userInput = document.getElementById("userinput");
let resultArea = document.getElementById("resultarea");
let resetButton = document.getElementById("resetbutton");
let chances = 3;
let gameOver = false;
let chanceArea = document.getElementById("chancearea");
let history = [];

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function(){userInput.value=""})

function pickRandomNum() {
    computerNum = Math.floor(Math.random()*100) +1;
    console.log("answer", computerNum);
}

function play() {
    let userValue = userInput.value;

    // 유효성검사
    if (userValue < 1 || userValue > 100) {
        resultArea.textContent = "put num 1~100 one~";
        return;
    }

    if (history.includes(userValue)){
        resultArea.textContent = "aleady put this num, try another~plz";
        return;
    }

    chances -- ;
    // if (chances=0){
        // reset();
    // }
    chanceArea.textContent = `remaining chances : ${chances}times`;
    // console.log("chance", chances);

    if (userValue < computerNum) {
        resultArea.textContent = "up plz~";
    } else if(userValue > computerNum){
        resultArea.textContent = "down plz~";
    } else {
        resultArea.textContent = "BINGO Congrat!!";
        // console.log("usaaa");
        // reset();
    }

    history.push(userValue);
    console.log(history);

    if (chances<1) {
        gameOver = true;
    }
    if (gameOver == true) {
        playButton.disabled = true;
    }
}

function reset() {
    // let array0 = [];
    history=[];
    chances = 3;
    gameOver = false;
    userInput.value = "";
    pickRandomNum();
    resultArea.textContent="result here!!";
    playButton.disabled = false;
    chanceArea.textContent = `remaining chances : ${chances}times`;
    

}

pickRandomNum();
