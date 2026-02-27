 // Prompt with fallback names
    let p1 = prompt('Enter Player 1 Name') || "Player 1";
    let p2 = prompt('Enter Player 2 Name') || "Player 2";
    
    document.getElementById('player1').innerText = p1;
    document.getElementById('player2').innerText = p2;

    const _pl = document.querySelector('._pl');
    const rollBtn = document.querySelector('.Bt');
    const res = document.querySelector('.res');
    const imageElement = document.getElementById('myImage');
    const cont1 = document.getElementById('cont1');
    const cont2 = document.getElementById('cont2');

    let flag = 1;

    function edits() {
        let x = prompt('New name for Player 1');
        let y = prompt('New name for Player 2');
        if (x && y) {
            document.getElementById('player1').innerText = x;
            document.getElementById('player2').innerText = y;
        }
    }

    rollBtn.addEventListener('click', () => {
        let x = Math.floor(Math.random() * 6) + 1;
        
        // Setup image
        imageElement.style.display = "block";
        res.style.opacity = "0"; // Hide the fallback text number
        
        // Restart Animation
        imageElement.classList.remove('dice-roll-animation');
        void imageElement.offsetWidth; 
        imageElement.classList.add('dice-roll-animation');

        // i wrote this my self /////
        
        // switch (x) {
        //     case 1:
        //         imageElement.src = "img/inverted-dice-1.png";
        //         break;
        //     case 2:
        //         imageElement.src = "img/inverted-dice-5.png";
        //         break;
        //     case 3:
        //         imageElement.src = "img/inverted-dice-3.png";
        //         break;
        //     case 4:
        //         imageElement.src = "img/inverted-dice-4.png";
        //         break;
        //     case 5:
        //         imageElement.src = "img/inverted-dice-5.png";
        //         break;
        //     case 6:
        //         imageElement.src = "img/inverted-dice-6.png";
        //         break;
        //     default:
        //         imageElement.src = "img/inverted-dice-6.png";
        // }
///////////////////



        // Logic for Dice Source  better version
        imageElement.src = `assets/img/inverted-dice-${x}.png`;

        // Turn Logic & Visuals
        if (flag % 2 !== 0) {
            cont1.classList.add('glow');
            cont2.classList.remove('glow');
            _pl.innerHTML = document.getElementById('player1').innerText + "'s Turn!";
            _pl.style.color = "var(--accent-p1)";
        } else {
            cont1.classList.remove('glow');
            cont2.classList.add('glow');
            _pl.innerHTML = document.getElementById('player2').innerText + "'s Turn!";
            _pl.style.color = "#e0aaff"; // Slight purple tint for P2
        }
        
        flag++;
    });