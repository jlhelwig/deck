// I feel that I could have done a better job with answering this I hope you take this answer into consideration



var values = ["Ace","King","Queen","Jack","10","9","8","7","6","5","4","3","2"];
var suites = ["Spades","Hearts","Diamonds","Clubs"];
var card ={}
var deck = []


// I think a JSON Data structure would be best

for (let i=0; i<suites.length; i++){
  for (let j=0; j<values.length; j++){
    card={suit:suites[i], value:values[j]}
    deck.push(card);
  }
}


//Let's randomize this deck (shuffle) I actually did a presentation on the Fisher-Yates shuffle in class:

function shuffle(cards){
  let remaining =  cards.length;

  let index;
  let temporary;
  //while cards.length are not 0 -- which is a 'falsey' in javascript
  while(remaining){

    //pick a card-- any remaining card
    index = Math.floor(Math.random()*remaining);
    console.log("this is the index ",index);
    //take it out of the deck (actually reduce the size of the deck)
    remaining--;
    //this is the only tricky part we put it at the end
    //but first we have to take the last card and put it in a aside, temporaraly
    temporary=cards[remaining];
    //we take the random card and put it the end
    cards[remaining]=cards[index];
    //then we place the temporary card where the random card was.. pretty cool
    cards[index]=temporary;


  }
  return cards
}
//this is the randomized deck
console.log(shuffle(deck));
//this proves that we didn't lose any cards
console.log(deck.length);

//this is pulling the first card off the top:

console.log("The Top card is a ", deck[0].value, " of ", deck[0].suit);
