// Function to create keyboard buttons
function createKeyboardButtons(container, buttonValues) {
    const keyboardContainer = document.querySelector(container);

    // Clear existing buttons
    keyboardContainer.innerHTML = '';

    // Create buttons for each value in buttonValues
    buttonValues.forEach(value => {
        const button = document.createElement('button');
        button.textContent = value;
        button.classList.add('keyboard-btn');
        button.addEventListener('click', function() {
            appendToInput(value);
        });
        keyboardContainer.appendChild(button);
    });
}

// Function to toggle keyboard visibility
function toggleKeyboard() {
    const keyboard = document.getElementById('virtual-keyboard');
    keyboard.classList.toggle('show-keyboard');
}

// Generate number keyboard buttons
const numberButtons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
createKeyboardButtons('.number-keyboard', numberButtons);

// Generate symbol keyboard buttons
const symbolButtons = ['+', '-', '*', '/', '(', ')', '%', '^'];
createKeyboardButtons('.symbol-keyboard', symbolButtons);

// Function to append value to input field
function appendToInput(value) {
    const inputField = document.getElementById('user-input');
    inputField.value += value;
}

// Function to clear input field
function clearInput() {
    const inputField = document.getElementById('user-input');
    inputField.value = '';
}

async function calculateExpression() {
    const inputField = document.getElementById("user-input");
    const userInput = inputField.value.trim().toLowerCase();
    if (userInput === '') return;

    if (userInput.startsWith('math')) {
        setTimeout(function() {
            showAvailableOperations();
        }, 1000); // 1000 milliseconds = 1 second
    }
    // Display user's message in the chat interface
    appendMessage("user", userInput);

    // Remove 'calculate' or similar keywords from the beginning of the input
    const expression = userInput.replace(/^calculate\s+/i, '');

    // Regular expression to match addition, subtraction, multiplication, and division
    const regex = /(-?\d+(\.\d+)?)\s*([+\-*\/])\s*(-?\d+(\.\d+)?)/;
    const match = expression.match(regex);

    if (!match) {
        appendMessage("bot", "Please enter a valid arithmetic expression (e.g., calculate 1 + 2).");
        clearInput(); // Clear input field after processing
        return;
    }

    const num1 = parseFloat(match[1]);
    const operator = match[3];
    const num2 = parseFloat(match[4]);

    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            appendMessage("bot", "Unsupported operator.");
            clearInput(); // Clear input field after processing
            return;
    }

    // Random introductory sentence
    const randomSentences = [
        "Here's the answer:",
        "I've calculated it for you:",
        "The result is in:",
        "Let's see what we get:"
    ];
    const introSentence = randomSentences[Math.floor(Math.random() * randomSentences.length)];

    // Display introductory sentence in the chat interface
    appendMessage("bot", introSentence);

    // Display calculation result in a bordered box in the chat interface
    appendMessageInBox("bot", `${num1} ${operator} ${num2} = ${result}`, result);

    clearInput(); // Clear input field after processing
}


// Function to show available operations
function showAvailableOperations() {
    const operations = [
        "Addition: + - - - - - - ",
        "Subtraction: - - - - - - ",
        "Multiplication: * - - - - - - ",
        "Division: / - - - - - - ",
        "Modulus: % - - - - - -  ",
        "Exponentiation: ^ - - - - - - "
    ];

    // Join operations with newline characters
    const operationsMessage = operations.join("\n");
    
    // Append message to the chat interface
    appendMessage("bot", `Available operations:\n${operationsMessage}`);
}




// Function to toggle the virtual keyboard visibility
function toggleKeyboard() {
    const keyboard = document.getElementById('virtual-keyboard');
    keyboard.classList.toggle('show-keyboard');
}

// Function to handle sending the message
function sendMessage() {
    const inputField = document.getElementById("user-input");
    const userInput = inputField.value.trim().toLowerCase();
    if (userInput === "") return;

    // Check if the input starts with 'calculate'
    if (userInput.startsWith('calculate')) {
        calculateExpression();
    } else {
        // Append user message and add to conversation history
        appendMessage("user", userInput);
        conversationHistory.push({ sender: "user", message: userInput });
    
        // Process user input and get bot reply
        const botReply = getBotReply(userInput);
        simulateTyping("QuerioAI", botReply);
        conversationHistory.push({ sender: "QuerioAI", message: botReply });
    }

    // Clear input field after sending message
    clearInput();
}

