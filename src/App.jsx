import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

const App = () => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
    return savedNotes || [];
  });

  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(() => {
    const isDarkMode = localStorage.getItem('darkMode');
    return isDarkMode !== null ? JSON.parse(isDarkMode) : false;
  });

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const toggleMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <div className="container">
        <Header handleToggleDarkMode={toggleMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNotes={addNote}
          handleDeleteNotes={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;


