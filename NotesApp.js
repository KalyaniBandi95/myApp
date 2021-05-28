import React, { useEffect, useState } from 'react'

const NotesApp =() =>{

    const [notes,setNotes] =useState([]) //arry dest
    const [title,setTitle]= useState('')
    const [body,setBody]= useState('')


    const addNote=(e) =>{
        e.preventDefault()
        setNotes([
            ...notes,
            {title,body}
        ])
        setTitle('')
        setBody('')
    }

    const removeNote = (title) => {
        setNotes(notes.filter((note) => note.title !== title))
    }

    useEffect(() => {
        console.log("I'm getting called")
        const notesdata = JSON.parse(localStorage.getItem('notes'))
        if(notesdata){
            setNotes(notesdata)
        }
    },[])

    useEffect(() => {
        console.log("I'm getting called after updating")
        localStorage.setItem('notes',JSON.stringify(notes))
    },[notes])
 
return (
    <div>
        {notes.map((note) =>( 
                <div key ={note.title}>  
                    <h3>{note.title}</h3> 
                    <h2>{note.body}</h2> 
                    <button className="btn btn-danger" onClick={() => removeNote(note.title)}>X</button>
                </div>))}

        <h3>User Notes</h3>

        <form onSubmit={addNote} >
            <input value={title} onChange={(e) => setTitle(e.target.value)}/><br/><br/>
            <input value={body} onChange={(e) => setBody(e.target.value)}/>
            <button className = 'btn btn-info'>Add</button>
        </form>
    </div>
)}

export default NotesApp