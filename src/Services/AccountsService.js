import Parse from "parse";

Parse.initialize(
  "G6A0qMSOi69IQGCaHJ8sMGZ7RLLkNOvVv0IO6tCk",
  "Ss5IJLlW83WuKAWs2qgUuMsnmosbWSE5KciriM8p"
);
Parse.serverURL = "https://parseapi.back4app.com/";

// Loads Account objects (stats) for all users
export const getAllAccounts = () => {
  const Account = Parse.Object.extend("Account");
  const query = new Parse.Query(Account);
  return query.find().then((users) => {
    return users;
  });
};