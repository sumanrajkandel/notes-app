import logo from './logo.svg';
import classess from './css/styles.module.css'
import AddNotes from './components/AddNotes';
import { useState } from 'react';
import NoteList from './components/NoteList';

function App() {

  const [currentNote, setCurrentNote] = useState('');
  const [notesList, setNotesList] = useState([]);
  const [currentEditedNote, setCurrentEditedNote] = useState(null);

  return (
    <div className={classess.App}>
      <AddNotes
        currentNote={currentNote} setCurrentNote={setCurrentNote}
        notesList={notesList} setNotesList={setNotesList}
        currentEditedNote={currentEditedNote}
        setCurrentEditedNote={setCurrentEditedNote}
      ></AddNotes>

      <NoteList
        notesList={notesList}
        setNotesList={setNotesList}
        currentEditedNote={currentEditedNote}
        setCurrentNote={setCurrentNote}
        setCurrentEditedNote={setCurrentEditedNote}
      ></NoteList>

    </div>
  );
}

export default App;
