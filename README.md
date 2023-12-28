# Red Cube : The Simple Browser Game
#### Video Demo:  <URL HERE>
#### Description:
Red cube is a Browser Game created using HTML, JavaScript and a little bit of CSS.\
It was originaly supposed to be a remake of Problem Set 0 but made in JavaScript instead of Scratch. 
Made to show how much i learned throughout the entire course. 
This project is made out of 3 files:  
    \- **index.html** - containing the basic page layout and elements like **\<canvas\>** and **\<button\>**.\
    \- **script.js** - contains all the **JavaScript** code necesary for the game to run.\
    \- **style.css** - style sheet - mostly used to center elements on the page and add a border around the game window.
#### What the game is about:
In this game you controll a **Red Cube** and your goal is to collect yellow **Coins**.\
**The Cube** is realy slow and, you can only move in the four cardinal directions. The game contains a time limit, but its not challenging.\
You start off by having 30 seconds to reach the **Coin**. Every coin collected makes both the **Cube** and the **Coin** bigger. Collecting a **Coin** resets the timer. But every 5th **Coin** collected shortens the timer by 1 second.\
If you run out of time the game ends and your score is displayed on screen <sub>(your score being the number of coins you collected)</sub>. If necesary your high score may be updated.\
#### Design Decisions:
The object controlled by the player was always meant to be a **Red Cube** but the **Coin** went through a few different designs.\
Originaly the **Coin** was meant to be circular but I decided agains it to keep it consistant with the player being a cube.\
At some point both the **Cube** and the **Coin** were meant to be replaced by sprites.\
I wasnt able to get that to work correctly with **\<canvas\>** so i decided agains it.