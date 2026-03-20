const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const chatWindow = document.getElementById("chatWindow");

function addMessage(text, type) {
  const div = document.createElement("div");
  div.className = `msg ${type}`;
  div.textContent = text;
  chatWindow.appendChild(div);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function replyToUser(text) {
  const lower = text.toLowerCase();

  let reply = "Great! Tell me more about that in English.";

  if (lower.includes("hello") || lower.includes("hi")) {
    reply = "Hello! Nice to meet you. What topic would you like to practice today?";
  } else if (lower.includes("job")) {
    reply = "That’s a good topic. Can you describe your job in three English sentences?";
  } else if (lower.includes("travel")) {
    reply = "Wonderful! Where would you like to travel, and why?";
  } else if (lower.includes("food")) {
    reply = "Nice choice. What kind of food do you like most?";
  }

  setTimeout(() => addMessage(reply, "ai"), 500);
}

function handleSend() {
  const text = userInput.value.trim();
  if (!text) return;

  addMessage(text, "user");
  userInput.value = "";
  replyToUser(text);
}

sendBtn.addEventListener("click", handleSend);

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleSend();
  }
});
