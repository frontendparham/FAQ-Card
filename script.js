'use strict';

const questionDiv = document.querySelectorAll('.faq__content__text--question');
const answerDiv = document.querySelectorAll('.faq__content__text--answer');
const arrowImg = document.querySelectorAll('.arrow');

const makeDefault = function (x) {
  answerDiv[x].classList.add('hidden');
  questionDiv[x].style.color = 'hsl(237, 12%, 33%, 0.8)';
  arrowImg[x].classList.remove('rotate');
};

for (let i = 0; i < questionDiv.length; i++) {
  questionDiv[i].addEventListener('click', function () {
    for (let j = i + 1; j < questionDiv.length; j++) {
      if (!answerDiv[j].classList.contains('hidden')) {
        makeDefault(j);
      }
    }
    for (let k = i; k >= 0; k--) {
      if (!answerDiv[k].classList.contains('hidden')) {
        makeDefault(k);
      }
    }
    questionDiv[i].style.color = 'hsl(238, 29%, 16%)';
    answerDiv[i].classList.remove('hidden');
    arrowImg[i].classList.add('rotate');
  });
}
