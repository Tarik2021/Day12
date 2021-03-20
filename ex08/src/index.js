var contacts = [
  {
    firstName: "John",
    lastName: "Doe",
    number: "12365495208",
    likes: ["C", "C++", "C#"],
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    number: "4568295761",
    likes: ["Python", "Swift", "R"],
  },
  {
    firstName: "Richard",
    lastName: "Roe",
    number: "6938257149",
    likes: ["React", "Angular", "Vue"],
  },
  {
    firstName: "Jane",
    lastName: "Roe",
    number: "unknown",
    likes: ["JavaScript", "Node", "HTML & CSS"],
  },
];
function lookUpProfile(name, prop) {
  if (name === contacts.firstName && prop === contacts.likes) {
    const value = contacts[prop];
  return value;
  }
}
console.log(lookUpProfile("John", "likes"));
// treba vratit c c c
module.exports = lookUpProfile;
