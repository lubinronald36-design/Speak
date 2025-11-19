const conversation = document.getElementById('conversation');
const userInput = document.getElementById('userInput');
const submitButton = document.getElementById('submit');

const responses = {
  'hello': 'Hello! How can I assist you?',
  'hi': 'Hi! What\'s up?',
  'how are you': 'I\'m good, thanks! How about you?',
  'what\'s your name': 'My name is Meta Llama, nice to meet you!',
};

submitButton.addEventListener('click', () => {
  const userInputValue = userInput.value.toLowerCase();
  let response = '';

  if (responses[userInputValue]) {
    response = responses[userInputValue];
  } else {
    response = 'I didn\'t understand that.';
  }

  conversation.innerHTML += <p>You: ${userInput.value}</p><p>System: ${response}</p>;
  userInput.value = '';
});
