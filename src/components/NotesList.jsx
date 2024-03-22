import React from 'react';
import Note from "./Note";
import AddNote from "./AddNote";

const NotesList = ({ notes, handleAddNotes, handleDeleteNotes }) => {
    return (
        <div className="notes-list">
            <AddNote handleAddNotes={handleAddNotes} />

            {notes.map((note) => (
                <Note 
                    key={note.id} 
                    id={note.id} 
                    text={note.text}
                    date={note.date}
                    handleDeleteNotes={handleDeleteNotes}
                />
            ))}
        </div>
    );
};

export default NotesList;
