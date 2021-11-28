const quotes = [
	{
		quote: "If you don't know where you want to go, then it doesn't matter which path you take.",
		author: "Alice in the wonderland",
	},
	{
		quote: "Do what you like, love what you do.",
		author: "Tangled",
	},
	{
		quote: "Some people are worth melting for.",
		author: "Frozen",
	},
	{
		quote: "There is no one who can't fall. However, only those who get up again, will learn how to move forward.",
		author: "Bambi",
	},
	{
		quote: "Just think of happy thoughts and you'll fly.",
		author: "Peter Pan",
	},
	{
		quote: "Success in not given for free. You have to be able to do anything for your goals.",
		author: "Coco",
	},
	{
		quote: "Dobby is free!",
		author: "Harry Potter And The Chamber Of Secrets",
	},
	{
		quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
		author: "Harry Potter and the Goblet of Fire",
	},
	{
		quote: "Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.",
		author: "Harry Potter and the Prisoner of Azkaban",
	},
	{
		quote: "Working hard is important.But there is something that matters	even more believing in yourself." ,
		author: "Harry Potter And The Order Of The Phoenix",
	},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)]; 
//quotes중에서 랜덤으로 하나 선택

quote.innerText = todayQuote.quote;
author.innerText = `- ${todayQuote.author} -`;
