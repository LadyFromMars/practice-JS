const getUserChoice = userInput =>{
userInput = userInput.toLowerCase();
 if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
   return userInput;
 } else {
   console.log ('Error: incorrect input');
 }}



const getComputerChoice =() =>{
 randomNumber = Math.floor(Math.random() *3);
  
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'scissors'; 
    case 2: 
      return 'paper';
  }
}


const determineWinner = (userChoice, computerChoice) => {
  
  if (userChoice === computerChoice){
    return 'It is a tie!';} 
  
   else if (userChoice === 'rock') {
        if (computerChoice === 'paper'){
      	return 'Computer brain is a gain!';} 
        else {return 'Go Humans!!';}}
     
   if (userChoice  === 'paper'){
    if (computerChoice === 'scissors'){
      return 'You snooze you lose!';
    } else {
      return 'You are rock! ';
    }
  } ;
  if (userChoice === 'scissors'){
      if (computerChoice === 'rock'){
        return 'Dont be upsetti eat some spaghetti!';
      } 
    else {
        return 'Whooohooo! Eat my dust!';
      } 
  } 
}

const playGame = () => {
  
  const userChoice = getUserChoice('rock'); 
  const computerChoice = getComputerChoice();
  
  console.log(`You chose a ${userChoice}`);
  console.log(`AI chose a  ${computerChoice}`);
  
  console.log(determineWinner(userChoice, computerChoice));
  
}

playGame();





