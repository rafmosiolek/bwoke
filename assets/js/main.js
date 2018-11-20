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
const logoLink = document.querySelector('.bwoke-logo');
const halfCircleVector = document.querySelector('.vector-half-circle svg');

halfCircleVector.style.transform = 'rotate(180deg)'

function rotateHalfCircle() {
    setTimeout(() => {
        if (halfCircleVector.style.transform === 'rotate(180deg)') {
            halfCircleVector.style.transform = 'rotate(90deg)'
        } else {
            halfCircleVector.style.transform = 'rotate(180deg)'
        }
        rotateHalfCircle();
    }, 1000);
}

rotateHalfCircle();

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
    $('html,body').animate({scrollTop: document.body.scrollHeight - 100}, "slow");
}

function smoothScrollToTheTopOfThePageWithjQuery() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
}
    
// function smoothScrollToTheNextSection() {
//     var cls = $(this).closest(".content-section").next().offset().top;
//     $("html, body").animate({scrollTop: cls}, "slow");
// }

function selectImagePart(element) {
    var partName = element.getAttribute('selection-area');
    document.getElementById(partName).style.display = "inline";
    // document.getElementById('hidden-info-' + partName).style.display = "block";
  }

  function unselectImagePart(element) {
    var partName = element.getAttribute('selection-area');
    document.getElementById(partName).style.display = "none";
    // document.getElementById('hidden-info-' + partName).style.display = "none";
  }

  var buttons = document.getElementsByClassName("btn-default");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mouseover", function() {
      selectImagePart(this);
    }, false);
    buttons[i].addEventListener("mouseout", function() {
      unselectImagePart(this);
    }, false);
  }

  logoLink.addEventListener('click', () => {
      smoothScrollToTheTopOfThePageWithjQuery();
  })