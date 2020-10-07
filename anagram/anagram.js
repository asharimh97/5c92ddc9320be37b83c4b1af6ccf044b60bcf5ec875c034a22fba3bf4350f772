const getCharMap = string => {
  const mappedChar = {};

  for (let char of string) {
    mappedChar[char] = mappedChar[char] + 1 || 1;
  }

  return mappedChar;
}

const checkAnagram = (stringA, stringB) => {
  const mappedA = getCharMap(stringA);
  const mappedB = getCharMap(stringB);

  if (stringA.length !== stringB.length)
    return false;

  for (let char in mappedA) {
    if (mappedA[char] !== mappedB[char])
      return false;
  }

  return true;
}

const strings = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'];
const mappedString = new Array(strings.length).fill(0);
let anagramMap = [];

for (let i = 0; i < strings.length; i++) {
  if (mappedString[i] !== 0)
    continue;

  const anagram = [];
  anagram.push(strings[i]);
  mappedString[i] = 1;

  for (let j = 0; j < strings.length; j++) {
    if (mappedString[j] !== 0 || strings[i] === strings[j])
      continue;

    if (checkAnagram(strings[i], strings[j])) {
      anagram.push(strings[j]);
      mappedString[j] = 1;
    }
  }

  anagramMap.push(anagram);
}

console.log(anagramMap);