# React Treasure Hunt Game

### Remember:
- Pseudocode!!
- Ask clarifying questions

### User Stories
- As a user, I can see a page with a 3 by 3 grid board game with a question mark in each square.
#### Steps
- $ mkdir portfolio-stuff
- $ cd portfolio-stuff
- $ git clone https://github.com/learn-academy-2022-bravo/treasure-hunt-SunkissedQueen.git
- $ cd treasure-hunt-SunkissedQueen
- $ git checkout -b board-game
- $ code .
- $ yarn
- $ yarn start
- import Square.js on App.js
- Place div around the props, Assign class/id attributes to html on Square.js
- Go to App.css and add styling for grid
https://www.w3schools.com/css/css_border.asp
- map over the array in state to match the component call to every index in the array
- to get `?` to show, use value as a prop, pass through component call
- using one component and props, get grid with ?
- organize the container around each grid. place div around the map
- $ git status
- $ git add .
- $ git commit -m "3 by 3 grid board game with a question marks"
- $ git push origin board-game
- $ git checkout main
- $ git pull origin main
- $ git branch -d board-game


- As a user, when I click on one of the question marks an alert appears with the index position of that question mark in the array.
- branch name: position
- create a method to return alert
- pass method call as a prop through component call
- give the key a unique identifier for the React child component warning
- pass index as a prop on component call
- create onclick attribute on opening tag in Square.js that will trigger method with anonymous function to prevent an immeidately invoke function
- alternate method call on child component would be to create a method that will hold the props `handleClick = () => {this.props.showIndex(this.props.index)}` and then including attribute as `onClick={this.handleClick}`

- As a user, when I click on one of the question marks instead of the alert the question mark turns into a tree emoji.
- As a user, if I select the winning square the question mark will become a treasure emoji.
- As a user, if I select the losing square the question mark will become a bomb emoji.
- As a user, I can see a counter that shows how many guesses I have left. The counter starts at 5 and decrements one every time I click on a square that is not the treasure nor the bomb.
- As a user, I can see a message informing me that I won the game if I select the square that contains the treasure.
- As a user, I can see a message informing me that I lost the game if I select the square that contains the bomb.
- As a user, I cannot continue to play the game after I win or lose.
- As a user, I can see a message informing me that I lost the game when I run out of turns (the counter reaches zero).
- As a user, I can click on a “Play Again” button that will restart the game.
