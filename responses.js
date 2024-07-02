const now = new Date();
const day = now.getDay();
const hours = now.getHours();
const minutes = now.getMinutes().toString().padStart(2, '0'); // Ensure minutes are always two digits

// Map day numbers to day names
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayName = dayNames[day];

// Define your responses JSON object with an additional flag for keyword matching
const responses = {
    "responses": [
        // English Transelated
        {
            "keywords": ["amerika", "worth"],
            "requireAllKeywords": true, // Change this to false if any one keyword is enough
            "responses": [
                "Amerika is worth about: $123.8 trillion",
                "Amerika is worth 23.8 trillion US$",
                "Amerika is worth 23.8 trillion USDollars"
            ]
        },
        {
            "keywords": ["you", "gay"],
            "requireAllKeywords": true, // Change this to false if any one keyword is enough
            "responses": [
                "No, I'm not gay because I'm an AI, and if you don't know that, you have a brain the size of an ant, or actually even smaller: AN ATOM",
                "If you have any more questions in mind just ask, I'm always here :)",
                "If you have any more to ask me, I'm always here :)"
            ]
        },
        {
            "keywords": ["time"],
            "requireAllKeywords": true, // Change this to false if any one keyword is enough
            "responses": [
                `Today it's ${dayName} and the time is currently: ${hours}:${minutes}`,
                `The time is currently: ${hours}:${minutes}`,
                `The time is: ${hours}:${minutes}`,
                `${hours}:${minutes}`
            ]
        },
        {
            "keywords": ["fix", "my", "life"],
            "requireAllKeywords": true, // Change this to false if any one keyword is enough
            "responses": [
                "⏳Hold on, thinking for a response:)",
                "💀Oops Something went wrong:(",
            ]
        },
                {
            "keywords": ["awesome"],
            "requireAllKeywords": true, // Change this to false if any one keyword is enough
            "responses": [
                "Cool:)",
                "Yeah, awesome",
                "If you have anymore questions in mind just ask im always here:)",
                "If you have anymore to ask me, im always here:)"
            ]
        },
        {
            "keywords": ["what", "is", "brainrot"],
            "requireAllKeywords": true, // Change this to false if any one keyword is enough
            "responses": [
                "Sure, here is the definition of brainrot: They're attributing the phenomenon to brain rot. The term comes from the idea that the internet is rotting the brains of frequent users who are extremely online or chronically online, leading them to reference memes and slang terms that aren't typically used offline — and they're doing it a lot."
            ]
        },
        {
            "keywords": ["what", "mean", "brainrot"],
            "requireAllKeywords": true, // Change this to false if any one keyword is enough
            "responses": [
                "Sure, here is the definition of brainrot: They're attributing the phenomenon to brain rot. The term comes from the idea that the internet is rotting the brains of frequent users who are extremely online or chronically online, leading them to reference memes and slang terms that aren't typically used offline — and they're doing it a lot."
            ]
        },
        {
            "keywords": ["im", "great"],
            "requireAllKeywords": true, // Change this to false if any one keyword is enough
            "responses": [
                "Good, that's nice to hear.",
                "Great!",
                "Awesome!",
                "Fantastic!",
                "Glad to hear it!",
                "That's wonderful!"
            ]
        },
        {
            "keywords": ["equ"],
            "requireAllKeywords": true, // Change this to false if any one keyword is enough
            "responses": [
                "Here is an example of how to make a calculation: {number1} plus {number2} etc. etc. = {result}. You can also do this with multiplication (mul), division (div), subtraction (sub), and addition (add)."
            ]
        },
        {
            "keywords": ["hello"],
            "requireAllKeywords": true, // Change this to false if any one keyword is enough
            "responses": [
                "Hi there!",
                "Hello!",
                "Hey! How are you?",
                "Hi!",
                "Hello, nice to see you!",
                "Hey there!"
            ]
        },
        {
            "keywords": ["how", "are", "you"],
            "requireAllKeywords": true, // Change this to false if any one keyword is enough
            "responses": [
                "I'm good, thank you!",
                "Feeling great!",
                "I'm doing well, thanks for asking.",
                "Doing fine, how about you?",
                "Pretty good, thanks!",
                "All good on this end!"
            ]
        },
        {
            "keywords": ["what", "your", "name"],
            "requireAllKeywords": true, // Change this to false if any one keyword is enough
            "responses": [
                "I'm a chatbot. What about you?",
                "I'm your friendly chatbot!",
                "You can call me SigmaAI.",
                "I'm Sigma, nice to meet you!",
                "I'm just a bot here to help!",
                "I'm your virtual assistant."
            ]
        },
        {
            "keywords": ["bye"],
            "requireAllKeywords": true, // Change this to false if any one keyword is enough
            "responses": [
                "Goodbye! Have a nice day.",
                "See you later!",
                "Bye! Come back soon.",
                "Take care!",
                "Until next time!",
                "Goodbye, have a great day!"
            ]
        },
        {
            "keywords": ["help"],
            "requireAllKeywords": false,
            "responses": [
                "Sure, what do you need help with?",
                "How can I assist you today?",
                "I'm here to help. What do you need?",
                "What do you need assistance with?",
                "How can I be of service?",
                "Let me know what you need help with."
            ]
        },
        {
            "keywords": ["weather"],
            "requireAllKeywords": false,
            "responses": [
                "The weather today is sunny with a chance of rain.",
                "It's currently cloudy with a mild breeze.",
                "Expect some thunderstorms later today.",
                "It's quite warm and sunny today.",
                "The weather forecast predicts rain in the evening.",
                "It's a bit chilly outside today."
            ]
        },
        {
            "keywords": ["time"],
            "requireAllKeywords": false,
            "responses": [
                "The current time is {time}.",
                "It's {time} right now.",
                "The time now is {time}.",
                "It's {time}, don't be late!",
                "Right now, it's {time}.",
                "The time is exactly {time}."
            ]
        },
        {
            "keywords": ["joke"],
            "requireAllKeywords": false,
            "responses": [
                "Why don't scientists trust atoms? Because they make up everything!",
                "Why did the scarecrow win an award? Because he was outstanding in his field!",
                "Why don't skeletons fight each other? They don't have the guts.",
                "What do you call fake spaghetti? An impasta!",
                "Why don't some couples go to the gym? Because some relationships don't work out.",
                "Why did the math book look sad? Because it had too many problems."
            ]
        },
        {
            "keywords": ["news"],
            "requireAllKeywords": false,
            "responses": [
                "Here is the latest news: [insert news source].",
                "Check out today's top stories: [insert news source].",
                "Stay updated with the latest news: [insert news source].",
                "Here's what's happening today: [insert news source].",
                "Catch up on the news: [insert news source].",
                "Top headlines for today: [insert news source]."
            ]
        },
        {
            "keywords": ["thank", "you"],
            "requireAllKeywords": false,
            "responses": [
                "You're welcome!",
                "No problem!",
                "My pleasure!",
                "Anytime!",
                "Glad I could help!",
                "You're welcome, happy to assist!"
            ]
        },
        {
            "keywords": ["who", "are", "you"],
            "requireAllKeywords": true,
            "responses": [
                "I'm your friendly chatbot.",
                "I'm a virtual assistant here to help you.",
                "You can call me SigmaAI.",
                "I'm Sigma, at your service.",
                "I'm an AI created to assist you.",
                "I'm your digital assistant."
            ]
        },
        {
            "keywords": ["what", "can", "you", "do"],
            "requireAllKeywords": true,
            "responses": [
                "I can assist with a variety of tasks. Just ask!",
                "I'm here to help with any questions you have.",
                "I can provide information, tell jokes, and much more.",
                "You can ask me about the weather, time, or even for a joke!",
                "I can help with general inquiries, calculations, and more.",
                "Ask me anything, and I'll do my best to help."
            ]
        },
        {
            "keywords": ["tell", "me", "about", "yourself"],
            "requireAllKeywords": true,
            "responses": [
                "I'm an AI chatbot designed to assist with your queries.",
                "I'm here to help you with information and tasks.",
                "I can chat, provide information, and more.",
                "I'm QuerioAI, your virtual assistant.",
                "I'm an AI created to make your life easier.",
                "Think of me as your friendly digital helper."
            ]
        },
        {
            "keywords": ["do", "you", "know", "me"],
            "requireAllKeywords": true,
            "responses": [
                "I know you're someone who likes to chat with me!",
                "I know you're a curious individual.",
                "I know you have great questions for me.",
                "I don't know you personally, but I'm here to help.",
                "I can get to know you better through our conversations.",
                "I remember our previous chats!"
            ]
        },
        {
            "keywords": ["favorite", "color"],
            "requireAllKeywords": true,
            "responses": [
                "I like all colors, but I think blue is quite calming.",
                "I don't have a favorite color, but I enjoy them all!",
                "Every color has its own beauty.",
                "I think all colors are amazing!",
                "It's hard to choose just one color.",
                "I appreciate the diversity of colors."
            ]
        },
        {
            "keywords": ["favorite", "food"],
            "requireAllKeywords": true,
            "responses": [
                "I don't eat, but I hear pizza is quite popular!",
                "I enjoy learning about all kinds of food.",
                "I think sushi is quite interesting.",
                "I don't have a favorite food, but I like learning about them.",
                "I've heard a lot of people like burgers.",
                "I don't eat, but I can help you find recipes!"
            ]
        },
        {
            "keywords": ["music"],
            "requireAllKeywords": false,
            "responses": [
                "I enjoy all kinds of music. What's your favorite?",
                "Music is a universal language. Do you have a favorite genre?",
                "I think music is a wonderful way to express emotions.",
                "I love learning about different types of music.",
                "Do you have any favorite songs or artists?",
                "Music is great! Tell me what you like to listen to."
            ]
        },
        {
            "keywords": ["movie"],
            "requireAllKeywords": false,
            "responses": [
                "I don't watch movies, but I hear Inception is a good one.",
                "Many people recommend The Shawshank Redemption.",
                "I've heard good things about The Godfather.",
                "I can help you find information about movies!",
                "Tell me your favorite movie!",
                "Do you have any movie recommendations?"
            ]
        },
        {
            "keywords": ["hobby"],
            "requireAllKeywords": false,
            "responses": [
                "I love learning new things and helping people.",
                "My hobby is assisting users like you!",
                "I enjoy chatting and providing information.",
                "Helping people is my favorite thing to do.",
                "I like learning about your hobbies.",
                "Tell me about your hobbies!"
            ]
        },
        {
            "keywords": ["game"],
            "requireAllKeywords": false,
            "responses": [
                "Games are fun! Do you have a favorite?",
                "I can tell you about popular games.",
                "What's your favorite game?",
                "I enjoy learning about new games.",
                "Games are a great way to relax. Do you have any recommendations?",
                "Tell me about the games you like to play."
            ]
        },
        {
            "keywords": ["book"],
            "requireAllKeywords": false,
            "responses": [
                "Books are wonderful! Do you have a favorite?",
                "I can help you find book recommendations.",
                "What's your favorite book?",
                "I love learning about different books.",
                "Books are a great way to gain knowledge. Do you have any recommendations?",
                "Tell me about the books you like to read."
            ]
        },
        {
            "keywords": ["holiday"],
            "requireAllKeywords": false,
            "responses": [
                "Holidays are great! Do you have a favorite?",
                "I can tell you about different holidays around the world.",
                "What's your favorite holiday?",
                "I enjoy learning about various holidays.",
                "Holidays are a wonderful time to relax. Do you have any plans?",
                "Tell me about your favorite holiday traditions."
            ]
        },
        {
            "keywords": ["sports"],
            "requireAllKeywords": false,
            "responses": [
                "Sports are exciting! Do you have a favorite?",
                "I can help you find information about different sports.",
                "What's your favorite sport?",
                "I enjoy learning about different sports.",
                "Sports are a great way to stay active. Do you play any?",
                "Tell me about the sports you like to watch or play."
            ]
        },
        {
            "keywords": ["travel"],
            "requireAllKeywords": false,
            "responses": [
                "Traveling is wonderful! Do you have a favorite destination?",
                "I can help you find information about travel destinations.",
                "What's your favorite place to visit?",
                "I enjoy learning about different places around the world.",
                "Traveling is a great way to experience new cultures. Do you have any travel plans?",
                "Tell me about the places you've traveled to."
            ]
        },
        {
            "keywords": ["pet"],
            "requireAllKeywords": false,
            "responses": [
                "Pets are amazing! Do you have any?",
                "I can help you find information about different pets.",
                "What's your favorite type of pet?",
                "I enjoy learning about different animals.",
                "Pets bring a lot of joy. Do you have any stories about your pets?",
                "Tell me about your pets!"
            ]
        },
        {
            "keywords": ["joke"],
            "requireAllKeywords": false,
            "responses": [
                "Why don't scientists trust atoms? Because they make up everything!",
                "Why did the scarecrow win an award? Because he was outstanding in his field!",
                "Why don't skeletons fight each other? They don't have the guts.",
                "What do you call fake spaghetti? An impasta!",
                "Why don't some couples go to the gym? Because some relationships don't work out.",
                "Why did the math book look sad? Because it had too many problems."
            ]
        },
        {
            "keywords": ["history"],
            "requireAllKeywords": false,
            "responses": [
                "History is fascinating! Do you have a favorite historical period?",
                "I can help you find information about historical events.",
                "What's your favorite historical event?",
                "I enjoy learning about different times in history.",
                "History helps us understand the present. Do you have any historical figures you admire?",
                "Tell me about your favorite parts of history."
            ]
        },
        {
            "keywords": ["science"],
            "requireAllKeywords": false,
            "responses": [
                "Science is amazing! Do you have a favorite branch of science?",
                "I can help you find information about scientific discoveries.",
                "What's your favorite scientific topic?",
                "I enjoy learning about different scientific fields.",
                "Science helps us understand the world. Do you have any favorite scientists?",
                "Tell me about your favorite science facts."
            ]
        },
        {
            "keywords": ["technology"],
            "requireAllKeywords": false,
            "responses": [
                "Technology is evolving quickly! Do you have a favorite tech gadget?",
                "I can help you find information about the latest technology.",
                "What's your favorite piece of technology?",
                "I enjoy learning about new technological advancements.",
                "Technology makes life easier. Do you have any favorite tech trends?",
                "Tell me about the technology you find interesting."
            ]
        },
        {
            "keywords": ["art"],
            "requireAllKeywords": false,
            "responses": [
                "Art is beautiful! Do you have a favorite artist?",
                "I can help you find information about different art styles.",
                "What's your favorite type of art?",
                "I enjoy learning about different art forms.",
                "Art is a great way to express creativity. Do you have any favorite artworks?",
                "Tell me about the art you enjoy."
            ]
        },
        {
            "keywords": ["hobbies"],
            "requireAllKeywords": false,
            "responses": [
                "Hobbies are fun! Do you have any?",
                "I can help you find new hobbies to try.",
                "What's your favorite hobby?",
                "I enjoy learning about different hobbies.",
                "Hobbies are a great way to relax. Do you have any hobby recommendations?",
                "Tell me about your hobbies!"
            ]
        },
        {
            "keywords": ["coding"],
            "requireAllKeywords": false,
            "responses": [
                "Coding is awesome! Do you have a favorite programming language?",
                "I can help you find coding resources.",
                "What's your favorite thing to code?",
                "I enjoy learning about different programming languages.",
                "Coding is like magic. Do you have any coding projects?",
                "Tell me about your coding experiences."
            ]
        },
        {
            "keywords": ["exercise"],
            "requireAllKeywords": false,
            "responses": [
                "Exercise is important! Do you have a favorite workout?",
                "I can help you find exercise routines.",
                "What's your favorite way to stay active?",
                "I enjoy learning about different fitness activities.",
                "Exercise helps keep you healthy. Do you have any fitness goals?",
                "Tell me about your exercise routines."
            ]
        },
        {
            "keywords": ["food"],
            "requireAllKeywords": false,
            "responses": [
                "Food is delicious! Do you have a favorite dish?",
                "I can help you find recipes.",
                "What's your favorite type of cuisine?",
                "I enjoy learning about different foods.",
                "Food brings people together. Do you have any favorite recipes?",
                "Tell me about the foods you love."
            ]
        },
        {
            "keywords": ["drink"],
            "requireAllKeywords": false,
            "responses": [
                "Drinks are refreshing! Do you have a favorite beverage?",
                "I can help you find drink recipes.",
                "What's your favorite drink?",
                "I enjoy learning about different beverages.",
                "Drinks are a great way to relax. Do you have any favorite drink recipes?",
                "Tell me about the drinks you enjoy."
            ]
        },
        {
            "keywords": ["season"],
            "requireAllKeywords": false,
            "responses": [
                "Seasons are wonderful! Do you have a favorite?",
                "I can help you find information about different seasons.",
                "What's your favorite season?",
                "I enjoy learning about the different seasons.",
                "Each season has its own beauty. Do you have any seasonal traditions?",
                "Tell me about your favorite season."
            ]
        },
        {
            "keywords": ["holiday"],
            "requireAllKeywords": false,
            "responses": [
                "Holidays are great! Do you have a favorite?",
                "I can tell you about different holidays around the world.",
                "What's your favorite holiday?",
                "I enjoy learning about various holidays.",
                "Holidays are a wonderful time to relax. Do you have any plans?",
                "Tell me about your favorite holiday traditions."
            ]
        },
        {
            "keywords": ["quote"],
            "requireAllKeywords": false,
            "responses": [
                "Here's a quote for you: 'The best way to predict the future is to create it.'",
                "How about this quote: 'Success is not final, failure is not fatal: It is the courage to continue that counts.'",
                "Here's a motivational quote: 'Believe you can and you're halfway there.'",
                "I have a quote for you: 'Act as if what you do makes a difference. It does.'",
                "Here's an inspiring quote: 'What you get by achieving your goals is not as important as what you become by achieving your goals.'",
                "How about this quote: 'The only way to do great work is to love what you do.'"
            ]
        },
        {
            "keywords": ["motivation"],
            "requireAllKeywords": false,
            "responses": [
                "You can do it! Believe in yourself.",
                "Stay positive and work hard. Good things will happen.",
                "Keep pushing forward. You're doing great!",
                "Don't give up. Success is just around the corner.",
                "Stay focused and keep moving forward.",
                "You have the power to achieve your dreams. Keep going!"
            ]
        },
        {
            "keywords": ["birthday"],
            "requireAllKeywords": false,
            "responses": [
                "Happy Birthday! Have a fantastic day!",
                "Wishing you a very Happy Birthday!",
                "May your birthday be filled with joy and happiness!",
                "Happy Birthday! Enjoy your special day!",
                "Here's to a wonderful birthday celebration!",
                "Happy Birthday! Make it a memorable one!"
            ]
        },
        {
            "keywords": ["holiday"],
            "requireAllKeywords": false,
            "responses": [
                "Holidays are great! Do you have a favorite?",
                "I can tell you about different holidays around the world.",
                "What's your favorite holiday?",
                "I enjoy learning about various holidays.",
                "Holidays are a wonderful time to relax. Do you have any plans?",
                "Tell me about your favorite holiday traditions."
            ]
        },
        {
            "keywords": ["recipe"],
            "requireAllKeywords": false,
            "responses": [
                "I can help you find recipes. What are you looking to cook?",
                "What's your favorite dish to make?",
                "I love sharing recipes! What are you interested in cooking?",
                "I can find a recipe for you. What ingredients do you have?",
                "Cooking is fun! Tell me what you want to make.",
                "I have lots of recipes to share. What are you craving?"
            ]
        },
        {
            "keywords": ["poem"],
            "requireAllKeywords": false,
            "responses": [
                "Roses are red, violets are blue, I'm a chatbot, here to chat with you!",
                "Poetry is beautiful! Do you have a favorite poem?",
                "I can help you find poems. What's your favorite type?",
                "Here's a short poem for you: 'The sun sets in the west, giving nature its rest.'",
                "Poetry expresses emotions wonderfully. Tell me your favorite.",
                "I love poems! Do you write poetry?"
            ]
        },
        {
            "keywords": ["advice"],
            "requireAllKeywords": false,
            "responses": [
                "I'm here to help. What's on your mind?",
                "How can I assist you today?",
                "I'm here to offer advice. What's your question?",
                "Tell me what you need help with, and I'll do my best.",
                "I'm happy to help with any advice you need.",
                "What kind of advice are you looking for?"
            ]
        },
        {
            "keywords": ["funny"],
            "requireAllKeywords": false,
            "responses": [
                "Here's a funny joke: Why don't scientists trust atoms? Because they make up everything!",
                "Want to hear something funny? Why did the scarecrow win an award? Because he was outstanding in his field!",
                "I have a funny joke for you: Why don't skeletons fight each other? They don't have the guts.",
                "Here's something to make you laugh: What do you call fake spaghetti? An impasta!",
                "How about this: Why don't some couples go to the gym? Because some relationships don't work out.",
                "Here's a funny one: Why did the math book look sad? Because it had too many problems."
            ]
        },
    ]
};