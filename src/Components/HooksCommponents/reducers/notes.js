const NotesReducer=(state,action)=>{
    switch(action.type){
        case "POPULATE_DATA" : return action.notes;
        case "ADD_NOTE" : return [...state, {
         title:action.title,
         description:action.description
        }];
        case "REMOVE_NOTE" : return  state.filter((obj) => action.removeTitle !== obj.title);
        default :  return state;
    }
}
export {NotesReducer as default };