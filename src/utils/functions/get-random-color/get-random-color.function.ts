const PREFIX = '#';
const ARRAY_LENGTH = 6;
const AVAILABLE_LETTERS = '0123456789ABCDEF';

function getRandomLetter(): string {
  const availableLettersLength = AVAILABLE_LETTERS.length;
  const randomIndex = Math.floor(Math.random() * availableLettersLength);

  return AVAILABLE_LETTERS[randomIndex];
}

export function getRandomColor(): string {
  const firstLetter = AVAILABLE_LETTERS[0];
  const memory = new Array(ARRAY_LENGTH).fill(firstLetter);

  const resultArray = memory.map(getRandomLetter);
  const joinedResultArray = resultArray.join('');

  return `${PREFIX}${joinedResultArray}`;
}
