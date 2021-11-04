import React, { useContext } from 'react';
import Context_Notes from '../Context-notes/Context_Notes';
import useMousePosition from '../Custom Hooks/useMousePosition';

const Note = ({ obj }) => {
    const { dispatch } = useContext(Context_Notes);
    const position = useMousePosition();
    return (
        <div key={obj.title} >
            <h3> {obj.title}  <button onClick={() => {
                dispatch({
                    type: "REMOVE_NOTE",
                    removeTitle: obj.title
                })
            }} >Remove</button>  </h3>
            <p> {position.x} ---- {position.y} </p>
            <p>your description : {obj.description}</p>
        </div>
    )
}
export default Note;



