# Red Cube : The Simple Browser Game
#### Video Demo:  [Click here](https://youtu.be/zTgSpoYH-IE)
#### Description:
Red cube is a Browser Game created using HTML, JavaScript and a little bit of CSS.\
It was originally supposed to be a remake of Problem Set 0 but made in JavaScript, instead of Scratch. 
Made to show how much i learned throughout the entire course. 
This project is made out of 3 files:  
    \- **index.html** - containing the basic page layout and elements like '**\<canvas\>**'' and '**\<button\>**'.\
    \- **script.js** - contains all the **JavaScript** code necesary for the game to run.\
    \- **style.css** - stylesheet - mostly used to center elements on the page and add a border around the game window.
#### What the game is about:
In this game, you controll a **Red Cube** and your goal is to collect yellow **Coins**.\
**The Cube** moves slowly and is restricted to the four cardinal directions.. The game contains a time limit, but its not challenging.\
You start off by having 30 seconds to reach the **Coin**. Collecting a **Coin** makes both the **Cube** and the **Coin** bigger, and it also resets the timer. Additionally, every 5th **Coin** collected shortens the timer by 1 second.\
If you run out of time the game ends and your score is displayed on screen <sub>(your score being the number of coins you collected)</sub>. If necesary your high score may be updated.\
Collecting the **Coin** will make the player grow slightly, the **Coin** also grows in size, and it is always four times smaller than the **Red Cube**
#### How the game works:
The JavaScript code contains three functions:
\- start() - this function is called when the start button is pressed allowing the game to begin.\
\- frame() - this function is executed every 20 milliseconds and has the following goals:
    a\) Drawing the **Red Cube** and **Coin** on screen in the right position\
    b\) Detecting if **Red Cube** is touching the **Coin** and updating the score,timer and size of the cubes if they are\
    c\) Handling input from the player (W,A,S,D keys)\
    d\) Displaying game over screen and updating High Score if necesary.\
\- randomNumber() - this function generates a random number, its used to make the **Coin** move but for it to never go past the \<canvas\> border.
#### Design Decisions:
Due to the limitations imposed by using '**\<canvas\>**' as the game window, I opted for a minimalistic art style featuring simple shapes.\
The object controlled by the player was always meant to be a **Red Cube** but the **Coin** went through a few different designs.\
Originaly the **Coin** was meant to be circular but I decided agains it to keep it consistant with the player being a cube.\
At some point both the **Cube** and the **Coin** were meant to be replaced by sprites.\
I wasnt able to get that to work correctly with '**\<canvas\>**' so i decided agains it.