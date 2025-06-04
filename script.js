let study_btn = document.querySelector("#study-btn");
let break_btn = document.querySelector("#break-btn");
let timerElem = document.querySelector("#time-left");
let studyCountElem = document.querySelector("#study-count")
let id = null;
let studyCount = 0




study_btn.addEventListener('click', function () {
    clearInterval(id);
    let totalSeconds = 25 * 60;
    studyCountElem.textContent = ++studyCount;
    id = setInterval(() => {
        console.log('a second passed!');
        totalSeconds--;
        let seconds = totalSeconds % 60;
        let minutes = Math.floor(totalSeconds / 60);
        timerElem.textContent = `${minutes}:${seconds}`;
        totalSeconds--;
    }, 1000);

    studyCount = parseInt(studyCountElem.textContent);
    studyCount += 1;
    studyCountElem.textContent = studyCount;
})

break_btn.addEventListener('click', () => {
    console.log("hey you clicked break button");
})