const allQuotes = [
    {
        author: "Steve Jobs",
        quote: "The only way to do great work is to love what you do."
    },
    {
        author: "Albert Einstein",
        quote: "In the middle of difficulty lies opportunity."
    },
    {
        author: "Oscar Wilde",
        quote: "Be yourself; everyone else is already taken."
    },
    {
        author: "Nelson Mandela",
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall."
    },
    {
        author: "Peter Drucker",
        quote: "The best way to predict the future is to create it."
    },

    {
        author: "Maya Angelou",
        quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."
    },
    {
        author: "Mahatma Gandhi",
        quote: "Be the change that you wish to see in the world."
    },
    {
        author: "Rumi",
        quote: "The wound is the place where the Light enters you."
    },
    {
        author: "Anne Frank",
        quote: "How wonderful it is that nobody need wait a single moment before starting to improve the world."
    },
    {
        author: "Mark Twain",
        quote: "The two most important days in your life are the day you are born and the day you find out why."
    },
    {
        author: "Walt Disney",
        quote: "All our dreams can come true, if we have the courage to pursue them."
    },
    {
        author: "Eleanor Roosevelt",
        quote: "No one can make you feel inferior without your consent."
    },
    {
        author: "Vincent van Gogh",
        quote: "I would rather die of passion than of boredom."
    },
    {
        author: "J.K. Rowling",
        quote: "It does not do to dwell on dreams and forget to live."
    },
    {
        author: "Ralph Waldo Emerson",
        quote: "Do not go where the path may lead, go instead where there is no path and leave a trail."
    },
    {
        author: "Abraham Lincoln",
        quote: "In the end, it's not the years in your life that count. It's the life in your years."
    },
    {
        author: "Helen Keller",
        quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart."
    },
    {
        author: "Martin Luther King Jr.",
        quote: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that."
    },
    {
        author: "William Shakespeare",
        quote: "All the world's a stage, and all the men and women merely players."
    },
    {
        author: "Stephen Covey",
        quote: "The key is not to prioritize what's on your schedule, but to schedule your priorities."
    },
    {
        author: "Thomas Edison",
        quote: "I have not failed. I've just found 10,000 ways that won't work."
    },
    {
        author: "Leo Tolstoy",
        quote: "If you want to be happy, be."
    },
    {
        author: "Mother Teresa",
        quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier."
    },
    {
        author: "Winston Churchill",
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts."
    },
    {
        author: "Socrates",
        quote: "An unexamined life is not worth living."
    },
    {
        author: "Hermann Hesse",
        quote: "Some of us think holding on makes us strong; but sometimes it is letting go."
    },
    {
        author: "J.R.R. Tolkien",
        quote: "Not all those who wander are lost."
    },
    {
        author: "John Lennon",
        quote: "Life is what happens when you're busy making other plans."
    },
    {
        author: "Coco Chanel",
        quote: "The most courageous act is still to think for yourself. Aloud."
    },
    {
        author: "Sigmund Freud",
        quote: "The interpretation of dreams is the royal road to a knowledge of the unconscious."
    }
];

console.log(allQuotes.length);


const btn = document.querySelector(".btn")
const quote = document.querySelector(".quote")
const author = document.querySelector(".author")


btn.addEventListener("click", function () {
    const random = Math.floor(Math.random() * allQuotes.length);
    quote.innerText = `"${allQuotes[random].quote}"`
    author.innerText = `${allQuotes[random].author}`
})


