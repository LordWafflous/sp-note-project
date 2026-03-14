import NoteCard from './NoteCard'

export default function NoteList({ notes, onDelete, onEdit }) {
  if (notes.length === 0) {
    return <p className="text-center text-muted mt-4">Not yok! Yukarıdan ekleyebilirsin :D</p>
  }

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {notes.map(note => (
        <div className="col" key={note.id}>
          <NoteCard note={note} onDelete={onDelete} onEdit={onEdit} />
        </div>
      ))}
    </div>
  )
}