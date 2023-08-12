/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/

function capSetence(text) {
  return text.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}

function capSentence(text) {
  return text.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
}

function capSentence(text) {
  return text.toLowerCase().split(' ').reduce((result, word) => result += word.charAt(0).toUpperCase() + word.slice(1) + ' ', '').trim();
}

function capSentence(text) {
  let wordsArray = text.toLowerCase().split(' ');

  for(let i = 0; i < wordsArray.length; i++) {
    wordsArray[i] = wordsArray[i].charAt(0).toUpperCase() + wordsArray[i].slice(1);
  }
  return wordsArray.join(' ');
}

function capSentence(text) {
  let wordsArray = text.toLowerCase().split(' ');
  let capsArray = [];
  wordsArray.forEach(word => {
    capsArray.push(word.charAt(0).toUpperCase() + word.slice(1));
  });
  return capsArray.join(' ');
}
