const gameArea = document.getElementById("game-area");

// Math Quiz (Enter Key Fix Included)
function startMathGame() {
    gameArea.innerHTML = "";
    
    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);
    let correctAnswer = num1 + num2;
    
    let question = document.createElement("p");
    question.textContent = `${num1} + ${num2} = ?`;
    
    let input = document.createElement("input");
    input.type = "number";
    input.id = "answer";
    
    let button = document.createElement("button");
    button.textContent = "Submit";
    button.onclick = checkMathAnswer;
    
    // Enter Key Support (Math Quiz)
    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            checkMathAnswer();
        }
    });

    function checkMathAnswer() {
        let userAnswer = parseInt(document.getElementById("answer").value);
        gameArea.innerHTML = ""; // Clear previous content
        
        let resultMsg = document.createElement("p");
        let gif = document.createElement("img");
        
        if (userAnswer === correctAnswer) {
            resultMsg.innerHTML = "<span style='color:green;'>✅ Correct!</span>";
            gif.src = "444.gif"; // Success GIF
        } else {
            resultMsg.innerHTML = `<span style='color:red;'>❌ Wrong! Answer: ${correctAnswer}</span>`;
            gif.src = "4444.gif"; // Failure GIF
        }
        
        gif.style.width = "200px"; // Adjust GIF Size
        gameArea.appendChild(resultMsg);
        gameArea.appendChild(gif);
    }
    
    gameArea.appendChild(question);
    gameArea.appendChild(input);
    gameArea.appendChild(button);
    input.focus(); // Auto-focus input field
}

// Memory Test (Enter Key Fix Included)
function startMemoryGame() {
    gameArea.innerHTML = "";

    let randomNum = Math.floor(1000 + Math.random() * 9000); // 4-digit number
    
    let numberDisplay = document.createElement("p");
    numberDisplay.textContent = `Memorize this number: ${randomNum}`;
    
    gameArea.appendChild(numberDisplay);

    setTimeout(() => {
        gameArea.innerHTML = "Enter the number:";
        
        let input = document.createElement("input");
        input.type = "number";
        input.id = "memoryInput";
        
        let button = document.createElement("button");
        button.textContent = "Submit";
        button.onclick = checkMemoryAnswer;
        
        // Enter Key Support (Memory Test)
        input.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                checkMemoryAnswer();
            }
        });

        function checkMemoryAnswer() {
            let userMemory = parseInt(document.getElementById("memoryInput").value);
            gameArea.innerHTML = ""; // Clear previous content
            
            let resultMsg = document.createElement("p");
            let gif = document.createElement("img");
            
            if (userMemory === randomNum) {
                resultMsg.innerHTML = "<span style='color:green;'>✅ Correct!</span>";
                gif.src = "444.gif"; // Success GIF
            } else {
                resultMsg.innerHTML = `<span style='color:red;'>❌ Wrong! The number was ${randomNum}</span>`;
                gif.src = "4444.gif"; // Failure GIF
            }
            
            gif.style.width = "200px";
            gameArea.appendChild(resultMsg);
            gameArea.appendChild(gif);
        }

        gameArea.appendChild(input);
        gameArea.appendChild(button);
        input.focus(); // Auto-focus input field
    }, 3000);
}

// Reaction Time (No Fix Needed)
function startReactionGame() {
    gameArea.innerHTML = "Wait for green...";

    let randomTime = Math.floor(Math.random() * 4000) + 2000;
    setTimeout(() => {
        gameArea.innerHTML = "Click Now!";
        gameArea.style.backgroundColor = "green";
        
        let startTime = Date.now();
        
        gameArea.onclick = () => {
            let reactionTime = Date.now() - startTime;
            gameArea.innerHTML = `Your Reaction Time: ${reactionTime}ms`;
            gameArea.style.backgroundColor = "#222";
        };
    }, randomTime);
}
