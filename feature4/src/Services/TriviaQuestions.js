import Parse from "parse";

Parse.initialize(
  "G6A0qMSOi69IQGCaHJ8sMGZ7RLLkNOvVv0IO6tCk",
  "Ss5IJLlW83WuKAWs2qgUuMsnmosbWSE5KciriM8p"
);
Parse.serverURL = "https://parseapi.back4app.com/";

export const getQuestions = () => {
  const Question = Parse.Object.extend("Question");
  const query = new Parse.Query(Question);
  return query.find().then((questions) => {
    return questions;
  });
};

export const getAllStats = () => {
  const Stats = Parse.Object.extend("Stats");
  const query = new Parse.Query(Stats);
  return query.find().then((stats) => {
    console.log(stats);
    return stats;
  });
};
