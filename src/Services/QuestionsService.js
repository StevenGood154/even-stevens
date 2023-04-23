import Parse from "parse";

Parse.initialize(
  "G6A0qMSOi69IQGCaHJ8sMGZ7RLLkNOvVv0IO6tCk",
  "Ss5IJLlW83WuKAWs2qgUuMsnmosbWSE5KciriM8p"
);
Parse.serverURL = "https://parseapi.back4app.com/";

export const getQuestionsByCategory = (categoryName) => {
  const Question = Parse.Object.extend("Question");
  const query = new Parse.Query(Question);
  if (categoryName !== "All") {
    query.equalTo('category', categoryName);
  }
  return query.find().then((questions) => {
    return questions;
  });
}