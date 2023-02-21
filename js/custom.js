const typingText = "We as JAKTIVE believes that creating catchy and unique ideas, should be perfected by implementing values, adding creative and innovative ideas, providing the best services, and also helping to develop our client's brand.";
const typingDelay = 20; // in milliseconds
const cursor = '.';

const element = document.getElementById('typing-text');
let index = 0;

function type() {
  if (index < typingText.length) {
    element.textContent += typingText.charAt(index);
    index++;

    setTimeout(type, typingDelay);
  } else {
    element.textContent = element.textContent.slice(0, -1);

    setTimeout(() => {
      element.textContent += cursor;
    }, 200);
  }
}

type();
