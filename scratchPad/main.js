"use strict";
//Draw card function
function draw(n){
	//Throw exception if invalid number
	if(n < 1 || n > 52) throw new Error("you must draw between 1 and 52 cards!");

	//Deck array
	const deck = [];

	//Builds the deck
	for(let suit of ["\u2660", "\u2663", "\u2665", "\u2666"]) {
		for(let rank of "A,2,3,4,5,6,7,8,9,10,J,Q,K".split(",")) {
			deck.push(`${rank}${suit}`);
		}
	}

	//Hand array
	const hand = [];

	//Builds hand with random cards
	while(n) {
		hand.push(deck.splice(Math.floor(Math.random() * deck.length), 1) [0]);
		n--;
	}
	return hand;
}

console.log("Your Hand:");
console.log(draw(5));
