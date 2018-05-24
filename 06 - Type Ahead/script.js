
const ENDPOINT = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(ENDPOINT)
  .then(blob => blob.json().then(data =>
    cities.push(...data)),
  );

const findMatches = function findMatches(wordToMatch, wordList) {
  return cities.filter((city) => {
    const regEx = new RegExp(wordToMatch, 'gi'); // second argument is flags, 'global', 'insensitive'
  });
};

console.log(cities);
