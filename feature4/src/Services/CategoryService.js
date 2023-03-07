import Parse from "parse";

Parse.initialize(
  "G6A0qMSOi69IQGCaHJ8sMGZ7RLLkNOvVv0IO6tCk",
  "Ss5IJLlW83WuKAWs2qgUuMsnmosbWSE5KciriM8p"
);
Parse.serverURL = "https://parseapi.back4app.com/";

// Currently Unused
export const getAllCategories = () => {
  const Category = Parse.Object.extend("Category");
  const query = new Parse.Query(Category);
  return query.find().then((categories) => {
    return categories;
  });
};