import classes from '../css/styles.module.css';

const NoteList = ({ notesList, currentEditedNote, setCurrentNote, setCurrentEditedNote, setNotesList }) => {


    function handleEditClick(editedNoteItem) {
        setCurrentEditedNote(editedNoteItem)
        setCurrentNote(editedNoteItem.label);
        //ref.current.focus();

    }

    function handleDeleteClick(deletingNoteItem) {
        alert('Are you sure, you want to delete this note ?')
        setNotesList(notesList.filter(item => item.id !== deletingNoteItem.id));
        //setNotesList(toBeRemovedNote);
    }

    return (
        <ul className={classes.noteList}>
            {
                notesList && notesList.length > 0 ?
                    (
                        notesList.map(item =>
                            <li key={item.id}>
                                <label>{item.label}</label>
                                <div>
                                    <button onClick={() => handleEditClick(item)}>Edit</button>
                                    <button onClick={() => handleDeleteClick(item)}>Delete</button>
                                </div>
                            </li>
                        )
                    )
                    :
                    (<div className={classes.noNotes}>{`No Notes Added`} </div>)
            }
        </ul>
    )
}
export default NoteList;

/*
Understand and brush-up ES6 Concepts :
1. map method
2. Destructuring [abc, setAbc] = useState('')
3. spread ... operator
4. string letral
5. && check in js
6. objects
7. array of objects
8. array methods

Understand React Concept :
1. passing data from chile to parent component using props is used in this code
2. inline export syntax of component instead of writing at the end
3. props passing directly instead of passing individual params while passing data from parent to chile or vice versa

8. what are the multiple ways to add css in React.JS app : 
     I. using Css Module(used here) (create abc.module.css file> import on component classess and apply)
     II.
     III.
     IV.
     V.
9. 
    
to do :
1. Enter press event capture
2. Set mouse foucs on textbox
3. confirmation on delete click
4. Validation on add click textbox
5. Edit > cancel | update implementation
6. multi-selection and select-all before notes and delete
*/

