//questions

let allQuestions = [
    {   //question#1
        'question': 'In which year Rome was founded?',
        'answer_1': '439 B.C.',
        'answer_2': '5 A.D.',
        'answer_3': '753 B.C.',
        'answer_4': '870 B.C.',
        'right-answer': 3
    },
    {   //question#2
        'question': 'In which nowadays country lied the ancient city of Babylon?',
        'answer_1': 'Iraq',
        'answer_2': 'Israel',
        'answer_3': 'Syria',
        'answer_4': 'Egypt',
        'right-answer': 1
    },
    {   //question#3
        'question': 'What was the Aztec name of nowadays Mexico City?',
        'answer_1': 'Chichén Itzá',
        'answer_2': 'Texcoco',
        'answer_3': 'Tenochtitlan',
        'answer_4': 'Tlacopan',
        'right-answer': 3
    },
    {   //question#4
        'question': 'In which year the United States of America declared their independency from the United Kingdom?',
        'answer_1': '1801 A.D.',
        'answer_2': '1791 A.D.',
        'answer_3': '1778 A.D.',
        'answer_4': '1776 A.D.',
        'right-answer': 4
    },
    {   //question#5
        'question': 'In which year started the 100 year war between France and England?',
        'answer_1': '1298 A.D.',
        'answer_2': '1337 A.D.',
        'answer_3': '1300 A.D.',
        'answer_4': '1097 A.D.',
        'right-answer': 2
    },
    {   //question#6
        'question': 'Until which year the Holy Roman Empire (also know as the Holy Roman Empire of the German Nation) was existent?',
        'answer_1': '1476 A.D.',
        'answer_2': '1799 A.D.',
        'answer_3': '1806 A.D.',
        'answer_4': '1860 A.D.',
        'right-answer': 3
    },
    {   //question#7
        'question': 'Who conquered Constantinople in the year 1453?',
        'answer_1': 'Ottomans',
        'answer_2': 'Mongols',
        'answer_3': 'Saracens',
        'answer_4': 'Hungarians',
        'right-answer': 1
    },
    {   //question#8
        'question': 'Which event is known to have started the 30 Years War?',
        'answer_1': 'Defenestrations of Prague',
        'answer_2': 'The Assassination of the Archduke of Austria',
        'answer_3': 'The Invasion of the Sweds into Northern Germany',
        'answer_4': 'The burning of Magdeburg cathedral',
        'right-answer': 1
    },
    {   //question#9
        'question': 'Who was the last Russian tzar?',
        'answer_1': 'Katharina the Great',
        'answer_2': 'Alexander III',
        'answer_3': 'Nicholas II',
        'answer_4': 'Ivan V',
        'right-answer': 3
    },
    {   //question#10
        'question': 'In which year Alexander the Great was born?',
        'answer_1': '876 B.C.',
        'answer_2': '539 B.C.',
        'answer_3': '136 B.C.',
        'answer_4': '356 B.C.',
        'right-answer': 4
    },
    {   //question#11
        'question': 'Who was responsible for the renounciation of papal authority over the Church of England?',
        'answer_1': 'Queen Victoria',
        'answer_2': 'Richard Lionheart',
        'answer_3': 'Henry VIII',
        'answer_4': 'William Wallace',
        'right-answer': 3
    },
    {   //question#12
        'question': 'In which time frame there were seven successive popes that resided in Avignon (nowadays France) and not Rome?',
        'answer_1': '1309 A.D. to 1376 A.D.',
        'answer_2': '1140 A.D. to 1201 A.D.',
        'answer_3': '1576 A.D. to 1656 A.D.',
        'answer_4': '898 A.D. to 945 A.D.',
        'right-answer': 1
    }
];


let right_answer;
let question_number = 0;
let progress = 0;



function hideElements() {
    document.getElementById('next').classList.add('d-none');
    document.getElementById('wrong-answer').classList.add('d-none');
    document.getElementById('correct-answer').classList.add('d-none');
}

function loadQuestion() {
    document.getElementById('question').innerHTML = allQuestions[question_number - 1]['question'];
    document.getElementById('answer1').innerHTML = allQuestions[question_number - 1]['answer_1'];
    document.getElementById('answer2').innerHTML = allQuestions[question_number - 1]['answer_2'];
    document.getElementById('answer3').innerHTML = allQuestions[question_number - 1]['answer_3'];
    document.getElementById('answer4').innerHTML = allQuestions[question_number - 1]['answer_4'];
    right_answer = allQuestions[question_number - 1]['right-answer'];
}

function nextQuestion() {
    hideElements();

    if (question_number == allQuestions.length) {
        finishQuiz();
    } else {
        progress = Math.round((question_number / allQuestions.length) * 100);
        document.getElementById('progress-bar').innerHTML = progress + '%';
        document.getElementById('progress-bar').style.width = progress + '%';
        question_number = question_number + 1;
        loadQuestion();
    }
}

function finishQuiz() {
    
    if (question_number == allQuestions.length) {
        document.getElementById('quizcontainer').classList.add('d-none');
        document.getElementById('quizdone').classList.remove('d-none');
} else {
    document.getElementById('quizdone').classList.add('d-none');
}}

function answer(a) {

    if (a == right_answer) { //right answer
        document.getElementById('wrong-answer').classList.add('d-none');
        document.getElementById('correct-answer').classList.remove('d-none');
        //show next button 
        document.getElementById('next').classList.remove('d-none');


    } else {

        document.getElementById('correct-answer').classList.add('d-none');
        document.getElementById('next').classList.add('d-none');
        document.getElementById('wrong-answer').classList.remove('d-none');


    }

}