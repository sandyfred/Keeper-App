import React, {useState} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from './CreateArea';

function App() {
    const[notes, setNotes] = useState([]);

    function addNote(note) {
        if(note.title.trim() !== "" || note.content.trim() !== "") {
            setNotes([...notes,note]);
        }
    }

    function deleteNote(id) {
        setNotes(notes.filter((note,index) => index !== id && note));
    }

    return ( 
        <div>
            <Header />
            <CreateArea onAdd={addNote}/>
            {
                notes.map((note,index) => 
                <Note 
                    key={index} 
                    onDelete={deleteNote} 
                    id={index} 
                    title={note.title} 
                    content={note.content}/>
                )
            }
            <Footer />
        </div>
    );    
    
}
 
export default App;