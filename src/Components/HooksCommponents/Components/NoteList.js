import React, { useContext } from 'react';
import Note from './Note';
import Context_Notes from '../Context-notes/Context_Notes';

const NoteList = ( ) => {
    const { note } = useContext(Context_Notes);
    return (
        <div>
            {note && note.map((obj) => (
                <Note obj={obj} key={obj.title}   />
            ))}
        </div>
    )
}
export default NoteList;