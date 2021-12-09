// Constant declarations for cards and suitUnicodes
const suit = ['Diamonds','Hearts','Clubs','Spades'];
const suitUnicodes = ['&diams;','&hearts;','&clubs;','&spades;']
const cardNums = ['2','3','4','5','6','7','8','9','10','Jack','Queen','King','Ace'];
let score = 0

//Button Listener. Onclick calls for a card.
document.getElementById('myButton').onclick = function changeContent() { 
        let vals = deal();
        let scoreNum = getScore(vals[1]);

        score+=scoreNum;
        if(score>21){score='Bust';}
        
        document.getElementById('outputS').innerHTML = suit[vals[0]];
        document.getElementById('outputC').innerHTML = cardNums[vals[1]];
        document.getElementById('outputScore').innerHTML = score;
}

// Function will create a card, two value array.
function deal(){
  let x = Math.floor(Math.random()*4);
  let y = Math.floor(Math.random()*13);
  return [x,y];
};

// Return a score value for the card given
function getScore(val){
  let numVal = cardNums[val];
  let score;
    if((numVal === "2")||(numVal === "3")||(numVal === "4")||(numVal === "5")||(numVal === "6")||(numVal === "7")||(numVal === "8")||(numVal === "9")){
      score = Number(numVal);
    }else if((numVal === "10")||(numVal === "Jack")||(numVal === "Queen")||(numVal === "King")){
      score = 10;
    }else if(numVal==="Ace"){
      score = 11;
    }
    return score;
}

















