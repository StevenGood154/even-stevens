const axios = window.axios;

export const getQuestions = () => {
  return (
    // For now, this file is an example of what we'll get when we do an API request to the opentdb trivia database
    axios
      .get("./Services/TriviaQuestions.json")
      .then((response) => {
        console.log(response.data);
        return response.data.results;
      })
      .catch((err) => {
        console.log("GET Error: ", err);
      })
  );
};
