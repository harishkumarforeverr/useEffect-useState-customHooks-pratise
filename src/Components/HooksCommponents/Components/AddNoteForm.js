import React, { useState, useContext } from "react";
import Context_Notes from "../Context-notes/Context_Notes";
import useMousePosition from "../Custom Hooks/useMousePosition";
const AddNoteForm = () => {

    const position = useMousePosition();
    const { dispatch } = useContext(Context_Notes);
    const [title, setTitle] = useState("");
    const [description, setdescription] = useState("");


    const AddNoesToArray = (e) => {
        e.preventDefault();
        dispatch({
            type: "ADD_NOTE",
            title, description
        })
        setTitle("");
        setdescription("");
    }
    return (
        <>
            <h1> Add a new Options  :::: {position.x} --- {position.y}       </h1>

            <form onSubmit={AddNoesToArray}>
                <input
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }} />
                <textarea
                    value={description}
                    onChange={(e) => {
                        setdescription(e.target.value);
                    }}
                />
                <button> Submit </button>
            </form>
        </>
    )
}
export default AddNoteForm;