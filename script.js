function askAhmad() {
  const input = document.getElementById("userInput").value;
  const responseBox = document.getElementById("response");
  if (!input) {
    responseBox.innerText = "Please enter a question.";
    return;
  }
  responseBox.innerHTML = `<strong>AHMAD:</strong> I'm AHMAD, your smart assistant. You asked: "${input}". Here's my (simulated) answer: I’ll get back to you with that!`;
}

function generateImage() {
  const prompt = document.getElementById("imagePrompt").value;
  const img = document.getElementById("placeholderImage");
  img.src = "https://source.unsplash.com/400x200/?" + encodeURIComponent(prompt || "ai");
}

function cloneVoice() {
  const name = document.getElementById("voiceInput").value;
  const voiceBox = document.getElementById("voiceResult");
  if (!name) {
    voiceBox.innerText = "Please enter a name.";
    return;
  }
  voiceBox.innerHTML = `<strong>AHMAD:</strong> Voice cloned for <em>${name}</em>. (Just kidding! Demo only)`;
}