import Parse from "parse";

Parse.initialize(
    "G6A0qMSOi69IQGCaHJ8sMGZ7RLLkNOvVv0IO6tCk",
    "Ss5IJLlW83WuKAWs2qgUuMsnmosbWSE5KciriM8p"
);
Parse.serverURL = "https://parseapi.back4app.com/";

export const getStatsForCurrentUser = () => {
    const currentUser = Parse.User.current();
    return {
        'name': currentUser.get('firstName') + ' ' + currentUser.get('lastName'),
        'totalAnswered': currentUser.get('totalAnswered'),
        'totalCorrect': currentUser.get('totalCorrect'),
        'categoryCorrect': currentUser.get('categoryCorrect'),
        'categoryAnswered': currentUser.get('categoryAnswered'),
        'highScore': currentUser.get('highScore')
    };
}

export const updateStats = (correct, category) => {
    const currentUser = Parse.User.current();
    const correctStats = currentUser.get("categoryCorrect");
    const totalStats = currentUser.get("categoryAnswered");
    currentUser.set('totalAnswered', currentUser.get('totalAnswered') + 1);
    totalStats[category] += 1;
    if (correct) {
        currentUser.set('totalCorrect', currentUser.get('totalCorrect') + 1);
        correctStats[category] += 1;
    }
    currentUser.set('categoryCorrect', correctStats);
    currentUser.set('categoryAnswered', totalStats);
    currentUser.save();
}

export const logoutUser = () => {
    Parse.User.logOut().then(() => {
        console.log('User logged out');
    }).catch((error) => {
        console.error('Error logging out user', error);
    });
}

export const updateHighScore = (score) => {
    const currentUser = Parse.User.current();
    const highScore = currentUser.get("highScore");
    if (score > highScore) {
        currentUser.set('highScore', score);
        currentUser.save();
    }
}