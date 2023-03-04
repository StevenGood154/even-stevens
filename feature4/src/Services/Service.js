import Parse from "parse";

Parse.initialize(
  "G6A0qMSOi69IQGCaHJ8sMGZ7RLLkNOvVv0IO6tCk",
  "Ss5IJLlW83WuKAWs2qgUuMsnmosbWSE5KciriM8p",
  "ccXCNo52U8jehztDKhQR8VnG2Fk7XFn3UNf0A0c4"
);
Parse.serverURL = "https://parseapi.back4app.com/";

export const getAllUsers = () => {
  const Question = Parse.Object.extend("Question");
  const query = new Parse.Query(Question);
  return query.find().then((questions) => {
    console.log(questions);
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