function simulateTyping(sender, message) {
    const chatContainer = document.getElementById("chat-container");
    const messageElement = document.createElement("div");
    messageElement.classList.add(sender + "-message");

    // Ensure image is displayed correctly in bot's messages
    if (sender === "bot") {
        const imageElement = document.createElement("img");
        imageElement.src = "/aitest/images/image-removebg-preview (1).png";
        imageElement.alt = "Bot Image";
        imageElement.style.width = "40px";
        imageElement.style.marginTop = "10px"; // Adjust margin as needed
        messageElement.appendChild(imageElement); // Append image to message container
    }

    // Check if message contains a mathematical expression
    const regex = /(-?\d+(\.\d+)?)\s*([+\-*\/])\s*(-?\d+(\.\d+)?)(\s*=\s*(-?\d+(\.\d+)?))?/;
    const match = message.match(regex);

    if (match) {
        const equation = match[0]; // The entire matched expression
        const result = match[7];   // The result part of the expression (if present)

        // Create a span for the equation and result separately
        const equationSpan = document.createElement("span");
        equationSpan.textContent = equation;

        // Append the equation span to message element
        messageElement.appendChild(equationSpan);

        // If there is a result, add it with typewriter effect after a delay
        if (result !== undefined) {
            setTimeout(() => {
                const resultSpan = document.createElement("span");
                resultSpan.textContent = ` = ${result}`;
                messageElement.appendChild(resultSpan);

                chatContainer.scrollTop = chatContainer.scrollHeight; // Scroll to bottom
                readOutText(message); // Read out the bot's response after typing effect
            }, equation.length * 25); // Delay based on equation length
        } else {
            readOutText(message); // Read out the bot's response without typing effect
        }
    } else {
        // Typewriter effect: simulate typing animation for regular messages
        let index = 0;
        const typingInterval = setInterval(function() {
            messageElement.textContent += message[index++];
            chatContainer.scrollTop = chatContainer.scrollHeight; // Scroll to bottom
            if (index >= message.length) {
                clearInterval(typingInterval);
                readOutText(message); // Read out the bot's response after typing effect
            }
        }, 25); // Typing speed: 25 milliseconds per character
    }

    // Append the message element to the chat container
    chatContainer.appendChild(messageElement);
}


