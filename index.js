let player = {
    name: 'Hakeem',
    chips: 150
   }
let cards = []
let sum = 0
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el')
let playerEl = document.getElementById('player-el')
playerEl.textContent = player.name + ": $" + player.chips

console.log(playerEl.textContent)

console.log(cards)
function getRandomCard(){
   
    let randomNum = Math.floor(Math.random() * 13) + 1
    if (randomNum > 10){
        return 10
    } else if (randomNum === 1){
        return 11
    } else {
        return randomNum
    }
}
    console.log(randomNum)

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard 
   

    renderGame()
}

function renderGame() {
    cardsEl.textContent = 'Cards : '
for (i = 0; i < cards.length; i+=1){
    cardsEl.textContent += cards[i] + ' '
}
    sumEl.textContent = 'Sum :' + ' ' + sum
  if (sum < 21) {
    message = "Do you want to draw a new card? 🙂";
  } else if (sum === 21) {
    message = "Wohoo!, you got Blackjack 🤑";
    hasBlackJack = true;
  } else {
    message = "You are out of the game 😢";
    isAlive = false;
  }
    messageEl.textContent = message
   
  }

function newCard(){
    if (isAlive===true && hasBlackJack===false){
    let card = getRandomCard();
  sum += card
  cards.push(card)
  console.log(cards)
   renderGame()
}

}


