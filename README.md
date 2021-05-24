# Would You Rather Project

React-Redux app created by create-react-app that allow the user to login and logout, go through users' polls, answer them, create new polls and check the leaderboard.

## Application Setup

Requires only npm install and npm start to get it installed and launched.

## Login Flow

The user logs in as an existing user.
The application works correctly regardless of which user is selected.
The application allows the user to log out and log back in. The user should be logged in to submit new polling questions, vote, and view the leaderboard.
Once the user logs in, the home page is shown.
Whenever the user is not logged in and types something in the address bar, the user is asked to log in before the requested page is shown.

## Application Functionality

### Home page

The answered and unanswered polls are both available at the root.
The user can alternate between viewing answered and unanswered polls.
The unanswered questions are shown by default.
The name and the avatar of the logged in user are visible on the page.
The user can navigate to the leaderboard.
The user can navigate to the form that allows the user to create a new poll.
A polling question links to details of that poll.
Each polling question resides in the correct category.
The polls in both categories are arranged from the most recently created (top) to the least recently created (bottom).

### Question page

The details of the poll are available at questions/:question_id
When a poll is clicked on the home page, the following is shown:

- the text “Would You Rather”;
- the picture of the user who posted the polling question; and
- the two options.
  For answered polls, each of the two options contains the following:
- the text of the option;
- the number of people who voted for that option;
- the percentage of people who voted for that option.

The option selected by the logged in user should be clearly marked.
When the user is logged in, the details of the poll are shown. If the user is logged out, he/she is asked to log in before before being able to access the poll.
The application asks the user to sign in and shows a 404 page if that poll does not exist. (In other words, if a user creates a poll and then the same or another user tries to access that poll by its url, the user should be asked to sign in and then be shown a 404 page. Please keep in mind that new polls will not be accessible at their url because of the way the backend is set up in this application.)

Upon voting in a poll, all of the information of the answered poll is displayed.
The user’s response is recorded and is clearly visible on the poll details page.
When the user comes back to the home page, the polling question appears in the “Answered” column.
The voting mechanism works correctly, and the data on the leaderboard changes appropriately.

### New question page

The form is available at /add
The application shows the text “Would You Rather” and has a form for creating two options.
Upon submitting the form, a new poll is created and the user is taken to the home page.
The new polling question appears in the correct category on the home page.

### Leaderboard page

The Leaderboard is available at /leaderboard
Each entry on the leaderboard contains the following:
the user’s name;
the user’s picture;
the number of questions the user asked; and
the number of questions the user answered; and
the rank

Users are ordered in descending order based on the sum of the number of questions they’ve answered and the number of questions they’ve asked.

### Navigation bar

The app contains a responsive navigation bar that is visible on all of the pages except the login page.

The user can navigate between the page for creating new polls, and the leaderboard page, and the home page without typing the address into the address bar.

### Backend interaction

The data that’s initially displayed is populated correctly from the backend.

Each user’s answer and each new poll is correctly recorded on the backend.

## Architecture

The store is the application’s source of truth.
Components read the necessary state from the store; they do not have their own versions of the same state.
There are no direct API calls in the components' lifecycle methods.

Most application state is managed by the Redux store. State-based props are mapped from the store rather than stored as component state.
Form inputs and controlled components may have some state handled by the component.

Updates are triggered by dispatching action creators to reducers.
Reducers and actions are written properly and correctly return updated state to the store.

The code is structured and organized in a logical way.
Components are modular and reusable.
