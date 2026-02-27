# dice-game
a new dice game developed by me using Javascript
<img width="1595" height="768" alt="Image" src="https://github.com/user-attachments/assets/920434d0-9a7f-4e78-85ad-7f76cb469aa7" />
<a href="https://elyasforghani.github.io/dice-game/">live Demo</a>
# 🎲 Modern Dice Game

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-Markup-orange?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-Styling-blue?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Deployment](https://img.shields.io/badge/Deployed-GitHub_Pages-green?logo=github)](https://elyasforghani.github.io/dice-game/)

A sleek, interactive dice game built with vanilla JavaScript. This project focuses on efficient **state management**, **DOM manipulation**, and providing a seamless user experience through clean UI/UX design.

[**🕹️ Play the Live Demo**](https://elyasforghani.github.io/dice-game/)

---

## 📖 Table of Contents
* [Features](#-features)
* [How to Play](#-how-to-play)
* [Technical Highlights](#-technical-highlights)
* [Installation](#-installation)
* [Author](#-author)

---

## 📸 Preview
<p align="center">
  <img width="90%" alt="Dice Game Preview" src="https://github.com/user-attachments/assets/920434d0-9a7f-4e78-85ad-7f76cb469aa7" />
</p>

---

## ✨ Features
* **Dynamic Turn Switching:** Visual indicators change automatically when a player rolls a 1 or holds.
* **Score Persistence:** "Current" scores are banked into "Total" scores with a single click.
* **Responsive UI:** Optimized for desktop and mobile browsers.
* **Winner State:** Automated game-over logic with visual cues when a player reaches the winning threshold.

---

## 🕹️ How to Play
1. **Roll Dice:** Click to generate a random number (1-6).
2. **Accumulate:** Rolling anything but a **1** adds to your current round's score.
3. **The Risk:** Rolling a **1** resets your current score and ends your turn immediately.
4. **Hold:** Click 'Hold' to add your current points to your permanent total.
5. **Win:** The first player to reach **100 points** wins the game!

---

## ⚙️ Technical Highlights
* **DOM API:** Used extensively to update scores, toggle active classes, and manipulate image sources in real-time.
* **Math Logic:** Implemented `Math.random()` and `Math.trunc()` for fair, randomized dice rolls.
* **Dry Principle:** Refactored functions for player switching and game initialization to keep code clean and maintainable.

---

## 🛠️ Installation
To run this project locally:

1. Clone the repository:
   ```bash
   git clone [https://github.com/elyasforghani/dice-game.git](https://github.com/elyasforghani/dice-game.git)

 ##  ✍️ Author
* **Elyas Forghani** *
Frontend Developer & JavaScript Enthusiast
