export const sortQuestions = (questions) => {
  let soretdQuestions = {};
  Object.entries(questions)
    .sort(([a], [b]) => questions[b].timestamp - questions[a].timestamp)
    .forEach((arr) => {
      let key = arr[0];
      let value = arr[1];
      soretdQuestions[key] = value;
    });

  return soretdQuestions;
};
