const fs = require("fs");
const getNotes = function () {
  return "Your msg";
};

const addNote = function (title, body) {
  const notes = loadNotes();
  // console.log(notes);

  const duplicateNote = notes.filter(function (notes) {
    return notes.title == title;
  });

  if (duplicateNote.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log("New Note Added");
  } else {
    console.log("Note title already taken");
  }
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
};
