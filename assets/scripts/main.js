var multichoiceBtns = document.querySelectorAll('.btn-multichoice');
var activeItems = [];

for (var i = 0; i < multichoiceBtns.length; i++) {
    multichoiceBtns[i].addEventListener("click", function(ev) {
        for (var i = 0; i < multichoiceBtns.length; i++) {
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


var startBtn = document.getElementById('start-btn');
var userInteraction = document.getElementById('user-interaction');
var analysis = document.getElementById('analysis');

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
