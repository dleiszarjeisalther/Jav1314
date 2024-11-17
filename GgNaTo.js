javascript: (function() {
	let actionPerformed = false;
	var pogiako=document.getElementById('single_button673963e2177346');if (pogiako){pogiako.click();actionPerformed=true}
	var button = document.querySelector('button.btn.btn-primary[id*="single_button673"]');
  if (button) {
    button.click();
  }
	var inputButton = document.getElementById('id_submitbutton');
    if (inputButton && inputButton.value === 'Start attempt') {
        inputButton.click();
        actionPerformed = true
    }
	const lagarizz = document.querySelector('.btn.btn-primary[data-action="save"]');
	if (lagarizz) {
		lagarizz.click();
		actionPerformed = true
	} else {
		alert("Button not found.")
	}
	const questionsAndAnswers = [      { question: "Which model describes a network architecture where clients request services from centralized servers?", answer: "Client-Server" },
];
	questionsAndAnswers.forEach(qa => {
		const questionElem = Array.from(document.querySelectorAll(".qtext")).find(el => el.textContent.includes(qa.question));
		if (questionElem) {
			const answerElem = Array.from(questionElem.parentNode.querySelectorAll("input[type=radio]")).find(input => input.nextElementSibling.textContent.includes(qa.answer));
			if (answerElem) {
				answerElem.click();
				actionPerformed = true
			}
		}
	});
	const nextNav = document.getElementById('mod_quiz-next-nav');
	if (nextNav) {
		nextNav.click();
		actionPerformed = true
	}
	if (!actionPerformed) {
		var element = document.getElementById('next-activity-link');
		if (element) {
			element.click()
		} else {
			alert("Element not found!")
		}
	}
})();
