/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir samhljóðar */
const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');

/** Íslenskir sérhljóðar */
const VOWELS = 'aeiouyáéýúíóöæ'.split('');

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns {boolean} `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === 'string';

// Prófum fallið
console.assert(isString('hi') === true, 'isString: skilar `true` fyrir streng');
console.assert(isString(42) === false, 'isString: skilar `false` fyrir tölu');
console.assert(isString(null) === false, 'isString: skilar `false` fyrir null');

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = ' ') {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

function longest(str) {
    if (!isString(str)) {
      return null;
    }
    if (str === '') {
      return '';
    }
    const words = split(str);
    let longestWord = '';
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      }
    }
    return longestWord;
  }
  

console.assert(longest('halló heimur!') === 'heimur!', 'longest: skilar orði með greinarmerki');
console.assert(longest('') === '', 'longest: skilar tómu fyrir tóman streng');
console.assert(longest(123) === null, 'longest: skilar null ef inntak er ekki strengur');
console.assert(longest('uno dos') === 'uno', 'longest: skilar fyrsta orðiðinu ef annað/önnur jafn löng finnast');


function shortest(str) {
    if (!isString(str)) {
      return null;
    }
    if (str === '') {
      return '';
    }
  
    const words = split(str);
    let shortestWord = words[0];
  
    for (let i = 1; i < words.length; i++) {
      if (words[i].length < shortestWord.length) {
        shortestWord = words[i];
      }
    }
    return shortestWord;
  }
  
  console.assert(shortest('halló heimur!') === 'halló', 'shortest: finnur stysta orðið');
  console.assert(shortest('') === '', 'shortest: skilar tómu fyrir tóman streng');
  console.assert(shortest(123) === null, 'shortest: skilar null ef inntak er ekki strengur');
  console.assert(shortest('bók mál blár') === 'bók', 'shortest: skilar fyrsta stysta orðinu');
  



function reverse(str) {
    if (isString(str)) {
        const reversed = str.split('').reverse().join('');
        return reversed;
    }
    return null;
}

console.assert(reverse('hæ') === 'æh', 'reverse: snýr við einföldum streng');
console.assert(reverse(false) === null, 'reverse: ef ekki strengur, skila null');



// 1. (ekki palindrome) "halló" => false
// 2. (palindrome) "hah" => true
// 3. (ólöglegt inntak) null / false / 0 => false
// 4. "" ??? => false
// 5. "Hah" ??? => true


function palindrome(str) {
    if (isString(str) && str !== '') {
        const reversed = reverse(str);
        return str.toLowerCase() === reversed.toLowerCase();
    }
    return false;
}


console.assert(palindrome('halló') === false, 'palindrome: strengur, ekki');
console.assert(palindrome('hah') === true, 'palindrome: strengur, er');
console.assert(palindrome('') === false, 'palindrome: tómi strengur ekki');

function vowels(str) {
    if (!isString(str)) {
      return 0;
    }
    const lowerStr = str.toLowerCase(); //Þar sem vowels fylkið er skilgreint sem einungis litlir stafir
    let count = 0;
    for (let i = 0; i < lowerStr.length; i++) {
      if (VOWELS.includes(lowerStr[i])) {
        count++;
      }
    }
    return count;
  }
  
  console.assert(vowels('halló') === 2, 'vowels: finnur sérhljóða');
  console.assert(vowels('bcdfg') === 0, 'vowels: engir sérhljóðar');
  console.assert(vowels('áæóöú') === 5, 'vowels: íslenskir sérhljóðar');
  console.assert(vowels('') === 0, 'vowels: tómur strengur');
  console.assert(vowels(123) === 0, 'vowels: ekki strengur');
  

  function consonants(str) {
    if (!isString(str)) {
      return 0;
    }
    const lowerStr = str.toLowerCase(); //Þar sem constonants fylkið er skilgreint sem einungis litlir stafir
    let count = 0;
    for (let i = 0; i < lowerStr.length; i++) {
      if (CONSONANTS.includes(lowerStr[i])) {
        count++;
      }
    } 
    return count;
  }
  
  console.assert(consonants('halló') === 3, 'consonants: finnur samhljóða');
  console.assert(consonants('aeiou') === 0, 'consonants: engir samhljóðar');
  console.assert(consonants('þetta er próf') === 6, 'consonants: íslenskir samhljóðar');
  console.assert(consonants('') === 0, 'consonants: tómur strengur');
  console.assert(consonants(123) === 0, 'consonants: ekki strengur');

//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
    alert("Vinsamlegast sláðu inn streng eða smelltu á 'Cancel' til að hætta.");
  
    const input = prompt("Sláðu inn streng:");
  
    if (input === null || input.trim() === '') {
      return;
    }
  
    const longestWord = longest(input);
    const shortestWord = shortest(input);
    const reversedString = reverse(input);
    const vowelCount = vowels(input);
    const consonantCount = consonants(input);
    const isPalindrome = palindrome(input);
  
    alert(`
      Niðurstöður:
      - Lengsta orðið: ${longestWord}
      - Stysta orðið: ${shortestWord}
      - Öfugt: ${reversedString}
      - Fjöldi sérhljóða: ${vowelCount}
      - Fjöldi samhljóða: ${consonantCount}
      - Samhverfur: ${isPalindrome ? 'Já' : 'Nei'}
    `);
  
    if (confirm("Viltu greina annan streng?")) {
      start();
    }
  }
  