<h1 align="center">Memory Game</h1>

[View the live project here.](https://j-cw.github.io/memory-game/)

This game is a memory-matching game. Its a very common concept which maintains its simplicity throughout. The idea of the game is to click and unhide a certain card revealing its contents, with hopes of the next card clicked being the match; ultimately leading to those two cards turning over permanently and eliminating them from the choice.  

<h2 align="center"><img src="/imgs/responsive.png"></h2>

## User Experience (UX)

-   ### User stories

  - As a new user, I want to be able to be instructed on how to play this memory game. 

  - As a new user, I want to be able to play a fun and simple memory trainer. 

  - As a new user, I want to be able to enjoy playing the game without distractions like advertisements. 

  - As a returning user, I want to be able to play this game more than once per day. 

-   ### Design
    -  I used a mixture of red, black and white which corresponded to the well known colours of a deck of cards. I thought it would be a nice match and aesthetically pleasing to the eye keeping users comfortable whilst playing. 
    -  The background image is ofcourse a collection of playing cards to coincide and compliment the nature of the card game.

*   ### Wireframes

    -   Home Page Wireframe - [View](//imgs/wireframe.png)

## Features

## The how to play button 

    - The how to play button is initially hidden to ensure the user grasps a full 'pure' view of the site and its contents, only implemented if they would like to read the instructions, some users may not. 

 ## The deck of cards 

    - The main page has a nice 16 card deck infront of the user as soon as they visit the site, ensuring that the game is not too easy to complete as there are many options to choose from. 

 ### The card flip 

    - The cards have a nice animation and colour swap whilst clicked on, providing the user with a successful-looking green once two matches are found. 

 ### The game complete modal 

    - Once the user finally gets all the matches and completes the game they are then introduced to the game-complete modal with a congratulations message, alongside their results and a friendly crown image to coincide with their congratulations. 

 ## The timer + Moves 

    - Throughout a concurrent game, the timer is continuously increasing along with the amount of moves the user implements. The amount of moves is also tied to an if statement where as if the user exceeds a certain number of moves, their 'star-rating' will decrease. 
 

 ## Future Features 

 - In the future, I would definitely like to implement another 'theme' game to change to once the user gets bored of the current card theme. 

 - I would also like to implement an option to increase difficulty to the game, perhaps either by the speed of which the cards are shown, the timer being a limiting factor before a loss, or even an increase in amount of matches needed. 

## Technologies Used

### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [JavaScript](https://www.javascript.com/)

### Frameworks, Libraries & Programs Used

1. [Bootstrap 4.4.1:](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
    - Bootstrap was used to assist with the responsiveness and styling of the website.
1. [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used to import the 'Roboto' & 'Exo' fonts into the style.css file which are used on all pages throughout the project.
1. [Font Awesome:](https://fontawesome.com/)
    - Font Awesome was used on all pages throughout the website to add icons for aesthetic and UX purposes.
1. [jQuery:](https://jquery.com/)
    - jQuery came with Bootstrap to make the navbar responsive but was also used for the smooth scroll function in JavaScript.
1. [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
1. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.
1. [Whimsical:](https://whimsical.com/)
    - Whimsical was used to create the wireframes during the design process.
1. [Google Dev:](https://developers.google.com/web/tools)
    - Google Dev Tools were used to improve the design of the site and as a means to experiment with implementing/altering elements/styling as well as providing a quick method to review the site on different device sizes and fit accordingly.

## Testing

### Manual Testing

   - Due to its simplicity and lack of input of anything other than clicks, not alot of possible bugs became apparent. The only implementation may be to listen for right clicks, or to stop the game at a certain time as the timer may go on for too long.

The W3C Markup Validator, W3C CSS Validator and JSHint Services were used to validate every page of the project to ensure there were no syntax errors in the project.

-   [W3C Markup Validator](https://validator.w3.org/nu/) - [Results](assets/images/w3c-html-validator.png)
-   [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results](/assets/images/w3c-validator.png)
-   [Google Lighthouse](https://developers.google.com/web/tools/lighthouse) - [Results](assets/images/lighthouse-results.png)
-   [JSHint Tool](https://jshint.com/)

### Testing User Stories from User Experience (UX) Section

-   #### First Time Visitor Goals

    1. As a First Time Visitor, I want to easily understand the main purpose of the site and learn more about the game that is available.

        1. Upon entering the site, users are greeted with a large deck of boxes to uncover, if they are unsure as to where to go from there the 'how to play' button is available.
        2. The rules are explained swiftly and the game can become underway with ease.

-   #### Returning Visitor Goals

    1. As a Returning Visitor, I want to be able to repeatedly play the game with no issues and continue my attempt in bettering my score.

        1. A user can reset the game however many times they wish, and due to its random nature will encounter some resistance in trying to get a consistent score making them want to continue to try get better and better.

-   #### Frequent User Goals

    1. As a Frequent User, I want to check to see if there has been a game update, maybe new cards added or some sort of difficulty function to make me play more.

### Further Testing

-   The Website was tested on Google Chrome, Internet Explorer, Microsoft Edge and Safari browsers.
-   The website was viewed on a variety of devices such as Desktop, Laptop, iPhone7, iPhone 8 & iPhoneX.
-   A large amount of testing was done to ensure that all pages were linking correctly.
-   Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.

### Things I'd like to add / didn't have time for

- As previously mentioned, a timer limit would be suitable. New difficulty levels which would alter the speed of the reveal to the user, new themed cards or maybe perhaps a pattern mode which instead required the user to click on the cards in a certain manner/sequence

## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/J-cw/memory-game)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
    - Alternatively Click [Here](https://raw.githubusercontent.com/) for a GIF demonstrating the process starting from Step 2.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://j-cw.github.io/memory-game/) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/J-cw/memory-game)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/J-cw/memory-game)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

## Credits

### Code

-   [MDN Web Docs](https://developer.mozilla.org/): Used this alot for reference to certain syntax

-   [Bootstrap4](https://getbootstrap.com/docs/4.4/getting-started/introduction/): Bootstrap Library used throughout the project mainly to make site responsive using the Bootstrap Grid System.

-   [CodeInstitute](https://learn.codeinstitute.net/): Referenced the lessons.


### Content

-   All content was written by the developer.


### Media
-   Images for card decks found [here](https://pixabay.com/images/search/card%20deck/)
-   Also the [Background](https://wallpaperaccess.com/playing-cards)
-   The modal crown [image](https://www.pngfind.com/download/oxJxJi_free-png-images-crown-clipart-transparent-png/)

### Acknowledgements
    -  Code institute tutorials.
    -  My fellow students on slack.