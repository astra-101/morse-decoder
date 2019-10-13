const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
var numbers = expr.match(/.{1,10}/g);
var text;
var numb=[];
for (a=0 ; a<numbers.length; a++){
    numb[a]=parseInt(numbers[a], 10)
    if (isNaN(numb[a])){ numb[a]=" "}
    else {numb[a]=numb[a].toString()}
numb[a] = numb[a].replace(/10/g, ".").replace(/11/g,"-")
if ( MORSE_TABLE[numb[a]]!==undefined) { numb[a]=MORSE_TABLE[numb[a]]}

}
text = numb.join('');
return text

}

module.exports = {
    decode
}