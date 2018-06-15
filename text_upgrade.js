let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords = story.split(' ');

let betterWords = storyWords.filter(word => ! overusedWords.includes(word));

//Better words

let really = 0;
let very = 0;
let basically = 0;

for (let swIndex = 0; swIndex <= storyWords.length; swIndex++) {
    bword = storyWords[swIndex];

if (bword ==='really'){
  really++
} else if (bword  ==='very'){
  very++
} else if (bword ==='basically') {
  basically++
};
if( (! really>1 && bword==='really') || 
   (! very > 1 && bword==='very') ||
   (! basically > 1 && bword==='basically')) {
  betterWords.pop (bword);
} 
  
};
console.log(very, basically, really);
betWords = betterWords.join(' ');
console.log(betWords);

//Counting sentences

let sentences = 0;
betterWords.forEach( word => {
  if (word[word.length-1] === '.' || word[word.length-1] === '!') {
    sentences+=1;
  }
});
console.log('We have ' + sentences + ' sentences');
