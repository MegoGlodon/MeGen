function clearAll() {
	const memeContainer = document.querySelector(".meme-content");
	memeContainer.innerHTML = "";
	const jokeContainer = document.querySelector(".joke-content");
	jokeContainer.innerHTML = "";
	const quoteContainer = document.querySelector(".quote-content");
	quoteContainer.innerHTML = "";
	const riddleContainer = document.querySelector(".riddle-content");
	riddleContainer.innerHTML = "";
}
function Morememes() {
	clearAll();
	const memeUrl = getRandomData("memes");
	const memeContainer = document.querySelector(".meme-content");
	const newMeme = document.createElement("img");
	newMeme.setAttribute("src", memeUrl);
	memeContainer.appendChild(newMeme);
	console.log(newMeme);
}
function ShowJoke() {
	clearAll();
	const jokeTxt = getRandomData("jokes");
	const jokeContainer = document.querySelector(".joke-content");
	const newJoke = document.createElement("p");
	newJoke.textContent = jokeTxt;
	jokeContainer.appendChild(newJoke);
	console.log(newJoke);
}

function ShowQuote() {
	clearAll();
	const quoteTxt = getRandomData("quotes");
	const quoteContainer = document.querySelector(".quote-content");
	const newQuote = document.createElement("p");
	const quote = quoteTxt.quote;
	const qAuthor = quoteTxt.author;
	const newAuthor = document.createElement("p");
	newQuote.textContent = quoteTxt.quote;
	newAuthor.textContent = quoteTxt.author;
	quoteContainer.appendChild(newQuote);
	quoteContainer.appendChild(newAuthor);
	console.log(newQuote);
	console.log(newAuthor);
}

function ShowRiddle() {
	clearAll();
	const riddleTxt = getRandomData("riddles");
	const riddleContainer = document.querySelector(".riddle-content");
	const newRiddle = document.createElement("p");
	const rQuestion = riddleTxt.question;
	const newAnswer = document.createElement("p");
	// const rAnswer = riddleTxt.answer;
	newRiddle.textContent = riddleTxt.question;
	newAnswer.textContent = riddleTxt.answer;
	newAnswer.setAttribute('id', 'riddle-answer');
	riddleContainer.appendChild(newRiddle);
	riddleContainer.appendChild(newAnswer);
	newAnswer.hidden = true;
	console.log(newRiddle);
}

 function ShowAnswer() {
const newAnswer= document.querySelector("#riddle-answer");
	newAnswer.hidden = false;
 }

const memes = [
	"https://sayingimages.com/wp-content/uploads/after-four-years-engineering-memes.png",
	"https://i.redd.it/gk3m4zi7ycp61.jpg",
	"https://cdn-0.tutorial45.com/wp-content/uploads/2020/08/engineering-meme-electrical-engineering.jpg"
];
const jokes = [
	"A programmer walks to the butcher shop and buys a kilo of meat.  An hour later he comes back upset that the butcher shortchanged him by 24 grams.",
	"Programming is 10% science, 20% ingenuity, and 70% getting the ingenuity to work with the science.",
	"There are three kinds of lies: Lies, damned lies, and benchmarks."
];
const quotes = [
	{
		quote: "I could either watch it happen or be a part of it.",
		author: "Elon Musk"
	},
	{
		quote: "The only way to do great work is to love what you do.",
		author: "Steve Jobs"
	},
	{ quote: "We don't crash EVER!", author: "Mark Zuckerberg" }
];
const riddles = [
	{
		question: "What has to be broken before you can use it?",
		answer: "An egg"
	},
	{ question: "What month of the year has 28 days?", answer: "All of them" },
	{
		question: "What is always in front of you but can’t be seen?",
		answer: "The future"
	}
];

const data = {
	memes,
	jokes,
	quotes,
	riddles
};
function rn_num(len) {
	return Math.floor(Math.random() * len);
}
function getRandomData(type) {
	return data[type][rn_num(data[type].length)];
}
// Morememes();
// console.log(getRandomData('memes'));
