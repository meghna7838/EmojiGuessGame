const emojiDetails = [
    {description: "Smiling face with sunglasses", emoji:'😎' },
    { description: "Thumbs up", emoji: "👍" },
    { description: "Heart eyes", emoji: "😍" },
    { description: "Crying face", emoji: "😢" },
    { description: "Party popper", emoji: "🎉" },
    // Add more emoji descriptions here
  ];

  let currentEmojiIndex = 0;
  let score = 0;
  let time = 10;
  let timerE;

 const emojiElement = document.getElementById("emoji");
 const guessInput = document.getElementById("guess-input");
 const scoreElement = document.getElementById("score");
 const result = document.getElementById("result");
 const timer = document.getElementById("timer");

 //Function to display emoji
 //displayEmoji();
 function displayEmoji()
 {
  emojiElement.textContent = emojiDetails[currentEmojiIndex].emoji;
 }
 function nextEmoji()
 {
  currentEmojiIndex++;
  if(currentEmojiIndex>= emojiDetails.length)
  {
    currentEmojiIndex=0;
  }
  displayEmoji();
 }

 function checkInput()
 {
  let ans = guessInput.value.trim().toLowerCase();
  let correctAns = emojiDetails[currentEmojiIndex].description.trim().toLowerCase();

  if(ans === correctAns)
  {
  score++;
  result.textContent = "Right!!!!";
  }
  else
  {
    result.textContent = "Wrong!!!!"
  }
  scoreElement.textContent = `Score: ${score}`;
  guessInput.value = "";
  guessInput.focus();
  nextEmoji();

 }
 guessInput.addEventListener('keypress',(event)=>{
  if(event.key === "Enter")
  {
    checkInput();
  }
 });
 
 document.addEventListener("DOMContentLoaded",()=>{
 displayEmoji();
 timer.textContent = `Time left: ${time}`;
 startTimer();
 }
 );
 function startTimer(){
  timerE = setInterval(()=>{
    time--;
    timer.textContent = `Time left: ${time}`;

    if(time<=0)
    {
      endGame();
    }
  },1000);
  
 }

 function endGame(){
clearInterval(timerE);
guessInput.disabled =true;
timer.textContent = "";  
}

