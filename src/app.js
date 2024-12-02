const pronouns = ["the", "our"];
const adjectives = ["great", "big"];
const nouns = ["jogger", "racoon"];
const extensions = [".com", ".net", ".us", ".io"];

function generateRandomDomain() {
  const pronoun = pronouns[Math.floor(Math.random() * pronouns.length)];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const extension = extensions[Math.floor(Math.random() * extensions.length)];
  return `${pronoun}${adjective}${noun}${extension}`;
}

const domainElement = document.getElementById("domain");
domainElement.textContent = generateRandomDomain();

document.getElementById("generateBtn").addEventListener("click", () => {
  domainElement.textContent = generateRandomDomain();
});
