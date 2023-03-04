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

// currently unused
export const getAllCategories = () => {
  const Category = Parse.Object.extend("Category");
  const query = new Parse.Query(Category);
  return query.find().then((categories) => {
    return categories;
  });
};

export const getAllAccounts = () => {
  const Account = Parse.Object.extend("Account");
  const query = new Parse.Query(Account);
  return query.find().then((users) => {
    return users;
  });
};
