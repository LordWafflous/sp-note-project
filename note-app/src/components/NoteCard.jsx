export default function NoteCard({ note, onDelete, onEdit }) {
  return (
    <div className="card shadow-sm h-100">
      <div className="card-body">
        <h5 className="card-title">{note.title}</h5>
        <p className="card-text text-muted">{note.content}</p>
        <small className="text-secondary">{note.date}</small>
      </div>
      <div className="card-footer d-flex gap-2">
        <button className="btn btn-warning btn-sm" onClick={() => onEdit(note)}>
          Düzenle
        </button>
        <button className="btn btn-danger btn-sm" onClick={() => onDelete(note.id)}>
          Sil
        </button>
      </div>
    </div>
  )
}