import Parse from "parse";

Parse.initialize(
  "G6A0qMSOi69IQGCaHJ8sMGZ7RLLkNOvVv0IO6tCk",
  "Ss5IJLlW83WuKAWs2qgUuMsnmosbWSE5KciriM8p"
);
Parse.serverURL = "https://parseapi.back4app.com/";

// Loads all Question objects from the database
export const getQuestions = () => {
  const Question = Parse.Object.extend("Question");
  const query = new Parse.Query(Question);
  return query.find().then((questions) => {
    return questions;
  });
};

// To do: load a question that belongs to a specific category