
const correctAnswers = ["a", "c", "b", "b", "b"];

const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let score = 0;
  const totalQuestions = correctAnswers.length;
  const scorePerQuestion = 100 / totalQuestions;

  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
  ];

  correctAnswers.forEach(function (answer, index) {
    userAnswers.push(`form.q${index + 1}.value`);
    // console.log((`form.q${index + 1}.value`));
  });

  for (let i = 0; i < correctAnswers.length; i++) {
    const answer = correctAnswers[i];
    const userAnswer = userAnswers[i];
    if (answer === userAnswer) {
      score += scorePerQuestion;
    }
  }
  console.log(score);

  result.classList.remove("d-none");
  result.querySelector("span").textContent = `${score}%`;

    // console.log(userAnswers)
});