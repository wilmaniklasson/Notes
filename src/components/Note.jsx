import React from 'react';
import { MdDelete } from 'react-icons/md';

const Note = ({ id, text, date, handleDeleteNotes }) => {
    return (
        <div className="note">
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <MdDelete onClick={() => handleDeleteNotes(id)} className="delete-icon" size="1.3em" />
            </div>
        </div>
    );
}

export default Note;