async function appendMessage(sender, message) {
    const chatContainer = document.getElementById("chat-container");
    const messageElement = document.createElement("div");
    messageElement.classList.add(sender + "-message");

    const messageText = document.createElement("div");
    messageElement.appendChild(messageText);
    chatContainer.appendChild(messageElement);

    // Typewriter effect: loop through each character in the message
    for (let i = 0; i < message.length; i++) {
        messageText.textContent += message[i]; // Append one character

        // Scroll chat container to bottom after each character
        chatContainer.scrollTop = chatContainer.scrollHeight;

        // Wait for 25 milliseconds before appending the next character
        await new Promise(resolve => setTimeout(resolve, 25));
    }

    // Scroll chat container to bottom after the entire message is typed out
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

async function appendMessageInBox(sender, message, Tresult) {
    const chatContainer = document.getElementById("chat-container");
    const messageElement = document.createElement("div");
    messageElement.classList.add(sender + "-message");

    const messageBox = document.createElement("div");
    messageBox.classList.add("message-box"); // Add a class for styling the box
    messageElement.appendChild(messageBox);

    // Create the inner box with the boxed "2"
    const innerBox = document.createElement("div");
    innerBox.classList.add("inner-box");
    innerBox.textContent = Tresult;
    messageBox.appendChild(innerBox);

    const messageText = document.createElement("div");
    messageText.classList.add("message-text"); // Add a class for styling the text
    messageText.textContent = message;
    messageBox.appendChild(messageText);

    chatContainer.appendChild(messageElement);

    // Scroll chat container to bottom after displaying the message
    chatContainer.scrollTop = chatContainer.scrollHeight;
}



// Function to get bot's reply based on user input
function getBotReply(userInput) {
    if (userInput === "earlier responses") {
        return getEarlierResponses();
    } else if (userInput === "list of words") {
        return listAllKeywords();
    }

    // Check for actions
    for (let i = 0; i < responses.responses.length; i++) {
        if (responses.responses[i].action === "interpretHTML") {
            // Handle HTML interpretation
            return interpretHTML(userInput);
        }
    }

    // Check for other keyword-based responses
    for (let i = 0; i < responses.responses.length; i++) {
        const keywords = responses.responses[i].keywords;
        const allKeywordsRequired = responses.responses[i].allKeywordsRequired || false; // Default to false if not specified
        let matchFound = allKeywordsRequired ? true : false;

        for (let j = 0; j < keywords.length; j++) {
            if (userInput.includes(keywords[j])) {
                if (!allKeywordsRequired) {
                    return getRandomResponse(responses.responses[i].responses);
                }
                matchFound = true;
            } else {
                if (allKeywordsRequired) {
                    matchFound = false;
                    break;
                }
            }
        }

        if (matchFound) {
            return getRandomResponse(responses.responses[i].responses);
        }
    }

    return "I'm sorry, I don't understand that.";
}

// Function to get a random response from a list
function getRandomResponse(responses) {
    return responses[Math.floor(Math.random() * responses.length)];
}

// Function to get earlier responses from conversation history
function getEarlierResponses() {
    if (conversationHistory.length === 0) {
        return "There are no earlier responses.";
    }

    const historyMessages = conversationHistory.map(entry => {
        if (entry.sender === "user") {
            return `You: ${entry.message}`;
        } else if (entry.sender === "bot") {
            return `Bot: ${entry.message}`;
        } else {
            return entry.message; // Handle other senders if any
        }
    });

    return "Sure, here are the earlier responses:\n" + historyMessages.join("\n");
}

// Function to list all keywords from responses
function listAllKeywords() {
    const allKeywords = [];
    for (let i = 0; i < responses.responses.length; i++) {
        allKeywords.push("- " + responses.responses[i].keywords.join(", "));
    }
    return "Here are all the keywords:\n" + allKeywords.join("\n");
}

// Function to interpret HTML code
function interpretHTML(htmlCode) {
    const tempContainer = document.createElement("div");
    tempContainer.innerHTML = htmlCode;

    // Extract and explain each element
    let explanation = "Here's the interpretation of the HTML code you provided:\n";
    const elements = tempContainer.childNodes;

    for (let i = 0; i < elements.length; i++) {
        if (elements[i].nodeType === 1) { // Check if it's an element node
            explanation += explainHTMLElement(elements[i]) + "\n";
        }
    }

    return explanation;
}

// Function to explain HTML element
function explainHTMLElement(element) {
    const tagName = element.tagName.toLowerCase();
    const attributes = Array.from(element.attributes)
        .map(attr => `${attr.name}="${attr.value}"`)
        .join(" ");

    return `<${tagName} ${attributes}>`;
}

// Function to read out text (text-to-speech)
function readOutText(text) {
    // Check if the browser supports speech synthesis
    if ('speechSynthesis' in window) {
        // Create a new SpeechSynthesisUtterance object
        const utterance = new SpeechSynthesisUtterance();

        // Set the text to be spoken
        utterance.text = text;

        // Set voice options for high-quality speech (choose a suitable voice)
        const voices = window.speechSynthesis.getVoices();
        utterance.voice = voices.find(voice => voice.name === 'Google US English'); // Example voice selection

        // Set additional properties for more natural speech
        utterance.lang = 'en-US'; // Language
        utterance.pitch = .6; // Pitch (0 to 2)
        utterance.rate = 1; // Rate (0.1 to 10)

        // Speak the text
        window.speechSynthesis.speak(utterance);
    } else {
        alert('Sorry, your browser does not support speech synthesis.');
    }
}

// Function to toggle sidebar visibility
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const openBtn = document.querySelector('.toggle-btn');
    sidebar.classList.toggle('hidden-sidebar');
    openBtn.classList.toggle('hidden-open-btn');
}

// Define an array to store the conversation history
const conversationHistory = [];

// Add event listener to input field for Enter key
document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        calculateExpression();
    }
});

// Add event listener to 'Send' button
document.getElementById("send-btn").addEventListener("click", sendMessage);


// Add event listener to 'Calculate' button
document.getElementById("calculate-btn").addEventListener("click", calculateExpression);


// Add event listener to 'Calculate' button
document.getElementById("calculate-btn").addEventListener("click", calculateExpressions);