import { useState } from 'react'
import NoteForm from '../components/NoteForm'
import NoteList from '../components/NoteList'
import { createNote } from '../interfaces/Note'

export default function HomePage() {
  const [notes, setNotes] = useState([])
  const [editingNote, setEditingNote] = useState(null)

  // ➕ ADD
  const handleSave = ({ title, content }) => {
    if (editingNote) {
      // ✏️ UPDATE
      setNotes(notes.map(n =>
        n.id === editingNote.id ? { ...n, title, content } : n
      ))
      setEditingNote(null)
    } else {
      const newNote = createNote(Date.now(), title, content)
      setNotes([newNote, ...notes])
    }
  }

  // 🗑️ DELETE
  const handleDelete = (id) => {
    setNotes(notes.filter(n => n.id !== id))
  }

  // ✏️ SET EDIT MODE
  const handleEdit = (note) => {
    setEditingNote(note)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Notlarım</h1>
      <NoteForm
        onSave={handleSave}
        editingNote={editingNote}
        onCancelEdit={() => setEditingNote(null)}
      />
      <NoteList notes={notes} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  )
}