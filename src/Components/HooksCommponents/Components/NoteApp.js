import React, { useEffect, useReducer } from "react";
import NotesReducer from "../reducers/notes";
import NoteList from "./NoteList";
import AddNoteForm from "./AddNoteForm";
import Context_Notes from "../Context-notes/Context_Notes";

const App = () => {
    const [note, dispatch] = useReducer(NotesReducer);
    useEffect(() => {
        const notes = localStorage.getItem('notesArray') ? JSON.parse(localStorage.getItem('notesArray')) : [];
        if (notes) {
            dispatch({
                type: "POPULATE_DATA",
                notes
            })
        }
    }, []);
    useEffect(() => {
        const array = JSON.stringify(note);
        localStorage.setItem("notesArray", array);
    }, [note]);

    return (
        <Context_Notes.Provider value={{ note, dispatch }}>
            <h1> Add Notes </h1>
            <NoteList />
            <AddNoteForm />
        </Context_Notes.Provider>
    )
}



export { App as default };