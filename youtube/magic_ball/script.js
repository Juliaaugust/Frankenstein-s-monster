function generateAnswer() {
    const answerId = Math.floor(Math.random() * answersArray.length)

    const answerText = document.getElementById("answer-text")

    if (!answerText.classList.contains("show-answer")) {
        answerText.classList.add("show-answer")
        answerText.innerText = answersArray[answerId]
        return
    }

    answerText.classList.remove("show-answer")
    setTimeout(()=> {
        answerText.classList.add("show-answer")
        answerText.innerText = answersArray[answerId]
    }, 1000)
}

answersArray = [
    "Точно да",
    "Точно нет",
    "На самом деле да",
    "Да, можешь рассчитывать на это",
    "Тебе пока лучше не знать",
    "Скоро будет известно",
    "Скорее всего да",
    "Скорее всего нет",
    "Это вряд ли",
    "Ответ тебя порадует",
    "Да",
    "Пока ответ нет",
    "Считай, что да",
    "Маловероятно",
    "Однозначно да",
    "Нет, не думай об этом",
    "100% да!",
    "Вероятно",
]