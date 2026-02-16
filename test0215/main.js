//random 컴번호
//유저 번호입력, go버튼 클릭
//컴번호 = 유저번호 "정답"
//컴번호 > 유저번호, "올려"
//컴번호 < 유저번호, "내려"
//리셋버튼
//5번기회, 다쓰면 버튼 disable
//입력범위 1~100, 기회유지
//입력숫자 중복 알림, 기회유지

let computerNum = 0
let playButton = document.getElementById("playbutton") ;
let userInput = document.getElementById("userinput") ;
let resultArea = document.getElementById("resultarea") ;

playButton.addEventListener("click", play);

function pickRandomNum() {
    computerNum = Math.floor(Math.random()*100) +1 ;
    console.log("answer", computerNum);
}

function play() {
    let userValue = userInput.value
    if (userValue < computerNum) {
        resultArea.textContent = "up" ;
    } else if(userValue > computerNum){
        resultArea.textContent = "down" ;
    } else {
        resultArea.textContent = "BINGO"
    }
}
pickRandomNum() ;
