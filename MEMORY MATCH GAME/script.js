const categories = {
   fruits: ['🍎', '🍌', '🍇', '🍓', '🍊', '🍉', '🍍', '🍑'],
   emojis: ['😀', '😂', '😍', '😎', '😢', '😡', '😱', '🤔'],
   animals: ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼'],
   planets: ['🌍', '🌕', '🌟', '🌌', '🪐', '☄️', '🌑', '🌞'],
   flags: ['🇺🇸', '🇬🇧', '🇨🇦', '🇦🇺', '🇩🇪', '🇫🇷', '🇯🇵', '🇧🇷']
};

let selectedCategory;
let cards = [];
let flippedCards = [];
let score = 0;
let timer;
let timeLeft = 30;

function startGame(category) {
   selectedCategory = category;
   cards = createCardArray(categories[category]);
   shuffle(cards);
   renderCards();
   resetGame();
}

function createCardArray(items) {
   return [...items, ...items]; // Createing pairs
}

function shuffle(array) {
   for (let i = array.length - 1; i > 0; i--) {
       const j = Math.floor(Math.random() * (i + 1));
       [array[i], array[j]] = [array[j], array[i]];
   }
}

function renderCards() {
   const cardsContainer = document.getElementById('cards-container');
   cardsContainer.innerHTML = '';
   cards.forEach((card, index) => {
       const cardElement = document.createElement('div');
       cardElement.classList.add('card');
       cardElement.setAttribute('data-index', index);
       cardElement.addEventListener('click', handleCardClick);
       cardsContainer.appendChild(cardElement);
   });
   document.getElementById('landing-page').classList.add('hidden');
   document.getElementById('game-container').classList.remove('hidden');
}

function handleCardClick(event) {
   const card = event.target;
   const index = card.getAttribute('data-index');

   if (flippedCards.length < 2 && !card.classList.contains('flipped')) {
       card.classList.add('flipped');
       card.textContent = cards[index];
       flippedCards.push({ card, index });

       if (flippedCards.length === 2) {
           setTimeout(checkForMatch, 1000);
       }
   }
}

function checkForMatch() {
   const [firstCard, secondCard] = flippedCards;

   if (cards[firstCard.index] === cards[secondCard.index]) {
       firstCard.card.classList.add('matched');
       secondCard.card.classList.add('matched');
       score += 10; // Increment score for a match
   } else {
       firstCard.card.textContent = '';
       secondCard.card.textContent = '';
       firstCard.card.classList.remove('flipped');
       secondCard.card.classList.remove('flipped');
   }

   flippedCards = [];
   updateScore();

   if (document.querySelectorAll('.matched').length === cards.length) {
       clearInterval(timer);
       showGameOverMessage('You Win! Final Score: ' + score);
   }
}

function updateScore() {
   document.getElementById('score').textContent = 'Score: ' + score;
}

function resetGame() {
   score = 0;
   timeLeft = 30;
   updateScore();
   startTimer();
}

function startTimer() {
   timer = setInterval(() => {
       timeLeft--;
       document.getElementById('timer').textContent = 'Time: ' + timeLeft;

       if (timeLeft <= 0) {
           clearInterval(timer);
           showGameOverMessage('Game Over! Final Score: ' + score);
       }
   }, 1000);
}

function showGameOverMessage(message) {
   const gameOverDiv = document.getElementById('game-over');
   gameOverDiv.textContent = message;
   gameOverDiv.classList.remove('hidden');
   document.getElementById('game-container').classList.add('hidden');
}

