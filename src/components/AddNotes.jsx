
import { useRef } from 'react';
import classess from '../css/styles.module.css'

const AddNotes = ({ currentNote, setCurrentNote, notesList, setNotesList, currentEditedNote, setCurrentEditedNote }) => {

    const ref = useRef(null);

    const handleNoteOnSubmit = (event) => {
        event.preventDefault();

        if (!!currentEditedNote) {
            const findCurrentEditedNoteIndex = notesList.findIndex(item => item.id === currentEditedNote.id);
            notesList[findCurrentEditedNoteIndex] = {
                ...notesList[findCurrentEditedNoteIndex],
                label: currentNote
            }
        }
        else {
            notesList.push({
                id: notesList.length + 1,
                label: currentNote
            });
        }

        setNotesList(notesList)
        setCurrentNote('');
        setCurrentEditedNote(null);

        ref.current.focus();
    }
    //console.log(notesList);

    return (
        <div>
            <form onSubmit={handleNoteOnSubmit} className={classess.form}>
                <input type="text"
                    id="current-note"
                    name="current-note"
                    className={classess.input}
                    value={currentNote || ''}
                    onChange={(event) => setCurrentNote(event.target.value)}
                    ref={ref}
                >

                </input>
                <button type='submit' className={classess.button}>
                    {
                        !!currentEditedNote ? 'Edit Notes' : 'Add Notes'
                    }
                </button>
            </form>
        </div>
    );
}

export default AddNotes;