const grid = document.querySelector('.grid');

const characters = [
    'aragorn',
    'frodo',
    'galadriel',
    'gandalf',
    'gimli',
    'legolas',
    'merry',
    'pippin',
    'sam',
    'sauron',
]; 

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = '';
let secondCard = '';


const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if (firstCharacter === secondCharacter) {



    }else {
      setTimeout(() => {

      firstCard.classList.remove('reveal-card');
      secondCard.classList.remove('reveal-card');

      firstCard = '';
      secondCard = '';

      }, 500);

    }
}

const revealCard = ({target}) => {

    if(target.parentNode.className.includes('reveal-card')) {
        return;
    }

    if (firstCard === '') {

        target.parentNode.className.includes('reveal-card');
        firstCard = target.parentNode;

    } else if (secondCard === '') {
       
        target.parentNode.className.includes('reveal-card');
        secondCard = target.parentNode;

    }



    target.parentNode.classList.add('reveal-card');

}

const createCard = (character) => {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../img/${character}.jpeg')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-character', character);
    return card; 
}

const loadGame = () => {

    const duplicateCharacters = [ ...characters, ...characters ];

    const shuffledArray = duplicateCharacters.sort( () => Math.random() - 0.5 );

    shuffledArray.forEach((character) => {

        const card = createCard(character);
        grid.appendChild(card);

    });
}

loadGame();