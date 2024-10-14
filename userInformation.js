const name = "John Doe";
const age = 26;
const passions = ["Ski", "Hiking", "Cinema"];

function displayPassions() {
  console.log(`My passions are :`);
  for (let i = 0; i < passions.length; i += 1) {
    console.log(`- ${passions[i]}`);
  }
}

module.exports = {
  name: name,
  age: age,
  displayPassions: displayPassions,
};
