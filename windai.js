// Enkel statistisk AI för WindAI
// Kan enkelt fyllas med miljoner keywords senare

const responses = [
  { keywords: ["hej", "hallå"], reply: ["Hej!", "Hallå där!", "Hej på dig!"] },
  { keywords: ["spel", "minecraft", "roblox"], reply: ["Jag älskar spel! Vad vill du veta?", "Spel är kul! Fråga mig något om Minecraft eller Roblox."] },
  { keywords: ["kod", "javascript", "lua"], reply: ["Jag kan hjälpa dig med kod! Vad vill du göra?", "Behöver du tips i JavaScript, Lua eller C++?"] },
  { keywords: ["hejdå", "ses"], reply: ["Hejdå! Vi pratar snart igen.", "Ses snart!"] }
];

// Funktion för att hitta svar
function getResponse(input) {
  input = input.toLowerCase();
  let possibleResponses = [];

  // Leta igenom alla keywords
  for (let i = 0; i < responses.length; i++) {
    for (let j = 0; j < responses[i].keywords.length; j++) {
      if (input.includes(responses[i].keywords[j])) {
        possibleResponses = responses[i].reply;
        break;
      }
    }
  }

  // Slumpa svar om det finns flera alternativ
  if (possibleResponses.length > 0) {
    return possibleResponses[Math.floor(Math.random() * possibleResponses.length)];
  }

  // Standard svar om inget matchar
  return "Hmm, det förstod jag inte. Kan du säga på ett annat sätt?";
}

// Funktion för att skicka meddelande
function sendMessage() {
  const input = document.getElementById("userInput").value;
  if (!input) return;

  const chatBox = document.getElementById("chat");
  chatBox.innerHTML += `<p><b>Du:</b> ${input}</p>`;
  const response = getResponse(input);
  chatBox.innerHTML += `<p><b>WindAI:</b> ${response}</p>`;

  // Scrolla till botten
  chatBox.scrollTop = chatBox.scrollHeight;

  // Rensa input
  document.getElementById("userInput").value = "";
