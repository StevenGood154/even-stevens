# Change Log
All notable changes to this project will be documented in this file.
 
The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).
 
## [0.2.0] - 2023-03-09
 
### Added

- Created some more styling of the questions
- Routing to a stats page, will later have stats for user and category
 
### Changed
  
- Changed code to React instead of Preact
- Created parse objects to load the questions from backend database instead of using axios from a JSON file
 
### Fixed

## [0.3.0] - 2023-04-05

### Added

- Added and styled authentication with an add and register page
- User data now stored in backend for authentication
 
### Changed
  
- Questions now appear one at a time instead of all at once
- Slight delay before next question loads if your answer is incorrect
 
### Fixed

## [1.0.0] - 2023-05-06

### Added

- Select category page so user can choose a category to answer questions from
- Timer component
- Game over screen
- Score to keep track number of questions answered correctly
- Log out button & header to navigate
- Website deployed to Netlify (https://trivia-game-webdev.netlify.app)
 
### Changed
  
- Responsive styling so app appears well on mobile
- Correct answer now appears green if user selects wrong answer
- Stats page now shows actual user’s stats, including high score, accuracy, questions answered, and accuracy and questions answered by category
- Increased delay between questions to 3 seconds if you are incorrect
 
### Fixed

- User is now able to only select one answer choice
