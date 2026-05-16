function checkAnswer(selectedElement, cardId) {
    const card = document.getElementById(cardId);
    const options = card.querySelectorAll('.opt');
    const solution = card.querySelector('.handwritten-solution');
    
    const correctAnswers = {
        'pre-q1': 'C)',  
        'pre-q2': 'B)',  
        'pre-q3': 'C)',  
        'pre-q4': 'A)',  
        'pre-q5': 'C)',  
        'pre-q6': 'B)',  
        'pre-q7': 'A)',  
        'pre-q8': 'B)',  
        'pre-q9': 'C)',  
        'pre-q10': 'A)', 
        'pre-q11': 'A)', 
        'pre-q12': 'B)',
        'post-q1': 'A)',
        'post-q2': 'B)',
        'post-q3': 'A)',
        'post-q4': 'B)',
        'post-q5': 'A)',
        'post-q6': 'A)',
        'post-q7': 'A)',
        'post-q8': 'A)',
        'post-q9': 'A)',
        'post-q10': 'A)'
    };

    const correctAnswerText = correctAnswers[cardId] || "A)"; 

    options.forEach(opt => {
        opt.classList.remove('correct', 'wrong');
    });

    const selectedText = selectedElement.innerText.trim();

    if (selectedText.startsWith(correctAnswerText)) {
        selectedElement.classList.add('correct');
    } else {
        selectedElement.classList.add('wrong');
        options.forEach(opt => {
            if (opt.innerText.trim().startsWith(correctAnswerText)) {
                opt.classList.add('correct');
            }
        });
    }

    if (solution) {
        solution.classList.remove('hidden');
    }
}
