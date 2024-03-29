import Parse from "parse";

Parse.initialize(
    "G6A0qMSOi69IQGCaHJ8sMGZ7RLLkNOvVv0IO6tCk",
    "Ss5IJLlW83WuKAWs2qgUuMsnmosbWSE5KciriM8p"
  );
Parse.serverURL = "https://parseapi.back4app.com/";

// used in register component
export const createUser = (newUser) => {
  const user = new Parse.User();

  user.set("username", newUser.email);
  user.set("firstName", newUser.firstName);
  user.set("lastName", newUser.lastName);
  user.set("password", newUser.password);
  user.set("email", newUser.email);
  user.set("totalAnswered", 0);
  user.set("totalCorrect", 0);
  user.set("highScore", 0);
  user.set("categoryAnswered", {
    'General Knowledge': 0,
    'Entertainment': 0,
    'Science': 0,
    'Sports': 0,
    'Geography': 0,
    'History': 0
  });
  user.set("categoryCorrect", {
    'General Knowledge': 0,
    'Entertainment': 0,
    'Science': 0,
    'Sports': 0,
    'Geography': 0,
    'History': 0
  });

  return user
    .signUp()
    .then((newUserSaved) => {
      return newUserSaved;
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
};

// used in login component
export const loginUser = (currUser) => {
  const user = new Parse.User();

  user.set("password", currUser.password);
  user.set("username", currUser.email);

  return user
    .logIn(user.email, user.password)
    .then((currUserSaved) => {
      return currUserSaved;
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
};

// Checks if user is already logged in, used in several components
export const checkUser = () => {
  return Parse.User.current()?.authenticated;
};