const multichoiceBtns = document.querySelectorAll('.btn-multichoice');
const activeItems = [];

for (let i = 0; i < multichoiceBtns.length; i++) {
    multichoiceBtns[i].addEventListener("click", function(ev) {
        for (let i = 0; i < multichoiceBtns.length; i++) {
            checkIfAnalysisShouldBeRevealed();
            if (this != multichoiceBtns[i]) {
            } else if (this.classList.contains('active')) {
                this.classList.toggle('active');
            } else {
                this.classList.toggle('active')
                activeItems.push(this);
            }
        }
        ev.preventDefault();
    }, false);
};


const startBtn = document.getElementById('start-btn');
const userInteraction = document.getElementById('user-interaction');
const analysis = document.getElementById('analysis');

startBtn.addEventListener('click', () => {
    userInteraction.style.display = 'block';
    smoothScrollToTheBottomOfThePageWithjQuery();
})

function checkIfAnalysisShouldBeRevealed() {
    console.log('checkIfAnalysisShouldBeRevealed called');
    if (activeItems.length > 2) {
        analysis.style.display = 'block';
        smoothScrollToTheBottomOfThePageWithjQuery();
        
    }
}

function smoothScrollToTheBottomOfThePageWithjQuery() {
    $('html,body').animate({scrollTop: document.body.scrollHeight}, "slow");
}
