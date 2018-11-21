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
                this.classList.toggle('active');
                if (this.classList.contains('correct')) {
                    activeItems.push(this);
                }
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
        smoothScrollToTheBottomOfThePageWithjQuery();
        revealThePreEditImage();
        hideMultiChoiceButtons();
    }
}

function revealThePreEditImage() {
    const preImage = document.querySelector('.pre-edit-image');
    preImage.style.display = 'block';
}

function hideMultiChoiceButtons() {
    const multiChoiceBtnsWrapper = document.querySelector('.btn-multichoice-inner-wrapper');
    multiChoiceBtnsWrapper.style.display = 'none';
}

function smoothScrollToTheBottomOfThePageWithjQuery() {
    $('html,body').animate({scrollTop: document.body.scrollHeight - 100}, "slow");
}

function smoothScrollToTheTopOfThePageWithjQuery() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
}

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


const multichoiceAnswers = document.querySelectorAll('.multichoice-answer');

function revealTheBeforeAfterImages() {
    const beforeAfterImgsWrapper = document.querySelector('.group-images');
    beforeAfterImgsWrapper.style.display = 'block';
}

const option1 = document.getElementById('option-1');
const option2 = document.getElementById('option-2');
const option3 = document.getElementById('option-3');
const option4 = document.getElementById('option-4');
const option5 = document.getElementById('option-5');
const option6 = document.getElementById('option-6');

const option1answer = document.getElementById('option-1-answer');
const option2answer = document.getElementById('option-2-answer');
const option3answer = document.getElementById('option-3-answer');
const option4answer = document.getElementById('option-4-answer');
const option5answer = document.getElementById('option-5-answer');
const option6answer = document.getElementById('option-6-answer');

option1.addEventListener('click', () => {
    option1answer.style.display = 'block';
})

option2.addEventListener('click', () => {
    option2answer.style.display = 'block';
})

option3.addEventListener('click', () => {
    option3answer.style.display = 'block';
})

option4.addEventListener('click', () => {
    option4answer.style.display = 'block';
})

option5.addEventListener('click', () => {
    option5answer.style.display = 'block';
})

option6.addEventListener('click', () => {
    option6answer.style.display = 'block';
})